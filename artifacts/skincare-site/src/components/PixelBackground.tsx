import { useMemo } from "react";

/* ─── Individual pixel-art animal sprites ────────────────────────────── */

function BunnySprite({ body = "#88D8B0" }: { body?: string }) {
  const D = "#2B1B2E";
  const E = "#FFB6C1";
  const N = "#FF69B4";
  return (
    <svg width="48" height="52" viewBox="0 0 12 13" shapeRendering="crispEdges">
      <rect x="2" y="0" width="2" height="4" fill={E} />
      <rect x="8" y="0" width="2" height="4" fill={E} />
      <rect x="2.4" y="0.3" width="1.2" height="3" fill="#FFD6E0" />
      <rect x="8.4" y="0.3" width="1.2" height="3" fill="#FFD6E0" />
      <rect x="1" y="3" width="10" height="5" fill={body} />
      <rect x="1" y="5" width="2" height="2" fill="#FFB6C1" opacity="0.5" />
      <rect x="9" y="5" width="2" height="2" fill="#FFB6C1" opacity="0.5" />
      <rect x="3" y="5" width="1" height="1" fill={D} />
      <rect x="8" y="5" width="1" height="1" fill={D} />
      <rect x="3.6" y="5" width="0.4" height="0.4" fill="#fff" />
      <rect x="8.6" y="5" width="0.4" height="0.4" fill="#fff" />
      <rect x="5.5" y="7" width="1" height="0.8" fill={N} />
      <rect x="2" y="8" width="8" height="3" fill={body} />
      <rect x="10" y="8" width="1.5" height="1.5" fill="#fff" />
      <rect x="2" y="11" width="3" height="1.5" fill={body} />
      <rect x="7" y="11" width="3" height="1.5" fill={body} />
    </svg>
  );
}

function BearSprite({ body = "#C8A2C8" }: { body?: string }) {
  const D  = "#2B1B2E";
  const MZ = "#E8C4E8";
  const N  = "#9B59B6";
  return (
    <svg width="50" height="50" viewBox="0 0 12 12" shapeRendering="crispEdges">
      <rect x="0" y="0" width="3" height="3" fill={body} />
      <rect x="9" y="0" width="3" height="3" fill={body} />
      <rect x="0.7" y="0.7" width="1.6" height="1.6" fill={MZ} />
      <rect x="9.7" y="0.7" width="1.6" height="1.6" fill={MZ} />
      <rect x="1" y="2" width="10" height="6" fill={body} />
      <rect x="2.5" y="4" width="1.5" height="1.5" fill={D} />
      <rect x="8" y="4" width="1.5" height="1.5" fill={D} />
      <rect x="3.2" y="4" width="0.5" height="0.5" fill="#fff" />
      <rect x="8.7" y="4" width="0.5" height="0.5" fill="#fff" />
      <rect x="3.5" y="5.5" width="5" height="2.5" fill={MZ} />
      <rect x="5" y="5.5" width="2" height="1" fill={N} />
      <rect x="2" y="8" width="8" height="3" fill={body} />
      <rect x="2" y="10.5" width="3" height="1.5" fill={body} />
      <rect x="7" y="10.5" width="3" height="1.5" fill={body} />
    </svg>
  );
}

function FrogSprite({ body = "#6BCB77" }: { body?: string }) {
  const D   = "#2B1B2E";
  const EYE = "#A8E6B0";
  return (
    <svg width="54" height="42" viewBox="0 0 13 10" shapeRendering="crispEdges">
      <rect x="1" y="0" width="3" height="3" fill={body} />
      <rect x="9" y="0" width="3" height="3" fill={body} />
      <rect x="1.5" y="0.5" width="2" height="2" fill={EYE} />
      <rect x="9.5" y="0.5" width="2" height="2" fill={EYE} />
      <rect x="2" y="0.8" width="1" height="1" fill={D} />
      <rect x="10" y="0.8" width="1" height="1" fill={D} />
      <rect x="0" y="2" width="13" height="4" fill={body} />
      <rect x="3" y="5" width="1" height="1" fill={D} />
      <rect x="9" y="5" width="1" height="1" fill={D} />
      <rect x="4" y="5.5" width="5" height="0.5" fill={D} />
      <rect x="1" y="6" width="11" height="3" fill={body} />
      <rect x="0" y="7" width="2" height="3" fill={body} />
      <rect x="11" y="7" width="2" height="3" fill={body} />
      <rect x="-1" y="9" width="3" height="1" fill={body} />
      <rect x="11" y="9" width="3" height="1" fill={body} />
    </svg>
  );
}

