import { Input } from "@/components/ui/input";
import { useBarcodeScanner } from "@/hooks/useBarcodeScanner";

export function BarcodeInput() {
  const { inputRef, handleInput, handleKeyDown } = useBarcodeScanner();

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
