import { useStockTake } from "@/context/StockTakeContext";
import { ProductCard } from "./ProductCard";

export function ProductList() {
  const { state } = useStockTake();
  const unscannedProducts = state.products.filter((p) => !p.scanned);

  return (
    <div className="grid gap-3">
      {unscannedProducts.map((product) => (
        <ProductCard key={product.barcode} product={product} />
      ))}
    </div>
  );
}
