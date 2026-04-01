/* ─── Pixel-art flowers that float upward with a gentle sway ─────────── */

/* Reference style: visible square pixels, 2-3 shades per colour for depth,
   green stems with angled leaves, clean outlines.                         */

function Tulip() {
  /* Coral-pink tulip with light/base/dark shading */
  const L = "#F2899A", B = "#E05C6E", D = "#B33152";
  const S = "#2D6B2D", G = "#4A9B4A", GD = "#1F4F1F";
  return (
    <svg width="42" height="66" viewBox="0 0 14 22" shapeRendering="crispEdges">
      {/* Bloom */}
      <rect x="5"  y="0" width="4" height="1" fill={B}/>
      <rect x="4"  y="1" width="2" height="1" fill={L}/><rect x="6" y="1" width="4" height="1" fill={B}/>
      <rect x="3"  y="2" width="2" height="1" fill={L}/><rect x="5" y="2" width="5" height="1" fill={B}/><rect x="10" y="2" width="1" height="1" fill={D}/>
      <rect x="2"  y="3" width="2" height="1" fill={L}/><rect x="4" y="3" width="6" height="1" fill={B}/><rect x="10" y="3" width="2" height="1" fill={D}/>
      <rect x="1"  y="4" width="2" height="1" fill={L}/><rect x="3" y="4" width="8" height="1" fill={B}/><rect x="11" y="4" width="2" height="1" fill={D}/>
      <rect x="1"  y="5" width="2" height="1" fill={L}/><rect x="3" y="5" width="8" height="1" fill={B}/><rect x="11" y="5" width="2" height="1" fill={D}/>
      <rect x="2"  y="6" width="1" height="1" fill={L}/><rect x="3" y="6" width="8" height="1" fill={B}/><rect x="11" y="6" width="1" height="1" fill={D}/>
      <rect x="3"  y="7" width="8" height="1" fill={B}/><rect x="10" y="7" width="1" height="1" fill={D}/>
      {/* Sepal */}
      <rect x="4"  y="8" width="6" height="1" fill={S}/>
      <rect x="5"  y="9" width="4" height="1" fill={S}/>
      {/* Stem */}
      <rect x="6"  y="10" width="2" height="12" fill={S}/>
      {/* Left leaf */}
      <rect x="4"  y="12" width="3" height="1" fill={G}/>
      <rect x="2"  y="13" width="5" height="1" fill={G}/>
      <rect x="1"  y="14" width="5" height="1" fill={G}/>
      <rect x="2"  y="15" width="3" height="1" fill={GD}/>
      {/* Right leaf */}
      <rect x="8"  y="16" width="3" height="1" fill={G}/>
      <rect x="8"  y="17" width="5" height="1" fill={G}/>
      <rect x="9"  y="18" width="4" height="1" fill={G}/>
      <rect x="10" y="19" width="3" height="1" fill={GD}/>
    </svg>
  );
}

