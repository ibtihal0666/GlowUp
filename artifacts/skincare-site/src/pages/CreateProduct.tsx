import { useState, useRef, useCallback } from "react";
import { useLocation } from "wouter";
import { useProducts } from "../hooks/useProducts";
import { PixelArtCanvas } from "../components/PixelArtCanvas";
import { createEmptyGrid, Category } from "../lib/types";

const COLORS = [
  '#000000', '#FFFFFF', '#FFB6C1', '#FF69B4', '#FF1493', '#C71585',
  '#FFDAB9', '#F5DEB3', '#D8BFD8', '#B0C4DE', '#87CEEB', '#98FB98',
  '#FFD700', '#FFA500', '#90EE90', '#20B2AA', '#ADD8E6', '#E6CFEC',
];

const CATEGORIES: Category[] = [
  'Cleanser', 'Toner', 'Serum', 'Moisturizer', 'SPF', 'Eye Cream', 'Mask', 'Other'
];

// Pixelate an image file into a 16x16 color grid
async function pixelateImageFile(file: File): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const SIZE = 16;
        const canvas = document.createElement("canvas");
        canvas.width = SIZE;
        canvas.height = SIZE;
        const ctx = canvas.getContext("2d");
        if (!ctx) { reject(new Error("no ctx")); return; }

        // Center-crop to square before scaling
        const src = img;
        const dim = Math.min(src.width, src.height);
        const sx = (src.width  - dim) / 2;
        const sy = (src.height - dim) / 2;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, sx, sy, dim, dim, 0, 0, SIZE, SIZE);

        const grid: string[][] = [];
        for (let y = 0; y < SIZE; y++) {
          const row: string[] = [];
          for (let x = 0; x < SIZE; x++) {
            const d = ctx.getImageData(x, y, 1, 1).data;
            if (d[3] < 40) {
              row.push("");
            } else {
              const r = d[0].toString(16).padStart(2, "0");
              const g = d[1].toString(16).padStart(2, "0");
              const b = d[2].toString(16).padStart(2, "0");
              row.push(`#${r}${g}${b}`);
            }
          }
          grid.push(row);
        }
        resolve(grid);
      };
      img.onerror = reject;
      img.src = e.target!.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Auto-generate a pixel art template based on product category
function generateCategoryTemplate(category: Category): string[][] {
  const grid = createEmptyGrid();

  const paint = (rows: [number, number], cols: [number, number], color: string) => {
    for (let y = rows[0]; y <= rows[1]; y++)
      for (let x = cols[0]; x <= cols[1]; x++)
        grid[y][x] = color;
  };

  const configs: Record<Category, { main: string; dark: string; shape: "bottle" | "dropper" | "tube" | "jar" }> = {
    Cleanser:    { main: "#87CEEB", dark: "#4682B4", shape: "bottle"  },
    Toner:       { main: "#E6CFEC", dark: "#9B59B6", shape: "bottle"  },
    Serum:       { main: "#FFD700", dark: "#B8860B", shape: "dropper" },
    Moisturizer: { main: "#FFF8DC", dark: "#DEB887", shape: "jar"     },
    SPF:         { main: "#FFFACD", dark: "#DAA520", shape: "tube"    },
    "Eye Cream": { main: "#FFB6C1", dark: "#FF69B4", shape: "dropper" },
    Mask:        { main: "#98FB98", dark: "#228B22", shape: "jar"     },
    Other:       { main: "#CCCCFF", dark: "#8A2BE2", shape: "bottle"  },
  };

  const { main, dark, shape } = configs[category];

  if (shape === "bottle") {
    // Cap
    paint([0, 1],   [6, 9],  dark);
    // Neck
    paint([2, 3],   [5, 10], main);
    // Shoulder
    paint([4, 4],   [3, 12], main);
    // Body
    paint([5, 13],  [3, 12], main);
    // Highlight strip
    for (let y = 5; y <= 13; y++) grid[y][4] = "#FFFFFF";
    // Label area
    paint([7, 10],  [5, 11], dark + "80");
    // Base
    paint([14, 15], [4, 11], dark);
  } else if (shape === "dropper") {
    // Dropper stem
    paint([0, 0],   [7, 8],  dark);
    // Rubber bulb
    paint([1, 3],   [5, 10], dark);
    // Neck
    paint([4, 5],   [6, 9],  main);
    // Round body (approx)
    paint([6, 6],   [4, 11], main);
    paint([7, 12],  [3, 12], main);
    paint([13, 13], [4, 11], main);
    // Highlight
    for (let y = 7; y <= 12; y++) grid[y][4] = "#FFFFFF";
    // Base
    paint([14, 15], [5, 10], dark);
  } else if (shape === "tube") {
    // Nozzle
    paint([0, 0],   [7, 8],  dark);
    // Cap
    paint([1, 3],   [5, 10], dark);
    // Body
    paint([4, 12],  [3, 12], main);
    // Highlight
    for (let y = 4; y <= 12; y++) grid[y][4] = "#FFFFFF";
    // Rolled bottom
    paint([13, 13], [4, 11], dark);
    paint([14, 14], [5, 10], dark);
    paint([15, 15], [6, 9],  dark);
  } else {
    // Jar — lid
    paint([0, 0],   [2, 13], dark);
    paint([1, 3],   [2, 13], main);
    // Body (wide)
    paint([4, 13],  [2, 13], main);
    // Highlight
    for (let y = 4; y <= 13; y++) grid[y][3] = "#FFFFFF";
    // Base
    paint([14, 15], [3, 12], dark);
  }

  return grid;
}

