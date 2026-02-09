import { Progress } from "@/components/ui/progress";
import { useStockTake } from "@/context/StockTakeContext";

export function ScanProgress() {
  const { state } = useStockTake();
  const total = state.products.length;
  const scanned = state.products.filter((p) => p.scanned).length;
  const percentage = total > 0 ? (scanned / total) * 100 : 0;

  return (
    <div className="bg-primary p-4 rounded-lg mb-4">
      <h1 className="text-primary-foreground text-xl font-bold mb-2">
        2号房库存盘点 | CR2 Stock Take
      </h1>
      <Progress value={percentage} className="h-5 bg-primary-foreground/20 [&_[data-slot=progress-indicator]]:bg-primary-foreground" />
      <span className="text-primary-foreground/80 text-sm mt-1 block">
        {scanned}/{total} 完成度 | Progress
      </span>
    </div>
  );
}
