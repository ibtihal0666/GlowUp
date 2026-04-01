import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { useProducts } from "../hooks/useProducts";
import { PixelArtCanvas } from "../components/PixelArtCanvas";
import { createEmptyGrid, Category } from "../lib/types";

const COLORS = [
  '#000000', '#FFFFFF', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585',
  '#FFDAB9', '#FFE4E1', '#F5DEB3', '#D8BFD8', '#DDA0DD', '#DDA0DD',
  '#87CEEB', '#98FB98', '#90EE90', '#32CD32', '#20B2AA', '#F0E68C'
];

const CATEGORIES: Category[] = [
  'Cleanser', 'Toner', 'Serum', 'Moisturizer', 'SPF', 'Eye Cream', 'Mask', 'Other'
];

export default function CreateProduct() {
  const [, setLocation] = useLocation();
  const { addProduct } = useProducts();
  
  const [grid, setGrid] = useState<string[][]>(createEmptyGrid());
  const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);
  const [isDrawing, setIsDrawing] = useState(false);
  
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState<Category>("Cleanser");

  const handleCellClick = (y: number, x: number) => {
    const newGrid = [...grid];
    newGrid[y][x] = selectedColor;
    setGrid(newGrid);
  };

  const handleCellEnter = (y: number, x: number) => {
    if (isDrawing) {
      handleCellClick(y, x);
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    addProduct({
      id: crypto.randomUUID(),
      name,
      brand,
      category,
      pixelArt: grid
    });
    
    setLocation("/products");
  };

  return (
    <div className="container mx-auto px-4 pb-16 max-w-5xl">
      <h1 className="text-3xl text-center mb-8">Crafting Station</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left: Pixel Editor */}
        <div className="bg-card pixel-border p-6 flex flex-col items-center">
          <h2 className="font-display text-xl mb-6">Draw Item Sprite</h2>
          
          <div 
            className="grid grid-rows-16 grid-cols-16 gap-0 border-4 border-foreground bg-white w-full max-w-[400px] aspect-square select-none touch-none"
            onMouseDown={() => setIsDrawing(true)}
            onMouseUp={() => setIsDrawing(false)}
            onMouseLeave={() => setIsDrawing(false)}
            onTouchStart={() => setIsDrawing(true)}
            onTouchEnd={() => setIsDrawing(false)}
          >
            {grid.map((row, y) => (
              row.map((color, x) => (
                <div
                  key={`${y}-${x}`}
                  className="w-full h-full border border-gray-200/50"
                  style={{ backgroundColor: color || 'transparent' }}
                  onMouseDown={() => handleCellClick(y, x)}
                  onMouseEnter={() => handleCellEnter(y, x)}
                  onTouchMove={(e) => {
                    const touch = e.touches[0];
                    const element = document.elementFromPoint(touch.clientX, touch.clientY);
                    if (element && element.parentElement?.className.includes('grid-rows-16')) {
                      const index = Array.from(element.parentElement.children).indexOf(element);
                      if (index !== -1) {
                        const ty = Math.floor(index / 16);
                        const tx = index % 16;
                        handleCellClick(ty, tx);
                      }
                    }
                  }}
                />
              ))
            ))}
          </div>

          <div className="w-full mt-6 space-y-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {COLORS.map(c => (
                <button
                  key={c}
                  className={`w-8 h-8 pixel-border-sm transition-transform hover:scale-110 ${selectedColor === c ? 'scale-110 shadow-md ring-2 ring-foreground' : ''}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setSelectedColor(c)}
                  title={c}
                />
              ))}
            </div>
            
            <div className="flex gap-4 justify-center items-center mt-4">
              <input 
                type="color" 
                value={selectedColor !== '' ? selectedColor : '#000000'}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-10 h-10 p-0 border-0 cursor-pointer pixel-border-sm"
              />
              <button 
                onClick={() => setSelectedColor('')}
                className={`pixel-btn px-4 py-2 text-sm ${selectedColor === '' ? 'bg-secondary' : 'bg-card'}`}
              >
                Eraser
              </button>
              <button 
                onClick={() => setGrid(createEmptyGrid())}
                className="pixel-btn bg-destructive text-destructive-foreground px-4 py-2 text-sm"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="bg-card pixel-border p-6">
          <h2 className="font-display text-xl mb-6">Item Stats</h2>
          
          <form onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block font-display text-sm mb-2">Item Name</label>
              <input 
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full pixel-input p-3 text-lg"
                placeholder="e.g. Magic Healing Potion"
                required
              />
            </div>
            
            <div>
              <label className="block font-display text-sm mb-2">Brand / Origin</label>
              <input 
                type="text" 
                value={brand}
                onChange={e => setBrand(e.target.value)}
                className="w-full pixel-input p-3 text-lg"
                placeholder="e.g. The Ordinary"
              />
            </div>

            <div>
              <label className="block font-display text-sm mb-2">Category / Type</label>
              <select 
                value={category}
                onChange={e => setCategory(e.target.value as Category)}
                className="w-full pixel-input p-3 text-lg appearance-none cursor-pointer"
              >
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className="pt-4 border-t-4 border-dashed border-border flex items-center gap-6">
              <div className="shrink-0 bg-background pixel-border p-2">
                <PixelArtCanvas grid={grid} scale={4} />
              </div>
              <div className="flex-1">
                <p className="font-sans text-xl text-muted-foreground italic">Preview your item sprite here...</p>
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full pixel-btn pixel-btn-primary py-4 text-lg mt-8"
              disabled={!name.trim()}
            >
              Add to Inventory
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
