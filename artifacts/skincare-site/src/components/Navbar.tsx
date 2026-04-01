import { Link, useLocation } from "wouter";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  const toggleTheme = () => {
    setTheme(theme === "pink" ? "purple" : "pink");
  };

  const navItemClass = (path: string) => `
    block w-full text-center px-3 py-3 cursor-pointer transition-colors text-[0.55rem] leading-relaxed
    ${location === path
      ? "bg-card text-card-foreground pixel-border-sm"
      : "hover:bg-primary/30 hover:text-primary-foreground"}
  `;

  return (
    <nav className="fixed right-0 top-0 bottom-0 w-[190px] z-50 bg-primary text-primary-foreground flex flex-col items-center py-6 gap-4"
      style={{ borderLeft: "3px solid rgba(0,0,0,0.15)", boxShadow: "-3px 0 0 0 rgba(0,0,0,0.08)" }}
    >
      {/* Logo */}
      <Link href="/">
        <div className="font-display text-[0.7rem] uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity text-center leading-loose px-2 mb-2">
          GlowBit
        </div>
      </Link>

      <div className="w-3/4 border-t-2 border-primary-foreground/30" />

      {/* Nav Links */}
      <div className="w-full flex flex-col gap-1 px-3">
        <Link href="/">
          <div className={navItemClass("/")}>Dashboard</div>
        </Link>
        <Link href="/products">
          <div className={navItemClass("/products")}>My Products</div>
        </Link>
        <Link href="/create">
          <div className={navItemClass("/create")}>Add Product</div>
        </Link>
        <Link href="/plan">
          <div className={navItemClass("/plan")}>Plan Routine</div>
        </Link>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      <div className="w-3/4 border-t-2 border-primary-foreground/30" />

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="pixel-btn bg-card text-card-foreground px-3 py-2 text-[0.5rem] flex flex-col items-center gap-2 w-[calc(100%-24px)]"
        title="Switch theme"
      >
        <div
          className="w-8 h-8 border-2 border-foreground"
          style={{
            backgroundColor: theme === "pink" ? "hsl(330 80% 60%)" : "hsl(280 70% 60%)",
            imageRendering: "pixelated",
          }}
        />
        <span>{theme === "pink" ? "Pink" : "Purple"}</span>
      </button>

      <p className="text-[0.42rem] opacity-50 text-center px-2 pb-1 font-display leading-loose">
        Glow Up<br />Daily
      </p>
    </nav>
  );
}
