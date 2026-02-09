import { useState, useEffect, useCallback } from "react";
import type { Operator } from "@/types";
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "@/lib/supabase";

const CACHE_KEY = "userCache";
const CACHE_TTL = 43200000; // 12 hours in ms

function getCachedOperators(): Operator[] | null {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;
  try {
    const { timestamp, users } = JSON.parse(cached);
    if (Date.now() - timestamp < CACHE_TTL) {
      return users;
    }
    localStorage.removeItem(CACHE_KEY);
  } catch {
    localStorage.removeItem(CACHE_KEY);
  }
  return null;
}

function cacheOperators(users: Operator[]) {
  localStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), users }));
}

export function useOperators() {
  const [operators, setOperators] = useState<Operator[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchOperators = useCallback(async () => {
    const url = `${SUPABASE_URL}/rest/v1/profiles?select=user_name&shift=eq.Morning&is_active=eq.true&role=eq.warehouse_staff`;

    try {
      setLoading(true);
      const response = await fetch(url, {
        headers: {
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
      });

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

      const data = await response.json();
      if (!data || data.length === 0) throw new Error("No data found");

      const users: Operator[] = data.map(
        (user: { user_name: string }, index: number) => ({
          id: index.toString(),
          name: user.user_name,
        })
      );

      setOperators(users);
      cacheOperators(users);
      return users;
    } catch (error) {
      console.error("Error fetching operators:", error);
      return [];
    } finally {
      setLoading(false);
    }
  }, []);

  const forceRefresh = useCallback(async () => {
    localStorage.removeItem(CACHE_KEY);
    return fetchOperators();
  }, [fetchOperators]);

  useEffect(() => {
    const cached = getCachedOperators();
    if (cached) {
      setOperators(cached);
    } else {
      fetchOperators();
    }
  }, [fetchOperators]);

  return { operators, loading, forceRefresh };
}
