import { Product } from "../lib/types";
import { ProductSprite } from "./ProductSprites";
import { PixelArtCanvas } from "./PixelArtCanvas";

interface ProductDisplayProps {
  product: Product;
  /** Pixel size for SVG sprites (width = height). Default 80. */
  size?: number;
  /** Scale factor for fallback PixelArtCanvas when no spriteId. Default 4. */
  scale?: number;
  className?: string;
}

export function ProductDisplay({ product, size = 80, scale = 4, className = "" }: ProductDisplayProps) {
  if (product.spriteId) {
    return <ProductSprite spriteId={product.spriteId} size={size} className={className} />;
  }
  return <PixelArtCanvas grid={product.pixelArt} scale={scale} className={className} />;
}
