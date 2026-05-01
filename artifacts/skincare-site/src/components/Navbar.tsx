import { Link, useLocation } from "wouter";

const NAV_LINKS = [
  { path: "/",         label: "Dashboard",   short: "Home"  },
  { path: "/products", label: "My Products", short: "Items" },
  { path: "/create",   label: "Add Product", short: "Add"   },
  { path: "/plan",     label: "Plan Routine",short: "Plan"  },
];

export function Navbar() {
  const [location] = useLocation();

  const desktopItemClass = (path: string) => `
    block w-full text-center px-3 py-3 cursor-pointer transition-colors
    text-[0.58rem] leading-relaxed font-display uppercase tracking-wide
    ${location === path
      ? "bg-card text-card-foreground pixel-border-sm"
      : "hover:bg-primary/30 hover:text-primary-foreground"}
  `;

  return (
    <>
      {/* ── Desktop: right sidebar (md and up) ── */}
      <nav
        className="hidden md:flex fixed right-0 top-0 bottom-0 w-[190px] z-50 bg-primary text-primary-foreground flex-col items-center py-6 gap-4"
        style={{ borderLeft: "3px solid rgba(0,0,0,0.12)", boxShadow: "-3px 0 0 0 rgba(0,0,0,0.07)" }}
      >
        <Link href="/">
          <div className="font-display text-[0.72rem] uppercase tracking-widest cursor-pointer hover:opacity-80 transition-opacity text-center leading-loose px-2 mb-2">
            GlowBit
          </div>
        </Link>

        <div className="w-3/4 border-t-2 border-primary-foreground/30" />

        <div className="w-full flex flex-col gap-1 px-3">
          {NAV_LINKS.map(({ path, label }) => (
            <Link href={path} key={path}>
              <div className={desktopItemClass(path)}>{label}</div>
            </Link>
          ))}
        </div>

        <div className="flex-1" />

        <p className="text-[0.44rem] opacity-50 text-center px-2 pb-1 font-display leading-loose">
          Glow Up<br />Daily
        </p>
      </nav>

      {/* ── Mobile: bottom tab bar (below md) ── */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 h-16 bg-primary text-primary-foreground flex items-stretch"
        style={{ borderTop: "3px solid rgba(0,0,0,0.12)", boxShadow: "0 -3px 0 0 rgba(0,0,0,0.07)" }}
      >
        {NAV_LINKS.map(({ path, short }) => {
          const active = location === path;
          return (
            <Link href={path} key={path} className="flex-1">
              <div
                className={`h-full flex flex-col items-center justify-center gap-0.5 cursor-pointer transition-colors text-center
                  ${active ? "bg-card/25" : "hover:bg-primary-foreground/10"}`}
              >
                <span className={`font-display text-[0.38rem] leading-loose uppercase tracking-wide
                  ${active ? "text-white" : "text-primary-foreground/80"}`}>
                  {short}
                </span>
                {active && (
                  <span className="block w-4 h-0.5 bg-white rounded-full mt-0.5" />
                )}
              </div>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
