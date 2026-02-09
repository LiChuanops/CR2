import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useStockTake } from "@/context/StockTakeContext";
import { useOperators } from "@/hooks/useOperators";

export function SidePanel() {
  const { state, dispatch } = useStockTake();
  const { forceRefresh } = useOperators();

  const handleRefresh = async () => {
    if (!navigator.onLine) {
      dispatch({ type: "SHOW_ALERT", message: "Cannot refresh: You are offline." });
      return;
    }

    const users = await forceRefresh();
    if (users && users.length > 0) {
      dispatch({ type: "SHOW_ALERT", message: "Operator list updated successfully!" });
    } else {
      dispatch({
        type: "SHOW_ALERT",
        message: "Failed to update operator list.",
      });
    }
    dispatch({ type: "SET_SIDE_MENU", open: false });
  };

  return (
    <Sheet
      open={state.sideMenuOpen}
      onOpenChange={(open) => dispatch({ type: "SET_SIDE_MENU", open })}
    >
      <SheetContent side="left" className="w-[250px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-3 mt-6">
          <Button
            variant="outline"
            className="w-full justify-start h-11"
            onClick={handleRefresh}
          >
            Refresh Operator List
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