function Sunflower() {
  /* Golden sunflower with petal spokes and dark brown centre */
  const PL = "#FFE566", PB = "#FFD700", PD = "#C8A000";
  const CL = "#8B5E00", CB = "#4A2900", S = "#2D6B2D", G = "#4A9B4A", GD = "#1F4F1F";
  return (
    <svg width="54" height="72" viewBox="0 0 18 24" shapeRendering="crispEdges">
      {/* Top petal */}
      <rect x="7"  y="0" width="4" height="1" fill={PL}/>
      <rect x="7"  y="1" width="4" height="2" fill={PB}/>
      <rect x="8"  y="3" width="2" height="1" fill={PD}/>
      {/* Top-left petal */}
      <rect x="3"  y="1" width="2" height="1" fill={PL}/>
      <rect x="3"  y="2" width="3" height="2" fill={PB}/>
      <rect x="4"  y="4" width="2" height="1" fill={PD}/>
      {/* Top-right petal */}
      <rect x="13" y="1" width="2" height="1" fill={PL}/>
      <rect x="12" y="2" width="3" height="2" fill={PB}/>
      <rect x="12" y="4" width="2" height="1" fill={PD}/>
      {/* Left petal */}
      <rect x="0"  y="6" width="2" height="1" fill={PL}/>
      <rect x="0"  y="7" width="4" height="2" fill={PB}/>
      <rect x="1"  y="9" width="3" height="1" fill={PD}/>
      {/* Right petal */}
      <rect x="16" y="6" width="2" height="1" fill={PL}/>
      <rect x="14" y="7" width="4" height="2" fill={PB}/>
      <rect x="14" y="9" width="3" height="1" fill={PD}/>
      {/* Bottom-left petal */}
      <rect x="3"  y="11" width="3" height="2" fill={PB}/>
      <rect x="4"  y="10" width="2" height="1" fill={PD}/>
      <rect x="3"  y="13" width="2" height="1" fill={PD}/>
      {/* Bottom-right petal */}
      <rect x="12" y="11" width="3" height="2" fill={PB}/>
      <rect x="12" y="10" width="2" height="1" fill={PD}/>
      <rect x="13" y="13" width="2" height="1" fill={PD}/>
      {/* Bottom petal */}
      <rect x="7"  y="12" width="4" height="2" fill={PB}/>
      <rect x="8"  y="14" width="2" height="1" fill={PD}/>
      {/* Centre */}
      <rect x="5"  y="4"  width="8" height="1" fill={CB}/>
      <rect x="4"  y="5"  width="10" height="6" fill={CB}/>
      <rect x="5"  y="11" width="8" height="1" fill={CB}/>
      {/* Centre highlight */}
      <rect x="5"  y="5"  width="3" height="2" fill={CL}/>
      {/* Stem */}
      <rect x="8"  y="15" width="2" height="9" fill={S}/>
      {/* Left leaf */}
      <rect x="4"  y="17" width="5" height="1" fill={G}/>
      <rect x="2"  y="18" width="6" height="1" fill={G}/>
      <rect x="1"  y="19" width="6" height="1" fill={G}/>
      <rect x="2"  y="20" width="4" height="1" fill={GD}/>
      {/* Right leaf */}
      <rect x="10" y="20" width="5" height="1" fill={G}/>
      <rect x="11" y="21" width="5" height="1" fill={G}/>
      <rect x="12" y="22" width="4" height="1" fill={GD}/>
    </svg>
  );
}

function Rose() {
  /* Deep red rose with layered petals */
  const L = "#FF8FA3", B = "#D63553", D = "#8C1F35", VD = "#5A0F22";
  const S = "#2D6B2D", G = "#4A9B4A", GD = "#1F4F1F";
  return (
    <svg width="42" height="66" viewBox="0 0 14 22" shapeRendering="crispEdges">
      {/* Outermost petals top arc */}
      <rect x="3"  y="1" width="2" height="2" fill={B}/><rect x="9"  y="1" width="2" height="2" fill={B}/>
      <rect x="2"  y="2" width="2" height="2" fill={B}/><rect x="10" y="2" width="2" height="2" fill={B}/>
      {/* Top centre */}
      <rect x="5"  y="0" width="4" height="1" fill={L}/>
      <rect x="4"  y="1" width="6" height="1" fill={L}/>
      {/* Middle layer */}
      <rect x="2"  y="3" width="10" height="1" fill={B}/>
      <rect x="1"  y="4" width="12" height="3" fill={B}/>
      <rect x="1"  y="4" width="2"  height="3" fill={L}/>   {/* left light */}
      <rect x="11" y="4" width="2"  height="3" fill={D}/>   {/* right dark */}
      {/* Inner centre cup */}
      <rect x="4"  y="3" width="6" height="4" fill={D}/>
      <rect x="5"  y="3" width="4" height="1" fill={L}/>    {/* top shine */}
      <rect x="11" y="5" width="1" height="2" fill={VD}/>
      {/* Lower petals */}
      <rect x="2"  y="7" width="10" height="2" fill={B}/>
      <rect x="1"  y="8" width="1"  height="1" fill={D}/>
      <rect x="12" y="8" width="1"  height="1" fill={VD}/>
      <rect x="3"  y="9" width="8"  height="1" fill={D}/>
      {/* Sepal */}
      <rect x="4"  y="9"  width="6" height="1" fill={S}/>
      <rect x="5"  y="10" width="4" height="1" fill={S}/>
      {/* Stem */}
      <rect x="6"  y="11" width="2" height="11" fill={S}/>
      {/* Left leaf */}
      <rect x="3"  y="13" width="4" height="1" fill={G}/>
      <rect x="1"  y="14" width="5" height="1" fill={G}/>
      <rect x="1"  y="15" width="4" height="1" fill={G}/>
      <rect x="2"  y="16" width="3" height="1" fill={GD}/>
      {/* Right leaf */}
      <rect x="8"  y="17" width="4" height="1" fill={G}/>
      <rect x="9"  y="18" width="4" height="1" fill={G}/>
      <rect x="10" y="19" width="3" height="1" fill={G}/>
      <rect x="10" y="20" width="2" height="1" fill={GD}/>
    </svg>
  );
}

