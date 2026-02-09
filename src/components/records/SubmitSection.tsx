import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useStockTake } from "@/context/StockTakeContext";
import { useOperators } from "@/hooks/useOperators";
import { useOfflineSubmit } from "@/hooks/useOfflineSubmit";

export function SubmitSection() {
  const { state, dispatch } = useStockTake();
  const { operators } = useOperators();
  const { submitToGoogleSheet } = useOfflineSubmit();

  return (
    <div className="bg-card p-4 rounded-lg text-center border border-border">
      <Select
        value={state.operator}
        onValueChange={(v) => dispatch({ type: "SET_OPERATOR", operator: v })}
      >
        <SelectTrigger className="w-full mb-3 h-11">
          <SelectValue placeholder="盘点人员 | Operator" />
        </SelectTrigger>
        <SelectContent>
          {operators.map((op) => (
            <SelectItem key={op.id} value={op.name}>
              {op.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Button
        className="w-full h-11"
        disabled={state.isSubmitting}
        onClick={() => submitToGoogleSheet(state.operator)}
      >
        {state.isSubmitting ? "提交中... | Submitting..." : "保存 | Save"}
      </Button>
    </div>
  );
}