function ChickSprite({ body = "#FFD166" }: { body?: string }) {
  const D  = "#2B1B2E";
  const BK = "#FF8C00";
  const WG = "#FFF4CC";
  return (
    <svg width="44" height="48" viewBox="0 0 11 12" shapeRendering="crispEdges">
      <rect x="2" y="0" width="7" height="5" fill={body} />
      <rect x="3" y="1.5" width="1.5" height="1.5" fill={D} />
      <rect x="6.5" y="1.5" width="1.5" height="1.5" fill={D} />
      <rect x="3.8" y="1.5" width="0.5" height="0.5" fill="#fff" />
      <rect x="7.3" y="1.5" width="0.5" height="0.5" fill="#fff" />
      <rect x="4.5" y="3.5" width="2" height="1.5" fill={BK} />
      <rect x="1" y="5" width="9" height="5" fill={body} />
      <rect x="0" y="5.5" width="2" height="3" fill={WG} />
      <rect x="9" y="5.5" width="2" height="3" fill={WG} />
      <rect x="3" y="10" width="1.5" height="1" fill={BK} />
      <rect x="3" y="11" width="2.5" height="0.5" fill={BK} />
      <rect x="6.5" y="10" width="1.5" height="1" fill={BK} />
      <rect x="5.5" y="11" width="2.5" height="0.5" fill={BK} />
    </svg>
  );
}

function CatSprite({ body = "#FF9B8A" }: { body?: string }) {
  const D    = "#2B1B2E";
  const EAR  = "#FF9999";
  return (
    <svg width="50" height="54" viewBox="0 0 12 13" shapeRendering="crispEdges">
      <rect x="1" y="0" width="3" height="1" fill={body} />
      <rect x="1.5" y="1" width="2" height="1" fill={body} />
      <rect x="2" y="2" width="1" height="1" fill={body} />
      <rect x="1.5" y="1" width="1.5" height="0.8" fill={EAR} />
      <rect x="8" y="0" width="3" height="1" fill={body} />
      <rect x="8.5" y="1" width="2" height="1" fill={body} />
      <rect x="9" y="2" width="1" height="1" fill={body} />
      <rect x="8.5" y="1" width="1.5" height="0.8" fill={EAR} />
      <rect x="1" y="2" width="10" height="5" fill={body} />
      <rect x="1" y="5" width="2" height="1.5" fill="#FFB6C1" opacity="0.5" />
      <rect x="9" y="5" width="2" height="1.5" fill="#FFB6C1" opacity="0.5" />
      <rect x="3" y="4" width="1.5" height="1.5" fill={D} />
      <rect x="7.5" y="4" width="1.5" height="1.5" fill={D} />
      <rect x="3.8" y="4" width="0.5" height="0.5" fill="#fff" />
      <rect x="8.3" y="4" width="0.5" height="0.5" fill="#fff" />
      <rect x="5.5" y="5.5" width="1" height="0.8" fill="#FF1493" />
      <rect x="1" y="6" width="0.7" height="0.7" fill={D} opacity="0.5" />
      <rect x="2.5" y="5.8" width="0.7" height="0.7" fill={D} opacity="0.5" />
      <rect x="9.3" y="6" width="0.7" height="0.7" fill={D} opacity="0.5" />
      <rect x="10.8" y="5.8" width="0.7" height="0.7" fill={D} opacity="0.5" />
      <rect x="2" y="7" width="8" height="4" fill={body} />
      <rect x="10" y="6" width="1.5" height="4" fill={body} />
      <rect x="9.5" y="10" width="2" height="1.5" fill={body} />
      <rect x="2" y="11" width="3" height="1.5" fill={body} />
      <rect x="7" y="11" width="3" height="1.5" fill={body} />
    </svg>
  );
}

