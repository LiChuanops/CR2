import { useCallback } from "react";
import { useStockTake } from "@/context/StockTakeContext";
import { BottomNav } from "@/components/layout/BottomNav";
import { SidePanel } from "@/components/layout/SidePanel";
import { ScanProgress } from "@/components/scan/ScanProgress";
import { BarcodeInput } from "@/components/scan/BarcodeInput";
import { ProductList } from "@/components/scan/ProductList";
import { QuantityModal } from "@/components/scan/QuantityModal";
import { RecordsList } from "@/components/records/RecordsList";
import { SubmitSection } from "@/components/records/SubmitSection";
import { useSwipeGesture } from "@/hooks/useSwipeGesture";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function AlertDialog() {
  const { state, dispatch } = useStockTake();

  return (
    <Dialog
      open={state.alert.open}
      onOpenChange={(open) => {
        if (!open) dispatch({ type: "CLOSE_ALERT" });
      }}
    >
      <DialogContent className="w-[80%] max-w-[300px]">
        <DialogTitle className="sr-only">Alert</DialogTitle>
        <DialogDescription className="text-center text-base text-foreground pt-2">
          {state.alert.message}
        </DialogDescription>
        <DialogFooter className="sm:justify-center">
          <Button
            variant="secondary"
            onClick={() => dispatch({ type: "CLOSE_ALERT" })}
          >
            确定 Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function LoadingOverlay() {
  const { state } = useStockTake();

  if (!state.isSubmitting) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[3000] backdrop-blur-sm flex items-center justify-center">
      <div className="bg-card p-6 rounded-lg text-center shadow-lg">
        <div className="w-10 h-10 border-4 border-muted border-t-primary rounded-full animate-spin mx-auto mb-3" />
        <p>正在提交数据 | Loading...</p>
      </div>
    </div>
  );
}

export default function App() {
  const { state, dispatch } = useStockTake();

  const handleSwipeRight = useCallback(() => {
    dispatch({ type: "SET_SIDE_MENU", open: true });
  }, [dispatch]);

  useSwipeGesture(handleSwipeRight);

  return (
    <div className="min-h-screen bg-muted/50 p-3 pb-14 font-sans text-foreground">
      {state.currentPage === "scan" && (
        <div className="min-h-[calc(100vh-80px)] pb-[70px]">
          <ScanProgress />
          <BarcodeInput />
          <ProductList />
        </div>
      )}

      {state.currentPage === "records" && (
        <div className="min-h-[calc(100vh-80px)] pb-[70px]">
          <div className="bg-primary p-4 rounded-lg mb-4">
            <h1 className="text-primary-foreground text-xl font-bold m-0">
              盘点记录 | Stock Take Record
            </h1>
          </div>
          <RecordsList />
          <SubmitSection />
        </div>
      )}

      <BottomNav />
      <QuantityModal />
      <AlertDialog />
      <LoadingOverlay />
      <SidePanel />
    </div>
  );
}
