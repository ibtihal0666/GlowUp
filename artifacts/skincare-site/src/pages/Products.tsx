import { useState } from "react";
import { Link } from "wouter";
import { useProducts } from "../hooks/useProducts";
import { PixelArtCanvas } from "../components/PixelArtCanvas";

export default function Products() {
  const { products, deleteProduct } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  return (
    <div className="container mx-auto px-4 pb-16 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-3xl text-foreground text-stroke-primary drop-shadow-md">My Inventory</h1>
        <Link href="/create">
          <button className="pixel-btn pixel-btn-primary px-6 py-3">
            Craft New Item
          </button>
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="bg-card pixel-border p-12 text-center">
          <p className="font-display text-lg mb-4 text-muted-foreground leading-loose">Your inventory is empty.</p>
          <Link href="/create">
            <button className="pixel-btn pixel-btn-secondary px-6 py-3">
              Add First Product
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(p => (
            <div 
              key={p.id} 
              className="bg-card text-card-foreground pixel-border p-4 hover:-translate-y-2 hover:shadow-lg transition-transform cursor-pointer relative group flex flex-col h-full"
              onClick={() => setSelectedProduct(selectedProduct === p.id ? null : p.id)}
            >
              <div className="flex justify-center mb-4 bg-background pixel-border-sm p-4 aspect-square">
                <PixelArtCanvas grid={p.pixelArt} scale={5} className="w-full h-full object-contain" />
              </div>
              <h3 className="font-display text-sm text-center mb-2 line-clamp-2">{p.name}</h3>
              <p className="font-sans text-lg text-center text-muted-foreground mb-2">{p.brand}</p>
              
              <div className="mt-auto flex justify-center">
                <span className="bg-primary/20 text-foreground px-2 py-1 text-xs font-display pixel-border-sm inline-block">
                  {p.category}
                </span>
              </div>

              {selectedProduct === p.id && (
                <div className="absolute inset-0 bg-background/95 pixel-border p-4 flex flex-col justify-center items-center gap-4 z-10 animate-in fade-in zoom-in duration-200">
                  <h4 className="font-display text-sm text-center">Manage Item</h4>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteProduct(p.id);
                    }}
                    className="pixel-btn bg-destructive text-destructive-foreground px-4 py-2 text-xs w-full"
                  >
                    Delete (Drop)
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(null);
                    }}
                    className="pixel-btn pixel-btn-secondary px-4 py-2 text-xs w-full"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