function WhaleSprite({ body = "#4ECDC4" }: { body?: string }) {
  const D = "#2B1B2E";
  const B = "#A8E6E2";
  const S = "#78E8FF";
  return (
    <svg width="60" height="40" viewBox="0 0 15 10" shapeRendering="crispEdges">
      <rect x="2" y="0" width="1" height="2" fill={S} opacity="0.8" />
      <rect x="1" y="1" width="1" height="1" fill={S} opacity="0.6" />
      <rect x="3" y="1" width="1" height="1" fill={S} opacity="0.6" />
      <rect x="0" y="3" width="12" height="5" fill={body} />
      <rect x="11" y="2" width="4" height="2" fill={body} />
      <rect x="11" y="7" width="4" height="2" fill={body} />
      <rect x="1" y="6" width="9" height="2" fill={B} />
      <rect x="2" y="4" width="1.5" height="1.5" fill={D} />
      <rect x="2.8" y="4" width="0.5" height="0.5" fill="#fff" />
      <rect x="3" y="6" width="4" height="0.6" fill={D} opacity="0.4" />
      <rect x="5" y="2" width="3" height="2" fill={body} />
    </svg>
  );
}

/* ─── Animal layout ──────────────────────────────────────────────────── */
interface AnimalDef {
  id: number;
  Component: React.ComponentType<{ body?: string }>;
  color: string;
  direction: "right" | "left";
  topPct: number;
  duration: number;
  delay: number;
  bobClass: string;
  scale: number;
}

const ANIMALS: AnimalDef[] = [
  { id: 1, Component: BunnySprite, color: "#88D8B0", direction: "right", topPct:  8, duration: 22, delay:  0, bobClass: "bounce-inner", scale: 1.0  },
  { id: 2, Component: BearSprite,  color: "#C8A2C8", direction: "left",  topPct: 25, duration: 28, delay:  5, bobClass: "bob-inner",    scale: 1.1  },
  { id: 3, Component: ChickSprite, color: "#FFD166", direction: "right", topPct: 47, duration: 18, delay:  2, bobClass: "bounce-inner", scale: 0.9  },
  { id: 4, Component: FrogSprite,  color: "#6BCB77", direction: "left",  topPct: 65, duration: 24, delay:  9, bobClass: "bounce-inner", scale: 1.05 },
  { id: 5, Component: CatSprite,   color: "#FF9B8A", direction: "right", topPct: 80, duration: 30, delay: 14, bobClass: "bob-inner",    scale: 1.0  },
  { id: 6, Component: WhaleSprite, color: "#4ECDC4", direction: "left",  topPct: 35, duration: 35, delay:  7, bobClass: "sway-inner",   scale: 1.15 },
  { id: 7, Component: BunnySprite, color: "#FFB347", direction: "left",  topPct: 91, duration: 25, delay: 12, bobClass: "bounce-inner", scale: 0.85 },
  { id: 8, Component: BearSprite,  color: "#87CEEB", direction: "right", topPct: 16, duration: 32, delay: 18, bobClass: "bob-inner",    scale: 0.9  },
  { id: 9, Component: ChickSprite, color: "#A8E6A0", direction: "left",  topPct: 72, duration: 20, delay:  3, bobClass: "bounce-inner", scale: 1.1  },
];

export function PixelBackground() {
  const animals = useMemo(() => ANIMALS, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {animals.map((a) => {
        const walkClass = a.direction === "right" ? "walk-right" : "walk-left";
        return (
          <div
            key={a.id}
            className={`absolute ${walkClass}`}
            style={{
              top: `${a.topPct}%`,
              animationDuration: `${a.duration}s`,
              animationDelay: `-${a.delay}s`,
              opacity: 0.82,
            }}
          >
            <div
              className={a.bobClass}
              style={{
                animationDuration: a.bobClass === "bounce-inner" ? "1.3s" : "2.2s",
                animationDelay: `${(a.id * 0.37) % 2}s`,
                display: "inline-block",
                transform: `scaleX(${a.direction === "left" ? -1 : 1}) scale(${a.scale})`,
                transformOrigin: "bottom center",
                filter: "drop-shadow(1px 2px 0px rgba(0,0,0,0.10))",
              }}
            >
              <a.Component body={a.color} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
