import { Card, CardContent } from "@/components/ui/card";
import type { ScanRecord } from "@/types";
import { RecordItem } from "./RecordItem";

interface RecordGroupProps {
  record: ScanRecord;
  recordIndex: number;
  onUpdate: (recordIndex: number, itemIndex: number, boxQty: number, pieceQty: number) => void;
  onAlert: (message: string) => void;
}

export function RecordGroup({ record, recordIndex, onUpdate, onAlert }: RecordGroupProps) {
  return (
    <Card className="mb-3 py-0">
      <CardContent className="p-4">
        <div className="font-semibold border-b border-border pb-2 mb-3 text-foreground">
          {record.timestamp}
        </div>
        {record.items.map((item, itemIndex) => (
          <RecordItem
            key={itemIndex}
            item={item}
            recordIndex={recordIndex}
            itemIndex={itemIndex}
            onUpdate={onUpdate}
            onAlert={onAlert}
          />
        ))}
      </CardContent>
    </Card>
  );
}
