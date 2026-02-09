import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useStockTake } from "@/context/StockTakeContext";

export function QuantityModal() {
  const { state, dispatch } = useStockTake();
  const [boxQty, setBoxQty] = useState("");
  const [pieceQty, setPieceQty] = useState("");
  const boxRef = useRef<HTMLInputElement>(null);
  const pieceRef = useRef<HTMLInputElement>(null);

  const product = state.selectedProduct;

  const hasCTN = product?.skus.some((s) => s.type === "CTN") ?? false;
  const hasPKT = product?.skus.some((s) => s.type === "PKT") ?? false;

  useEffect(() => {
    if (state.modalOpen) {
      setBoxQty("");
      setPieceQty("");
      // Focus the first visible input
      setTimeout(() => {
        if (hasCTN) {
          boxRef.current?.focus();
        } else if (hasPKT) {
          pieceRef.current?.focus();
        }
      }, 100);
    }
  }, [state.modalOpen, hasCTN, hasPKT]);

  const handleSubmit = () => {
    const box = Math.max(0, parseInt(boxQty) || 0);
    const piece = Math.max(0, parseInt(pieceQty) || 0);

    if (box === 0 && piece === 0) {
      dispatch({
        type: "SHOW_ALERT",
        message: "请至少输入一个数量！Please enter at least one quantity!",
      });
      return;
    }

    dispatch({ type: "SUBMIT_QUANTITY", boxQuantity: box, pieceQuantity: piece });
  };

  const handleBoxKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (hasPKT) {
        pieceRef.current?.focus();
      } else {
        handleSubmit();
      }
    }
  };

  const handlePieceKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  if (!product) return null;

  return (
    <Dialog
      open={state.modalOpen}
      onOpenChange={(open) => {
        if (!open) dispatch({ type: "CLOSE_MODAL" });
      }}
    >
      <DialogContent className="w-[95%] max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">{product.name}</DialogTitle>
          <DialogDescription className="text-base">{product.packaging}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 mt-2">
          {hasCTN && (
            <>
              <label className="font-semibold text-foreground text-base">
                箱数量 | Ctn Qty：
              </label>
              <Input
                ref={boxRef}
                type="number"
                min="0"
                placeholder="输入箱数 | Input Ctn Qty"
                value={boxQty}
                onChange={(e) => setBoxQty(e.target.value)}
                onKeyDown={handleBoxKeyDown}
                className="h-12 text-lg"
              />
            </>
          )}
          {hasPKT && (
            <>
              <label className="font-semibold text-foreground text-base">
                散货数量 | Pkt Qty：
              </label>
              <Input
                ref={pieceRef}
                type="number"
                min="0"
                placeholder="输入散货数 | Input Pkt Qty"
                value={pieceQty}
                onChange={(e) => setPieceQty(e.target.value)}
                onKeyDown={handlePieceKeyDown}
                className="h-12 text-lg"
              />
            </>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <Button className="h-12 text-base" onClick={handleSubmit}>确认 | Confirm</Button>
          <Button
            variant="outline"
            className="h-12 text-base"
            onClick={() => dispatch({ type: "CLOSE_MODAL" })}
          >
            取消 | Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