function Daisy() {
  /* White daisy with yellow centre */
  const PW = "#FFFFFF", PS = "#D8D8D8";
  const CY = "#FFD700", CD = "#C8A000";
  const S = "#2D6B2D", G = "#4A9B4A", GD = "#1F4F1F";
  return (
    <svg width="42" height="66" viewBox="0 0 14 22" shapeRendering="crispEdges">
      {/* Top petal */}
      <rect x="6"  y="0" width="2" height="3" fill={PW}/><rect x="7" y="0" width="1" height="3" fill={PS}/>
      {/* Top-left petal */}
      <rect x="2"  y="1" width="2" height="3" fill={PW}/><rect x="3" y="1" width="1" height="3" fill={PS}/>
      {/* Top-right petal */}
      <rect x="10" y="1" width="2" height="3" fill={PW}/><rect x="10" y="1" width="1" height="3" fill={PS}/>
      {/* Left petal */}
      <rect x="0"  y="5" width="3" height="2" fill={PW}/><rect x="1" y="5" width="1" height="2" fill={PS}/>
      {/* Right petal */}
      <rect x="11" y="5" width="3" height="2" fill={PW}/><rect x="12" y="5" width="1" height="2" fill={PS}/>
      {/* Bottom-left petal */}
      <rect x="2"  y="8" width="2" height="3" fill={PW}/><rect x="3" y="8" width="1" height="3" fill={PS}/>
      {/* Bottom-right petal */}
      <rect x="10" y="8" width="2" height="3" fill={PW}/><rect x="10" y="8" width="1" height="3" fill={PS}/>
      {/* Bottom petal */}
      <rect x="6"  y="9" width="2" height="3" fill={PW}/><rect x="7" y="9" width="1" height="3" fill={PS}/>
      {/* Centre disc */}
      <rect x="4"  y="4" width="6" height="5" fill={CY}/>
      <rect x="4"  y="4" width="2" height="2" fill="#FFE566"/>  {/* highlight */}
      <rect x="8"  y="7" width="2" height="2" fill={CD}/>       {/* shadow */}
      {/* Stem */}
      <rect x="6"  y="12" width="2" height="10" fill={S}/>
      {/* Left leaf */}
      <rect x="3"  y="14" width="4" height="1" fill={G}/>
      <rect x="1"  y="15" width="5" height="1" fill={G}/>
      <rect x="2"  y="16" width="3" height="1" fill={GD}/>
      {/* Right leaf */}
      <rect x="8"  y="18" width="4" height="1" fill={G}/>
      <rect x="9"  y="19" width="4" height="1" fill={G}/>
      <rect x="10" y="20" width="3" height="1" fill={GD}/>
    </svg>
  );
}

