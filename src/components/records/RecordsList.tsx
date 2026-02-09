import { useStockTake } from "@/context/StockTakeContext";
import { RecordGroup } from "./RecordGroup";

export function RecordsList() {
  const { state, dispatch } = useStockTake();

  const handleUpdate = (
    recordIndex: number,
    itemIndex: number,
    boxQty: number,
    pieceQty: number
  ) => {
    dispatch({
      type: "UPDATE_RECORD",
      recordIndex,
      itemIndex,
      boxQuantity: boxQty,
      pieceQuantity: pieceQty,
    });
  };

  const handleAlert = (message: string) => {
    dispatch({ type: "SHOW_ALERT", message });
  };

  if (state.scanRecords.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        暂无记录 | No records yet
      </div>
    );
  }

  return (
    <div className="mb-4">
      {state.scanRecords.map((record, index) => (
        <RecordGroup
          key={`${record.timestamp}-${index}`}
          record={record}
          recordIndex={index}
          onUpdate={handleUpdate}
          onAlert={handleAlert}
        />
      ))}
    </div>
  );
}
