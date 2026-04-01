import { Link, useLocation } from "wouter";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "pink" ? "purple" : "pink");
  };

  const navItemClass = (path: string) => `
    px-4 py-2 hover:bg-card hover:text-card-foreground transition-colors cursor-pointer
    ${location === path ? 'bg-card text-card-foreground pixel-border-sm shadow-none' : ''}
  `;

  return (
    <nav className="sticky top-0 z-50 bg-primary text-primary-foreground pixel-border mb-8 p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/">
          <div className="text-2xl font-display uppercase tracking-widest cursor-pointer hover:scale-105 transition-transform">
            GlowBit
          </div>
        </Link>
        
        <div className="flex flex-wrap items-center gap-2 font-display text-sm md:text-base">
          <Link href="/">
            <div className={navItemClass("/")}>Dashboard</div>
          </Link>
          <Link href="/products">
            <div className={navItemClass("/products")}>My Products</div>
          </Link>
          <Link href="/create">
            <div className={navItemClass("/create")}>Add Product</div>
          </Link>
        </div>

        <button 
          onClick={toggleTheme}
          className="pixel-btn bg-card text-card-foreground px-4 py-2 text-sm flex items-center gap-2"
        >
          <div 
            className="w-4 h-4 border-2 border-foreground" 
            style={{ backgroundColor: theme === 'pink' ? 'hsl(330 80% 60%)' : 'hsl(280 70% 60%)' }}
          />
          {theme === "pink" ? "Pink" : "Purple"}
        </button>
      </div>
    </nav>
  );
}