type Tab = "draw" | "photo" | "auto";

export default function CreateProduct() {
  const [, setLocation] = useLocation();
  const { addProduct } = useProducts();

  const [grid, setGrid] = useState<string[][]>(createEmptyGrid());
  const [selectedColor, setSelectedColor] = useState<string>(COLORS[0]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [eraseMode, setEraseMode] = useState(false);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState<Category>("Cleanser");

  const [activeTab, setActiveTab] = useState<Tab>("draw");
  const [isPixelating, setIsPixelating] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const paintCell = useCallback((y: number, x: number) => {
    setGrid(prev => {
      const next = prev.map(r => [...r]);
      next[y][x] = eraseMode ? "" : selectedColor;
      return next;
    });
  }, [eraseMode, selectedColor]);

  const handleCellDown = (y: number, x: number) => {
    setIsDrawing(true);
    paintCell(y, x);
  };

  const handleCellEnter = (y: number, x: number) => {
    if (isDrawing) paintCell(y, x);
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError("");
    setIsPixelating(true);
    try {
      const pixelGrid = await pixelateImageFile(file);
      setGrid(pixelGrid);
    } catch {
      setUploadError("Could not process image. Please try another file.");
    } finally {
      setIsPixelating(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleAutoGenerate = () => {
    setGrid(generateCategoryTemplate(category));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addProduct({ id: crypto.randomUUID(), name, brand, category, pixelArt: grid });
    setLocation("/products");
  };

  const tabClass = (t: Tab) =>
    `pixel-btn px-3 py-2 text-[0.5rem] ${activeTab === t ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground"}`;

  return (
    <div className="container mx-auto px-4 pb-16 max-w-5xl">
      <h1 className="text-xl text-center mb-6">Crafting Station</h1>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Pixel Editor */}
        <div className="bg-card pixel-border p-5 flex flex-col items-center">
          <h2 className="font-display text-[0.65rem] mb-4">Draw Item Sprite</h2>

          {/* Tab buttons */}
          <div className="flex gap-2 mb-4">
            <button className={tabClass("draw")}  onClick={() => setActiveTab("draw")}>Draw</button>
            <button className={tabClass("photo")} onClick={() => setActiveTab("photo")}>Upload Photo</button>
            <button className={tabClass("auto")}  onClick={() => setActiveTab("auto")}>Auto-Generate</button>
          </div>

          {/* Tab: Draw */}
          {activeTab === "draw" && (
            <>
              <div
                className="grid gap-0 border-4 border-foreground bg-white w-full max-w-[320px] aspect-square select-none touch-none"
                style={{ display: "grid", gridTemplateColumns: "repeat(16, 1fr)", gridTemplateRows: "repeat(16, 1fr)" }}
                onMouseDown={() => setIsDrawing(true)}
                onMouseUp={() => setIsDrawing(false)}
                onMouseLeave={() => setIsDrawing(false)}
              >
                {grid.map((row, y) =>
                  row.map((color, x) => (
                    <div
                      key={`${y}-${x}`}
                      className="w-full h-full border border-gray-200/40 cursor-crosshair"
                      style={{ backgroundColor: color || "transparent" }}
                      onMouseDown={() => handleCellDown(y, x)}
                      onMouseEnter={() => handleCellEnter(y, x)}
                    />
                  ))
                )}
              </div>

              <div className="w-full mt-4 space-y-3">
                <div className="flex flex-wrap gap-2 justify-center">
                  {COLORS.map(c => (
                    <button
                      key={c}
                      className={`w-6 h-6 pixel-border-sm transition-transform hover:scale-110 ${selectedColor === c && !eraseMode ? "ring-2 ring-foreground scale-110" : ""}`}
                      style={{ backgroundColor: c }}
                      onClick={() => { setSelectedColor(c); setEraseMode(false); }}
                      title={c}
                    />
                  ))}
                </div>

                <div className="flex gap-3 justify-center items-center mt-3">
                  <input
                    type="color"
                    value={selectedColor || "#000000"}
                    onChange={(e) => { setSelectedColor(e.target.value); setEraseMode(false); }}
                    className="w-8 h-8 p-0 border-0 cursor-pointer pixel-border-sm"
                    title="Custom color"
                  />
                  <button
                    onClick={() => setEraseMode(!eraseMode)}
                    className={`pixel-btn px-3 py-2 text-[0.5rem] ${eraseMode ? "bg-primary text-primary-foreground" : "bg-card"}`}
                  >
                    Eraser
                  </button>
                  <button
                    onClick={() => setGrid(createEmptyGrid())}
                    className="pixel-btn bg-destructive text-destructive-foreground px-3 py-2 text-[0.5rem]"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </>
          )}

          {/* Tab: Photo Upload */}
          {activeTab === "photo" && (
            <div className="w-full flex flex-col items-center gap-4 py-6">
              <div className="bg-background pixel-border-sm p-4 text-center max-w-xs">
                <p className="font-display text-[0.55rem] leading-loose mb-4">
                  Upload a photo of your product and it will be auto-converted into pixel art.
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                  id="photo-upload"
                />
                <label
                  htmlFor="photo-upload"
                  className="pixel-btn pixel-btn-primary px-4 py-3 cursor-pointer inline-block"
                >
                  {isPixelating ? "Pixelating..." : "Choose Photo"}
                </label>
                {uploadError && (
                  <p className="text-destructive font-sans text-sm mt-2">{uploadError}</p>
                )}
              </div>

              {/* Preview of result */}
              <div className="text-center">
                <p className="font-display text-[0.5rem] mb-2 text-muted-foreground">Result Preview</p>
                <div className="bg-white pixel-border-sm p-2 inline-block">
                  <PixelArtCanvas grid={grid} scale={10} />
                </div>
              </div>

              <p className="font-sans text-sm text-muted-foreground text-center max-w-xs">
                The image will be cropped to a square and downsampled to 16x16 pixels. Works best with product photos on a simple background.
              </p>
            </div>
          )}

          {/* Tab: Auto-Generate */}
          {activeTab === "auto" && (
            <div className="w-full flex flex-col items-center gap-4 py-6">
              <div className="bg-background pixel-border-sm p-4 text-center max-w-xs">
                <p className="font-display text-[0.55rem] leading-loose mb-4">
                  Select a product category and we'll auto-generate a matching pixel art sprite.
                </p>
                <p className="font-sans text-sm text-muted-foreground mb-4">
                  The sprite style is based on the category you choose in the details panel.
                </p>
                <button
                  onClick={handleAutoGenerate}
                  className="pixel-btn pixel-btn-primary px-5 py-3 w-full"
                >
                  Generate for "{category}"
                </button>
              </div>

              <div className="text-center">
                <p className="font-display text-[0.5rem] mb-2 text-muted-foreground">Generated Preview</p>
                <div className="bg-white pixel-border-sm p-2 inline-block">
                  <PixelArtCanvas grid={grid} scale={10} />
                </div>
              </div>

              <p className="font-sans text-sm text-muted-foreground text-center max-w-xs">
                After generating, switch to the Draw tab to customize it further.
              </p>
            </div>
          )}
        </div>

        {/* Right: Form */}
        <div className="bg-card pixel-border p-5">
          <h2 className="font-display text-[0.65rem] mb-4">Item Details</h2>

          <form onSubmit={handleSave} className="space-y-5">
            <div>
              <label className="block font-display text-[0.55rem] mb-2">Item Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full pixel-input p-2 text-lg"
                placeholder="e.g. Niacinamide Serum"
                required
              />
            </div>

            <div>
              <label className="block font-display text-[0.55rem] mb-2">Brand</label>
              <input
                type="text"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                className="w-full pixel-input p-2 text-lg"
                placeholder="e.g. The Ordinary"
              />
            </div>

            <div>
              <label className="block font-display text-[0.55rem] mb-2">Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as Category)}
                className="w-full pixel-input p-2 text-lg appearance-none cursor-pointer"
              >
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Preview */}
            <div className="pt-3 border-t-4 border-dashed border-border flex items-center gap-4">
              <div className="shrink-0 bg-background pixel-border-sm p-2">
                <PixelArtCanvas grid={grid} scale={4} />
              </div>
              <div className="flex-1">
                <p className="font-sans text-base text-muted-foreground italic">
                  {name || "Your product sprite..."}
                </p>
                {brand && <p className="font-sans text-sm opacity-70">{brand} · {category}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="w-full pixel-btn pixel-btn-primary py-4 text-[0.6rem] mt-2"
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
