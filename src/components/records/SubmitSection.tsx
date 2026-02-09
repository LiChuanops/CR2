import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface OperatorSelectorProps {
  value: string;
  onChange: (operator: string) => void;
  operators: Array<{ id: string; name: string }>;
}

export function OperatorSelector({
  value,
  onChange,
  operators,
}: OperatorSelectorProps) {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  // 搜索过滤
  const filteredOperators = operators.filter((op) =>
    op.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelect = (operator: typeof operators[0]) => {
    onChange(operator.id);
    setOpen(false);
    setSearchText(""); // 清空搜索
  };

  const selectedName = operators.find((op) => op.id === value)?.name;

  return (
    <div>
      {/* 触发按钮 */}
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="w-full justify-between"
      >
        <span>Operator: {selectedName || "请选择"}</span>
        <span className="text-xs">点击选择</span>
      </Button>

      {/* 全屏选择 Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="fixed inset-0 max-w-full h-screen border-0 rounded-0 flex flex-col p-0">
          <DialogHeader className="border-b p-4">
            <DialogTitle>选择 Operator</DialogTitle>
          </DialogHeader>

          {/* 搜索框 */}
          <div className="border-b p-4">
            <div className="flex items-center gap-2 border rounded px-3 py-2">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="搜索 operator..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                autoFocus
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div>
          </div>

          {/* 操作员列表 */}
          <div className="flex-1 overflow-y-auto">
            {filteredOperators.length > 0 ? (
              filteredOperators.map((operator) => (
                <button
                  key={operator.id}
                  onClick={() => handleSelect(operator)}
                  className={`w-full text-left px-4 py-4 border-b hover:bg-gray-50 transition-colors ${
                    value === operator.id ? "bg-blue-50 border-l-4 border-l-blue-500" : ""
                  }`}
                >
                  <div className="font-medium">{operator.name}</div>
                  {value === operator.id && (
                    <div className="text-xs text-blue-600 mt-1">✓ 已选择</div>
                  )}
                </button>
              ))
            ) : (
              <div className="flex items-center justify-center h-32 text-gray-500">
                没有找到匹配的 Operator
              </div>
            )}
          </div>

          {/* 底部关闭按钮 */}
          <div className="border-t p-4">
            <Button
              variant="secondary"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              关闭
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
