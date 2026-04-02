import { useState } from "react";
import { Link } from "wouter";
import { format } from "date-fns";
import { useProducts } from "../hooks/useProducts";
import { useDailyRoutine } from "../hooks/useDailyRoutine";
import { ProductDisplay } from "../components/ProductDisplay";

export default function Dashboard() {
  const today = format(new Date(), "yyyy-MM-dd");
  const displayDate = format(new Date(), "MMMM do, yyyy");
  
  const { products } = useProducts();
  const { routine, isLoaded, toggleItem } = useDailyRoutine(today);

  if (!isLoaded) return <div className="p-8 text-center font-display">Loading...</div>;

  const routineProducts = routine.map(item => ({
    ...item,
    product: products.find(p => p.id === item.productId)
  })).filter(item => item.product);

  const isAllDone = routineProducts.length > 0 && routineProducts.every(item => item.completed);

  return (
    <div className="container mx-auto px-4 pb-16 max-w-2xl">
      <div className="bg-card text-card-foreground pixel-border p-6 md:p-8 relative">
        <h1 className="text-2xl md:text-3xl text-center mb-2">Today's Quest</h1>
        <p className="text-center text-muted-foreground font-sans text-xl mb-8">{displayDate}</p>

        {routineProducts.length === 0 ? (
          <div className="text-center py-12 flex flex-col items-center">
            <img src="/empty-state.png" alt="Empty routine" className="w-32 h-32 mb-6 pixelated opacity-80" />
            <p className="font-display text-lg mb-8 leading-loose">No routine planned<br/>for today yet!</p>
            <Link href="/plan">
              <button className="pixel-btn pixel-btn-primary px-6 py-4 text-lg">
                Plan Today's Routine
              </button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {routineProducts.map((item, index) => {
              const p = item.product!;
              return (
                <div 
                  key={item.productId}
                  className={`flex items-center gap-4 p-4 pixel-border-sm transition-colors cursor-pointer
                    ${item.completed ? 'bg-secondary/30 opacity-75' : 'bg-background hover:bg-secondary/10'}`}
                  onClick={() => toggleItem(item.productId)}
                >
                  <span className="font-display text-muted-foreground w-6">{index + 1}.</span>
                  <input 
                    type="checkbox" 
                    className="pixel-checkbox shrink-0 pointer-events-none"
                    checked={item.completed}
                    readOnly
                  />
                  <div className="shrink-0">
                    <ProductDisplay product={p} size={48} scale={3} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-display text-sm md:text-base truncate ${item.completed ? 'line-through text-muted-foreground' : ''}`}>
                      {p.name}
                    </h3>
                    <p className="font-sans text-lg text-muted-foreground truncate">{p.category}</p>
                  </div>
                </div>
              );
            })}

            {isAllDone && (
              <div className="mt-8 p-6 bg-accent text-accent-foreground pixel-border text-center animate-bounce-slight">
                <h2 className="text-xl mb-2">QUEST COMPLETE!</h2>
                <p className="font-sans text-xl">Your skin is glowing +100 EXP</p>
              </div>
            )}

            <div className="mt-8 flex justify-center pt-8 border-t-4 border-dashed border-border">
              <Link href="/plan">
                <button className="pixel-btn pixel-btn-secondary px-6 py-3 text-sm">
                  Edit Routine
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