function Lavender() {
  /* Lavender sprig — multiple small blooms on long stem */
  const PL = "#E0B0FF", PB = "#9B59B6", PD = "#6C3483";
  const S = "#2D6B2D", G = "#4A9B4A";
  return (
    <svg width="30" height="78" viewBox="0 0 10 26" shapeRendering="crispEdges">
      {/* Top bud cluster */}
      <rect x="4" y="0" width="2" height="1" fill={PL}/>
      {/* Blooms — staggered pairs going down */}
      <rect x="3" y="1" width="2" height="2" fill={PB}/><rect x="5" y="1" width="2" height="2" fill={PB}/>
      <rect x="3" y="1" width="1" height="1" fill={PL}/><rect x="5" y="1" width="1" height="1" fill={PL}/>
      <rect x="4" y="2" width="2" height="1" fill={PD}/>

      <rect x="2" y="4" width="2" height="2" fill={PB}/><rect x="6" y="4" width="2" height="2" fill={PB}/>
      <rect x="2" y="4" width="1" height="1" fill={PL}/><rect x="6" y="4" width="1" height="1" fill={PL}/>
      <rect x="4" y="4" width="2" height="1" fill={S}/>
      <rect x="3" y="5" width="1" height="1" fill={PD}/><rect x="6" y="5" width="1" height="1" fill={PD}/>

      <rect x="2" y="7" width="2" height="2" fill={PB}/><rect x="6" y="7" width="2" height="2" fill={PB}/>
      <rect x="2" y="7" width="1" height="1" fill={PL}/><rect x="6" y="7" width="1" height="1" fill={PL}/>
      <rect x="4" y="7" width="2" height="1" fill={S}/>
      <rect x="3" y="8" width="1" height="1" fill={PD}/><rect x="6" y="8" width="1" height="1" fill={PD}/>

      <rect x="3" y="10" width="2" height="2" fill={PB}/><rect x="5" y="10" width="2" height="2" fill={PB}/>
      <rect x="3" y="10" width="1" height="1" fill={PL}/><rect x="5" y="10" width="1" height="1" fill={PL}/>
      <rect x="4" y="10" width="2" height="1" fill={S}/>
      <rect x="4" y="11" width="1" height="1" fill={PD}/>

      {/* Stem */}
      <rect x="4" y="3" width="2" height="23" fill={S}/>
      {/* Small leaves along stem */}
      <rect x="2" y="14" width="3" height="1" fill={G}/>
      <rect x="5" y="16" width="3" height="1" fill={G}/>
      <rect x="2" y="19" width="3" height="1" fill={G}/>
      <rect x="5" y="21" width="3" height="1" fill={G}/>
    </svg>
  );
}

function CherryBlossom() {
  /* Pale pink 5-petal blossom, delicate */
  const PL = "#FFE0EB", PB = "#FFB6C8", PD = "#E88AA0";
  const STM = "#B8860B", S = "#2D6B2D", G = "#4A9B4A", GD = "#1F4F1F";
  return (
    <svg width="42" height="60" viewBox="0 0 14 20" shapeRendering="crispEdges">
      {/* Top petal */}
      <rect x="5"  y="0" width="4" height="3" fill={PB}/>
      <rect x="5"  y="0" width="2" height="2" fill={PL}/>
      <rect x="7"  y="2" width="2" height="1" fill={PD}/>
      {/* Top-left petal */}
      <rect x="1"  y="2" width="3" height="3" fill={PB}/>
      <rect x="1"  y="2" width="2" height="2" fill={PL}/>
      {/* Top-right petal */}
      <rect x="10" y="2" width="3" height="3" fill={PB}/>
      <rect x="10" y="2" width="2" height="2" fill={PL}/>
      {/* Left petal */}
      <rect x="0"  y="5" width="3" height="3" fill={PB}/>
      <rect x="0"  y="5" width="2" height="2" fill={PL}/>
      {/* Right petal */}
      <rect x="11" y="5" width="3" height="3" fill={PB}/>
      <rect x="11" y="5" width="2" height="2" fill={PL}/>
      {/* Centre */}
      <rect x="4"  y="3" width="6" height="5" fill={PB}/>
      <rect x="5"  y="3" width="2" height="2" fill={PL}/>
      <rect x="8"  y="6" width="2" height="2" fill={PD}/>
      {/* Stamens (tiny yellow dots) */}
      <rect x="5"  y="4" width="1" height="1" fill="#FFD700"/>
      <rect x="7"  y="4" width="1" height="1" fill="#FFD700"/>
      <rect x="6"  y="5" width="1" height="1" fill="#FFD700"/>
      {/* Branch */}
      <rect x="6"  y="8"  width="2" height="2" fill={STM}/>
      <rect x="5"  y="9"  width="4" height="1" fill={STM}/>
      {/* Stem */}
      <rect x="6"  y="10" width="2" height="10" fill={S}/>
      {/* Left leaf */}
      <rect x="3"  y="12" width="4" height="1" fill={G}/>
      <rect x="1"  y="13" width="5" height="1" fill={G}/>
      <rect x="2"  y="14" width="4" height="1" fill={G}/>
      <rect x="3"  y="15" width="2" height="1" fill={GD}/>
      {/* Right leaf */}
      <rect x="8"  y="16" width="4" height="1" fill={G}/>
      <rect x="9"  y="17" width="4" height="1" fill={G}/>
      <rect x="10" y="18" width="3" height="1" fill={GD}/>
    </svg>
  );
}

