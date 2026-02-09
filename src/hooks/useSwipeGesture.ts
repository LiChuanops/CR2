import { useEffect, useRef } from "react";

const SWIPE_THRESHOLD = 50;
const EDGE_AREA = 50;

export function useSwipeGesture(onSwipeRight: () => void) {
  const touchStart = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      touchStart.current = {
        x: e.changedTouches[0].screenX,
        y: e.changedTouches[0].screenY,
      };
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].screenX;
      const endY = e.changedTouches[0].screenY;
      const deltaX = endX - touchStart.current.x;
      const deltaY = endY - touchStart.current.y;

      if (
        Math.abs(deltaX) > Math.abs(deltaY) &&
        Math.abs(deltaX) > SWIPE_THRESHOLD &&
        deltaX > 0 &&
        touchStart.current.x < EDGE_AREA
      ) {
        onSwipeRight();
      }
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeRight]);
}
