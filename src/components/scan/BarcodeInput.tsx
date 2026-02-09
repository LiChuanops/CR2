import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useBarcodeScanner } from "@/hooks/useBarcodeScanner";
import { useStockTake } from "@/context/StockTakeContext";

export function BarcodeInput() {
  const { inputRef, handleInput, handleKeyDown } = useBarcodeScanner();
  const { state } = useStockTake();

  // Refocus barcode input when modal/alert closes or page switches to scan
  useEffect(() => {
    if (state.currentPage === "scan" && !state.modalOpen && !state.alert.open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [state.modalOpen, state.alert.open, state.currentPage, inputRef]);

  return (
    <div className="bg-card p-4 rounded-lg mb-4 border border-border">
      <Input
        ref={inputRef}
        type="text"
        placeholder="扫描条码 | Scan Barcode"
        autoFocus
        onChange={(e) => handleInput(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e, e.currentTarget.value)}
        className="text-base h-11"
      />
    </div>
  );
}
