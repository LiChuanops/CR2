import { useRef, useCallback } from "react";
import { useStockTake } from "@/context/StockTakeContext";

export function useBarcodeScanner() {
  const { state, dispatch } = useStockTake();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchProduct = useCallback(
    (barcode: string) => {
      const trimmed = barcode.trim();
      if (!trimmed) return;

      const product = state.products.find((p) => p.barcode === trimmed);

      if (product && !product.scanned) {
        dispatch({ type: "SELECT_PRODUCT", product });
      } else if (product && product.scanned) {
        dispatch({
          type: "SHOW_ALERT",
          message: "此产品已经盘点过了！This product has already been counted!",
        });
      } else {
        dispatch({
          type: "SHOW_ALERT",
          message: "未找到产品！No product found!",
        });
      }

      // Clear input
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [state.products, dispatch]
  );

  const handleInput = useCallback(
    (value: string) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      const trimmed = value.trim();
      if (trimmed.length >= 3) {
        timeoutRef.current = setTimeout(() => {
          searchProduct(trimmed);
        }, 300);
      }
    },
    [searchProduct]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, value: string) => {
      if (e.key === "Enter") {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        searchProduct(value);
      }
    },
    [searchProduct]
  );

  const focusInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return { inputRef, handleInput, handleKeyDown, focusInput };
}
