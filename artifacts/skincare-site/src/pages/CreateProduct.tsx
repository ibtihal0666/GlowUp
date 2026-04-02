import { useState } from "react";
import { useLocation } from "wouter";
import { useProducts } from "../hooks/useProducts";
import { PixelArtCanvas } from "../components/PixelArtCanvas";
import { Category } from "../lib/types";
import { PRODUCT_TEMPLATES, ProductTemplate } from "../lib/productTemplates";

export default function CreateProduct() {
  const [, setLocation] = useLocation();
  const { addProduct } = useProducts();

  const [selected, setSelected] = useState<ProductTemplate | null>(null);
  const [name, setName]     = useState("");
  const [brand, setBrand]   = useState("");
  const [category, setCategory] = useState<Category>("Cleanser");

  const pick = (t: ProductTemplate) => {
    setSelected(t);
    setName(t.name);
    setBrand(t.brand);
    setCategory(t.category);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selected || !name.trim()) return;
    addProduct({
      id: crypto.randomUUID(),
      name,
      brand,
      category,
      pixelArt: selected.pixelArt,
    });
    setLocation("/products");
  };

  return (
    <div className="container mx-auto px-4 pb-16 max-w-5xl">
      <h1 className="text-center mb-2">Crafting Station</h1>
      <p className="font-sans text-center text-muted-foreground mb-6 text-base">
        Choose a product from your collection to add to your inventory.
      </p>

      {/* ── Product gallery ── */}
      <div className="bg-card pixel-border p-5 mb-6">
        <h2 className="mb-4">Choose Your Product</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-3">
          {PRODUCT_TEMPLATES.map((t) => {
            const isActive = selected?.id === t.id;
            return (
              <button
                key={t.id}
                onClick={() => pick(t)}
                className={`flex flex-col items-center gap-2 p-2 transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary/20 pixel-border"
                    : "hover:bg-primary/10 pixel-border-sm"
                }`}
                title={`${t.name} by ${t.brand}`}
              >
                <PixelArtCanvas grid={t.pixelArt} scale={6} />
                <p className="font-display text-[0.4rem] text-center leading-loose text-muted-foreground line-clamp-2">
                  {t.brand}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Details panel (shown after selection) ── */}
      {selected ? (
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Left: sprite preview */}
          <div className="bg-card pixel-border p-5 flex flex-col items-center gap-4">
            <h2>Selected Product</h2>
            <div className="bg-white pixel-border p-3 inline-block">
              <PixelArtCanvas grid={selected.pixelArt} scale={12} />
            </div>
            <p className="font-display text-[0.5rem] text-center text-muted-foreground leading-loose">
              {selected.category}
            </p>
          </div>

          {/* Right: form */}
          <div className="bg-card pixel-border p-5">
            <h2 className="mb-5">Item Details</h2>
            <form onSubmit={handleSave} className="space-y-5">
              <div>
                <label className="block font-display text-[0.56rem] mb-2">Item Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full pixel-input p-3"
                  required
                />
              </div>

              <div>
                <label className="block font-display text-[0.56rem] mb-2">Brand</label>
                <input
                  type="text"
                  value={brand}
                  onChange={e => setBrand(e.target.value)}
                  className="w-full pixel-input p-3"
                />
              </div>

              <div>
                <label className="block font-display text-[0.56rem] mb-2">Category</label>
                <div className="pixel-input p-3 bg-input text-muted-foreground font-sans text-base">
                  {category}
                </div>
              </div>

              <button
                type="submit"
                className="w-full pixel-btn pixel-btn-primary py-4 mt-2"
                disabled={!name.trim()}
              >
                Add to Inventory
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="bg-card pixel-border p-8 text-center">
          <p className="font-display text-[0.58rem] text-muted-foreground leading-loose">
            Select a product above to continue.
          </p>
        </div>
      )}
    </div>
  );
}
