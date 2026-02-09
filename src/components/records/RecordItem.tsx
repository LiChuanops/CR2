import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import type { RecordItem as RecordItemType } from "@/types";

interface RecordItemProps {
  item: RecordItemType;
  recordIndex: number;
  itemIndex: number;
  onUpdate: (recordIndex: number, itemIndex: number, boxQty: number, pieceQty: number) => void;
  onAlert: (message: string) => void;
}

export function RecordItem({ item, recordIndex, itemIndex, onUpdate, onAlert }: RecordItemProps) {
  const [editing, setEditing] = useState(false);
  const [boxQty, setBoxQty] = useState(item.boxQuantity.toString());
  const [pieceQty, setPieceQty] = useState(item.pieceQuantity.toString());
  const pieceRef = useRef<HTMLInputElement>(null);

  const handleDoubleClick = () => {
    if (editing) return;
    setEditing(true);
    setBoxQty(item.boxQuantity.toString());
    setPieceQty(item.pieceQuantity.toString());
  };

  const saveChanges = () => {
    if (!editing) return;
    const newBox = boxQty !== "" ? parseInt(boxQty) : 0;
    const newPiece = pieceQty !== "" ? parseInt(pieceQty) : 0;
    onUpdate(recordIndex, itemIndex, newBox, newPiece);
    setEditing(false);
    onAlert("记录已更新！Record Updated!");
  };

  return (
    <div
      className={`py-2 border-b border-border last:border-b-0 ${editing ? "bg-muted" : ""}`}
      onDoubleClick={handleDoubleClick}
    >
      <h3 className="font-semibold text-foreground text-base m-0">{item.name}</h3>
      <p className="text-sm text-muted-foreground">{item.packaging}</p>
      <div className="mt-2">
        <div className="flex items-center my-1">
          <span className="min-w-[90px] text-muted-foreground">箱 | CTN:</span>
          {editing ? (
            <Input
              type="number"
              className="w-[70px] h-8 ml-1.5"
              value={boxQty}
              autoFocus
              onChange={(e) => setBoxQty(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") pieceRef.current?.focus();
              }}
              onBlur={() => {
                setTimeout(() => {
                  if (!pieceRef.current || document.activeElement !== pieceRef.current) {
                    saveChanges();
                  }
                }, 200);
              }}
            />
          ) : (
            <span className="ml-2.5 text-foreground font-bold">{item.boxQuantity}</span>
          )}
        </div>
        <div className="flex items-center my-1">
          <span className="min-w-[90px] text-muted-foreground">包 | PKT:</span>
          {editing ? (
            <Input
              ref={pieceRef}
              type="number"
              className="w-[70px] h-8 ml-1.5"
              value={pieceQty}
              onChange={(e) => setPieceQty(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") saveChanges();
              }}
              onBlur={() => {
                setTimeout(saveChanges, 200);
              }}
            />
          ) : (
            <span className="ml-2.5 text-foreground font-bold">{item.pieceQuantity}</span>
          )}
        </div>
      </div>
    </div>
  );
}
