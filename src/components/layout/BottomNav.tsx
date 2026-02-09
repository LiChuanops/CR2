import { Button } from "@/components/ui/button";
import { useStockTake } from "@/context/StockTakeContext";

export function BottomNav() {
  const { state, dispatch } = useStockTake();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border grid grid-cols-2 gap-0 z-50">
      <Button
        variant={state.currentPage === "scan" ? "default" : "ghost"}
        className="h-12 rounded-none text-sm font-medium"
        onClick={() => dispatch({ type: "SET_PAGE", page: "scan" })}
      >
        盘点 | Stock Take
      </Button>
      <Button
        variant={state.currentPage === "records" ? "default" : "ghost"}
        className="h-12 rounded-none text-sm font-medium"
        onClick={() => dispatch({ type: "SET_PAGE", page: "records" })}
      >
        记录 | Record
      </Button>
    </div>
  );
}
