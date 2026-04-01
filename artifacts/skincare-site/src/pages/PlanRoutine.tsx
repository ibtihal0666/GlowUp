import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { format } from "date-fns";
import { useProducts } from "../hooks/useProducts";
import { useDailyRoutine } from "../hooks/useDailyRoutine";
import { PixelArtCanvas } from "../components/PixelArtCanvas";

export default function PlanRoutine() {
  const [, setLocation] = useLocation();
  const today = format(new Date(), "yyyy-MM-dd");
  
  const { products } = useProducts();
  const { routine, saveRoutine, isLoaded } = useDailyRoutine(today);
  
  // Local state for the routine being planned
  const [selectedProductIds, setSelectedProductIds] = useState<string[]>([]);

  useEffect(() => {
    if (isLoaded) {
      setSelectedProductIds(routine.map(r => r.productId));
    }
  }, [isLoaded, routine]);

  const toggleSelection = (id: string) => {
    if (selectedProductIds.includes(id)) {
      setSelectedProductIds(selectedProductIds.filter(pid => pid !== id));
    } else {
      setSelectedProductIds([...selectedProductIds, id]);
    }
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    const newOrder = [...selectedProductIds];
    [newOrder[index - 1], newOrder[index]] = [newOrder[index], newOrder[index - 1]];
    setSelectedProductIds(newOrder);
  };

  const moveDown = (index: number) => {
    if (index === selectedProductIds.length - 1) return;
    const newOrder = [...selectedProductIds];
    [newOrder[index], newOrder[index + 1]] = [newOrder[index + 1], newOrder[index]];
    setSelectedProductIds(newOrder);
  };

  const handleSave = () => {
    // Preserve completion status if product was already in routine
    const newRoutine = selectedProductIds.map(id => {
      const existing = routine.find(r => r.productId === id);
      return {
        productId: id,
        completed: existing ? existing.completed : false
      };
    });
    saveRoutine(newRoutine);
    setLocation("/");
  };

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 pb-16 max-w-2xl text-center">
        <div className="bg-card pixel-border p-12">
          <p className="font-display text-lg mb-8 leading-loose">You need some items in your inventory first!</p>
          <button 
            onClick={() => setLocation("/create")}
            className="pixel-btn pixel-btn-primary px-6 py-3"
          >
            Craft Items
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-16 max-w-5xl">
      <h1 className="text-3xl text-center mb-8">Plan Today's Strategy</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Inventory */}
        <div className="bg-card pixel-border p-6 flex flex-col h-[70vh]">
          <h2 className="font-display text-xl mb-4 pb-4 border-b-4 border-dashed border-border shrink-0">Inventory</h2>
          <div className="overflow-y-auto flex-1 pr-2 space-y-3 custom-scrollbar">
            {products.map(p => {
              const isSelected = selectedProductIds.includes(p.id);
              return (
                <div 
                  key={p.id}
                  className={`flex items-center gap-3 p-3 pixel-border-sm cursor-pointer transition-colors
                    ${isSelected ? 'bg-primary text-primary-foreground border-primary' : 'bg-background hover:bg-secondary/20'}`}
                  onClick={() => toggleSelection(p.id)}
                >
                  <div className="bg-white pixel-border-sm p-1 shrink-0">
                    <PixelArtCanvas grid={p.pixelArt} scale={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-xs truncate">{p.name}</h4>
                    <p className="font-sans text-sm truncate opacity-80">{p.category}</p>
                  </div>
                  <div className="shrink-0 text-xl font-display px-2">
                    {isSelected ? '+' : '+'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Routine */}
        <div className="bg-card pixel-border p-6 flex flex-col h-[70vh]">
          <h2 className="font-display text-xl mb-4 pb-4 border-b-4 border-dashed border-border shrink-0">Selected Gear</h2>
          
          <div className="overflow-y-auto flex-1 pr-2 space-y-3 custom-scrollbar">
            {selectedProductIds.length === 0 ? (
              <div className="h-full flex items-center justify-center text-center p-4">
                <p className="font-display text-muted-foreground leading-loose">Select items from your inventory to equip them.</p>
              </div>
            ) : (
              selectedProductIds.map((id, index) => {
                const p = products.find(prod => prod.id === id);
                if (!p) return null;
                
                return (
                  <div key={id} className="flex items-center gap-3 p-3 bg-background pixel-border-sm">
                    <span className="font-display text-muted-foreground w-4 text-xs">{index + 1}.</span>
                    <div className="bg-white pixel-border-sm p-1 shrink-0">
                      <PixelArtCanvas grid={p.pixelArt} scale={2} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-xs truncate">{p.name}</h4>
                    </div>
                    <div className="flex flex-col gap-1 shrink-0">
                      <button 
                        onClick={() => moveUp(index)}
                        disabled={index === 0}
                        className="w-6 h-6 bg-secondary text-secondary-foreground flex items-center justify-center pixel-border-sm disabled:opacity-50"
                      >
                        ▲
                      </button>
                      <button 
                        onClick={() => moveDown(index)}
                        disabled={index === selectedProductIds.length - 1}
                        className="w-6 h-6 bg-secondary text-secondary-foreground flex items-center justify-center pixel-border-sm disabled:opacity-50"
                      >
                        ▼
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          <div className="shrink-0 mt-6 pt-4 border-t-4 border-dashed border-border">
            <button 
              onClick={handleSave}
              disabled={selectedProductIds.length === 0}
              className="w-full pixel-btn pixel-btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save Routine
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
