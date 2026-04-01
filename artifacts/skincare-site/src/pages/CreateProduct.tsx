import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { useProducts } from "../hooks/useProducts";
import { PixelArtCanvas } from "../components/PixelArtCanvas";
import { createEmptyGrid, Category } from "../lib/types";

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
        const dim = Math.min(img.width, img.height);
        const sx = (img.width  - dim) / 2;
        const sy = (img.height - dim) / 2;
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
    paint([0, 1],   [6, 9],  dark);
    paint([2, 3],   [5, 10], main);
    paint([4, 4],   [3, 12], main);
    paint([5, 13],  [3, 12], main);
    for (let y = 5; y <= 13; y++) grid[y][4] = "#FFFFFF";
    paint([7, 10],  [5, 11], dark + "80");
    paint([14, 15], [4, 11], dark);
  } else if (shape === "dropper") {
    paint([0, 0],   [7, 8],  dark);
    paint([1, 3],   [5, 10], dark);
    paint([4, 5],   [6, 9],  main);
    paint([6, 6],   [4, 11], main);
    paint([7, 12],  [3, 12], main);
    paint([13, 13], [4, 11], main);
    for (let y = 7; y <= 12; y++) grid[y][4] = "#FFFFFF";
    paint([14, 15], [5, 10], dark);
  } else if (shape === "tube") {
    paint([0, 0],   [7, 8],  dark);
    paint([1, 3],   [5, 10], dark);
    paint([4, 12],  [3, 12], main);
    for (let y = 4; y <= 12; y++) grid[y][4] = "#FFFFFF";
    paint([13, 13], [4, 11], dark);
    paint([14, 14], [5, 10], dark);
    paint([15, 15], [6, 9],  dark);
  } else {
    paint([0, 0],   [2, 13], dark);
    paint([1, 3],   [2, 13], main);
    paint([4, 13],  [2, 13], main);
    for (let y = 4; y <= 13; y++) grid[y][3] = "#FFFFFF";
    paint([14, 15], [3, 12], dark);
  }
  return grid;
}

type Tab = "photo" | "auto";

export default function CreateProduct() {
  const [, setLocation] = useLocation();
  const { addProduct } = useProducts();

  const [grid, setGrid] = useState<string[][]>(createEmptyGrid());
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState<Category>("Cleanser");

  const [activeTab, setActiveTab] = useState<Tab>("auto");
  const [isPixelating, setIsPixelating] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadError("");
    setIsPixelating(true);
    try {
      setGrid(await pixelateImageFile(file));
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
    `pixel-btn px-4 py-2 ${activeTab === t ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground"}`;

  return (
    <div className="container mx-auto px-4 pb-16 max-w-5xl">
      <h1 className="text-center mb-8">Crafting Station</h1>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Sprite creator */}
        <div className="bg-card pixel-border p-5 flex flex-col items-center gap-5">
          <h2>Create Item Sprite</h2>

          {/* Tab buttons */}
          <div className="flex gap-3">
            <button className={tabClass("auto")}  onClick={() => setActiveTab("auto")}>Auto-Generate</button>
            <button className={tabClass("photo")} onClick={() => setActiveTab("photo")}>Upload Photo</button>
          </div>

          {/* Auto-Generate tab */}
          {activeTab === "auto" && (
            <div className="w-full flex flex-col items-center gap-5">
              <div className="bg-background pixel-border-sm p-5 text-center w-full">
                <p className="font-display text-[0.56rem] leading-loose mb-1">
                  Category chosen on the right
                </p>
                <p className="font-sans text-base text-muted-foreground mb-4">
                  We'll generate a matching sprite for <strong>{category}</strong>.
                </p>
                <button
                  onClick={handleAutoGenerate}
                  className="pixel-btn pixel-btn-primary px-5 py-3 w-full"
                >
                  Generate Sprite
                </button>
              </div>
              <div className="text-center">
                <p className="font-display text-[0.5rem] mb-2 text-muted-foreground">Preview</p>
                <div className="bg-white pixel-border-sm p-2 inline-block">
                  <PixelArtCanvas grid={grid} scale={10} />
                </div>
              </div>
            </div>
          )}

          {/* Upload Photo tab */}
          {activeTab === "photo" && (
            <div className="w-full flex flex-col items-center gap-5">
              <div className="bg-background pixel-border-sm p-5 text-center w-full">
                <p className="font-display text-[0.56rem] leading-loose mb-4">
                  Upload a photo — it's auto-converted to pixel art.
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
                  className="pixel-btn pixel-btn-primary px-5 py-3 cursor-pointer inline-block w-full text-center"
                >
                  {isPixelating ? "Pixelating..." : "Choose Photo"}
                </label>
                {uploadError && (
                  <p className="text-destructive font-sans text-sm mt-3">{uploadError}</p>
                )}
              </div>
              <div className="text-center">
                <p className="font-display text-[0.5rem] mb-2 text-muted-foreground">Preview</p>
                <div className="bg-white pixel-border-sm p-2 inline-block">
                  <PixelArtCanvas grid={grid} scale={10} />
                </div>
              </div>
              <p className="font-sans text-base text-muted-foreground text-center max-w-xs">
                Works best with product photos on a plain background.
              </p>
            </div>
          )}
        </div>

        {/* Right: Product details form */}
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
                placeholder="e.g. Niacinamide Serum"
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
                placeholder="e.g. The Ordinary"
              />
            </div>

            <div>
              <label className="block font-display text-[0.56rem] mb-2">Category</label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as Category)}
                className="w-full pixel-input p-3 appearance-none cursor-pointer"
              >
                {CATEGORIES.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Sprite preview */}
            <div className="pt-3 border-t-4 border-dashed border-border flex items-center gap-4">
              <div className="shrink-0 bg-background pixel-border-sm p-2">
                <PixelArtCanvas grid={grid} scale={4} />
              </div>
              <div className="flex-1">
                <p className="font-sans text-base text-muted-foreground italic">
                  {name || "Your product sprite..."}
                </p>
                {brand && (
                  <p className="font-sans text-sm opacity-70">{brand} · {category}</p>
                )}
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
    </div>
  );
}
