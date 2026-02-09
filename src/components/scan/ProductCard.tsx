import { Card, CardContent } from "@/components/ui/card";
import type { Product } from "@/types";
import { useStockTake } from "@/context/StockTakeContext";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useStockTake();

  return (
    <Card
      className="cursor-pointer active:bg-accent py-0"
      onClick={() => dispatch({ type: "SELECT_PRODUCT", product })}
    >
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground text-base mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">{product.packaging}</p>
      </CardContent>
    </Card>
  );
}