/* ─── Flower floating layout ─────────────────────────────────────────── */
interface FlowerDef {
  id: number;
  Component: React.ComponentType;
  leftPct: number;
  duration: number;
  delay: number;
  riseClass: "rise-a" | "rise-b" | "rise-c";
  swayDuration: number;
  scale: number;
}

const FLOWERS: FlowerDef[] = [
  { id:  1, Component: Tulip,        leftPct:  5,  duration: 20, delay:  0, riseClass: "rise-a", swayDuration: 3.0, scale: 1.0  },
  { id:  2, Component: Sunflower,    leftPct: 18,  duration: 26, delay:  7, riseClass: "rise-b", swayDuration: 3.5, scale: 0.85 },
  { id:  3, Component: Rose,         leftPct: 32,  duration: 22, delay:  3, riseClass: "rise-c", swayDuration: 2.8, scale: 1.0  },
  { id:  4, Component: Daisy,        leftPct: 46,  duration: 18, delay: 11, riseClass: "rise-a", swayDuration: 2.2, scale: 1.0  },
  { id:  5, Component: Lavender,     leftPct: 58,  duration: 24, delay:  5, riseClass: "rise-b", swayDuration: 2.6, scale: 1.1  },
  { id:  6, Component: CherryBlossom,leftPct: 72,  duration: 21, delay: 14, riseClass: "rise-c", swayDuration: 2.4, scale: 0.9  },
  { id:  7, Component: Tulip,        leftPct: 83,  duration: 28, delay:  9, riseClass: "rise-a", swayDuration: 3.2, scale: 1.15 },
  { id:  8, Component: Daisy,        leftPct: 13,  duration: 23, delay: 17, riseClass: "rise-c", swayDuration: 2.0, scale: 0.8  },
  { id:  9, Component: Rose,         leftPct: 64,  duration: 19, delay:  2, riseClass: "rise-b", swayDuration: 3.0, scale: 0.95 },
  { id: 10, Component: Sunflower,    leftPct: 40,  duration: 30, delay: 20, riseClass: "rise-a", swayDuration: 4.0, scale: 0.75 },
  { id: 11, Component: CherryBlossom,leftPct: 26,  duration: 17, delay:  6, riseClass: "rise-b", swayDuration: 2.3, scale: 1.05 },
  { id: 12, Component: Lavender,     leftPct: 90,  duration: 25, delay: 13, riseClass: "rise-c", swayDuration: 2.8, scale: 0.9  },
];

export function PixelBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {FLOWERS.map((f) => (
        <div
          key={f.id}
          className={`absolute bottom-0 ${f.riseClass}`}
          style={{
            left: `${f.leftPct}%`,
            animationDuration: `${f.duration}s`,
            animationDelay: `-${f.delay}s`,
          }}
        >
          <div
            className="sway-flower"
            style={{
              animationDuration: `${f.swayDuration}s`,
              animationDelay: `${(f.id * 0.41) % f.swayDuration}s`,
              display: "inline-block",
              transform: `scale(${f.scale})`,
              transformOrigin: "bottom center",
              filter: "drop-shadow(1px 2px 0px rgba(0,0,0,0.10))",
            }}
          >
            <f.Component />
          </div>
        </div>
      ))}
    </div>
  );
}
