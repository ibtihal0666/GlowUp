import React from "react";

/* ─────────────────────────────────────────────────────────────
   All sprites use viewBox "0 0 28 36" — cute pixel-art style
   inspired by the kawaii glass-bottle reference:
     • Stepped rects → rounded silhouette
     • Bright left strip → glass reflection
     • Darker right strip → shadow / depth
     • White label with tiny floral pixel art
     • 2-3 sparkle pixels outside the bottle
   ─────────────────────────────────────────────────────────── */

interface SpriteProps { size?: number }

/* Tiny sparkle helper (cross shape) */
function Sparkle({ x, y, c = "#FFFFFF" }: { x: number; y: number; c?: string }) {
  return (
    <>
      <rect x={x}   y={y-1} width={1} height={1} fill={c} opacity={0.85}/>
      <rect x={x-1} y={y}   width={3} height={1} fill={c} opacity={0.85}/>
      <rect x={x}   y={y+1} width={1} height={1} fill={c} opacity={0.85}/>
    </>
  );
}

/* ── 1. Cetaphil Daily Facial Cleanser ───────────────────────
   White pump bottle, blue cap, green+blue oval logo          */
export function CetaphilCleanserSprite({ size = 96 }: SpriteProps) {
  const W  = "#F8F8F8", WH = "#FFFFFF", WS = "#DCDCDC", WD = "#C0C0C0";
  const BC = "#5B9BD5", BH = "#7EB8E8", BD = "#3A7AB8";
  const GR = "#6BAE75";
  const PG = "#B0B0B0", PD = "#909090";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      {/* Pump head */}
      <rect x={11} y={0} width={5} height={2} fill={PG}/>
      <rect x={12} y={0} width={3} height={2} fill={PD}/>
      {/* Pump stem */}
      <rect x={13} y={2} width={2} height={4} fill={PG}/>
      {/* Cap - stepped for rounded look */}
      <rect x={9}  y={5} width={10} height={1} fill={BC}/>
      <rect x={8}  y={6} width={12} height={3} fill={BC}/>
      <rect x={8}  y={6} width={3}  height={3} fill={BH}/>
      <rect x={18} y={6} width={2}  height={3} fill={BD}/>
      <rect x={9}  y={8} width={10} height={1} fill={BD}/>
      {/* Shoulder */}
      <rect x={7}  y={9}  width={14} height={1} fill={WS}/>
      {/* Bottle body */}
      <rect x={6}  y={10} width={16} height={22} fill={W}/>
      {/* Left glass highlight */}
      <rect x={6}  y={10} width={2}  height={22} fill={WH}/>
      {/* Right shadow */}
      <rect x={20} y={11} width={2}  height={20} fill={WS}/>
      <rect x={21} y={12} width={1}  height={18} fill={WD}/>
      {/* Label */}
      <rect x={7}  y={14} width={13} height={13} fill={WH}/>
      <rect x={7}  y={14} width={13} height={1}  fill={WS}/>
      <rect x={7}  y={26} width={13} height={1}  fill={WS}/>
      {/* Logo: green stripe / blue oval / green stripe */}
      <rect x={8}  y={17} width={11} height={1}  fill={GR}/>
      <rect x={8}  y={18} width={11} height={4}  fill={BC}/>
      <rect x={9}  y={18} width={3}  height={4}  fill={BH}/>
      <rect x={8}  y={22} width={11} height={1}  fill={GR}/>
      {/* Base */}
      <rect x={6}  y={32} width={16} height={2}  fill={WS}/>
      <rect x={7}  y={33} width={14} height={1}  fill={WD}/>
      {/* Stepped bottom corners */}
      <rect x={6}  y={32} width={1}  height={2}  fill={W}/>
      <rect x={21} y={32} width={1}  height={2}  fill={W}/>
      {/* Sparkles */}
      <Sparkle x={4}  y={12} c="#FFF9C4"/>
      <Sparkle x={23} y={18} c="#FFF9C4"/>
      <Sparkle x={4}  y={27} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 2. AXIS-Y Daily Purifying Treatment Toner ───────────────
   Tall teal glass bottle, cream label, white screw cap       */
export function AxisYTonerSprite({ size = 96 }: SpriteProps) {
  const W  = "#F2F2F2", WH = "#FFFFFF";
  const TG = "#2D7A5E", TH = "#3D9070", TD = "#1A5440", TB = "#0F3328";
  const CR = "#FFFDE7", CS = "#F5EEC8";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      {/* White cap - stepped rounded */}
      <rect x={10} y={0} width={8}  height={1} fill={W}/>
      <rect x={9}  y={1} width={10} height={3} fill={WH}/>
      <rect x={9}  y={1} width={2}  height={3} fill={WH}/>
      <rect x={17} y={1} width={2}  height={3} fill="#DCDCDC"/>
      <rect x={10} y={3} width={8}  height={1} fill="#C8C8C8"/>
      {/* Neck */}
      <rect x={11} y={4} width={6}  height={2} fill={TG}/>
      <rect x={11} y={4} width={1}  height={2} fill={TH}/>
      {/* Shoulder */}
      <rect x={9}  y={6} width={10} height={1} fill={TH}/>
      <rect x={8}  y={7} width={12} height={1} fill={TG}/>
      {/* Bottle body */}
      <rect x={7}  y={8}  width={14} height={24} fill={TG}/>
      {/* Left glass reflection */}
      <rect x={7}  y={8}  width={2}  height={24} fill={TH}/>
      <rect x={7}  y={8}  width={1}  height={24} fill="#5DB88A"/>
      {/* Right shadow */}
      <rect x={19} y={9}  width={2}  height={22} fill={TD}/>
      {/* Label - cream rectangle */}
      <rect x={8}  y={13} width={12} height={12} fill={CR}/>
      <rect x={8}  y={13} width={12} height={1}  fill={CS}/>
      <rect x={8}  y={24} width={12} height={1}  fill={CS}/>
      <rect x={8}  y={13} width={1}  height={12} fill={CS}/>
      <rect x={19} y={13} width={1}  height={12} fill={CS}/>
      {/* Tiny AXIS-Y flower decoration on label */}
      <rect x={13} y={16} width={2}  height={1}  fill={TG}/>
      <rect x={12} y={17} width={4}  height={2}  fill={TG}/>
      <rect x={13} y={19} width={2}  height={1}  fill={TG}/>
      <rect x={13} y={17} width={2}  height={2}  fill="#E8F5E9"/>
      {/* Teal bottom accent */}
      <rect x={7}  y={32} width={14} height={2}  fill={TB}/>
      <rect x={8}  y={33} width={12} height={1}  fill="#0A2620"/>
      {/* Sparkles */}
      <Sparkle x={5}  y={11} c="#A8E6CF"/>
      <Sparkle x={23} y={22} c="#A8E6CF"/>
      <Sparkle x={5}  y={28} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 3. Herbivore Bakuchiol Serum ───────────────────────────
   Square glass dropper bottle, lavender liquid, white label
   (most like the reference image!)                           */
export function HerbivoreBakuchiolSprite({ size = 96 }: SpriteProps) {
  const WH = "#FFFFFF", WS = "#EEEEEE";
  const PL = "#D4A8E0", PM = "#B97FCA", PD = "#8E4FA8", PH = "#EDD6F5";
  const LB = "#F9F0FF";  // label tint
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      {/* Dropper ball */}
      <rect x={12} y={0} width={4}  height={1} fill={WH}/>
      <rect x={11} y={1} width={6}  height={2} fill={WH}/>
      <rect x={11} y={1} width={1}  height={2} fill={WS}/>
      <rect x={16} y={1} width={1}  height={2} fill={WS}/>
      {/* Dropper body */}
      <rect x={11} y={3} width={6}  height={4} fill={WH}/>
      <rect x={11} y={3} width={1}  height={4} fill={WS}/>
      {/* Thin neck */}
      <rect x={12} y={7} width={4}  height={2} fill={WS}/>
      <rect x={13} y={7} width={2}  height={2} fill={WH}/>
      {/* Bottle top */}
      <rect x={8}  y={9} width={12} height={1} fill={PM}/>
      {/* Bottle body - square-ish stepped for cute look */}
      <rect x={7}  y={10} width={14} height={1} fill={PL}/>
      <rect x={6}  y={11} width={16} height={20} fill={PL}/>
      <rect x={7}  y={31} width={14} height={1} fill={PM}/>
      {/* Left glass reflection (lavender liquid) */}
      <rect x={6}  y={11} width={2}  height={20} fill={PH}/>
      <rect x={6}  y={11} width={1}  height={20} fill="#F0D8FF"/>
      {/* Right shadow */}
      <rect x={20} y={12} width={2}  height={18} fill={PD}/>
      {/* White label */}
      <rect x={7}  y={15} width={14} height={12} fill={LB}/>
      <rect x={7}  y={15} width={14} height={1}  fill={WS}/>
      <rect x={7}  y={26} width={14} height={1}  fill={WS}/>
      {/* Cute rose / flower on label (like the reference!) */}
      <rect x={13} y={17} width={2}  height={1}  fill="#F48FB1"/>
      <rect x={12} y={18} width={4}  height={2}  fill="#F48FB1"/>
      <rect x={13} y={20} width={2}  height={1}  fill="#F48FB1"/>
      <rect x={13} y={18} width={2}  height={2}  fill="#FFCDD2"/>
      <rect x={13} y={22} width={2}  height={2}  fill="#81C784"/>  {/* stem */}
      {/* Small sparkles on label */}
      <rect x={9}  y={17} width={1}  height={1}  fill={WH} opacity={0.9}/>
      <rect x={18} y={23} width={1}  height={1}  fill={WH} opacity={0.9}/>
      {/* Base */}
      <rect x={6}  y={32} width={16} height={2}  fill={PM}/>
      <rect x={7}  y={33} width={14} height={1}  fill={PD}/>
      {/* Sparkles outside */}
      <Sparkle x={4}  y={14} c="#E1BEE7"/>
      <Sparkle x={24} y={20} c="#E1BEE7"/>
      <Sparkle x={4}  y={28} c="#FFFFFF"/>
      <Sparkle x={23} y={10} c="#F8BBD9"/>
    </svg>
  );
}

/* ── 4. CeraVe Moisturizing Cream ───────────────────────────
   Wide flat jar, white body, navy-blue CeraVe branding      */
export function CeraVeMoisturizerSprite({ size = 96 }: SpriteProps) {
  const W  = "#F5F5F5", WH = "#FFFFFF", WS = "#DCDCDC", WD = "#C0C0C0";
  const NB = "#1A4B99", BH = "#3B72C0", BL = "#2459B0";
  const RIM = "#C8C8C8";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      {/* Lid - step at corners for rounded look */}
      <rect x={4}  y={8}  width={20} height={1} fill={WS}/>
      <rect x={3}  y={9}  width={22} height={5} fill={W}/>
      <rect x={3}  y={9}  width={3}  height={5} fill={WH}/>
      <rect x={22} y={9}  width={3}  height={5} fill={WS}/>
      <rect x={4}  y={13} width={20} height={1} fill={WD}/>
      {/* Rim */}
      <rect x={3}  y={14} width={22} height={1} fill={RIM}/>
      {/* Jar body */}
      <rect x={3}  y={15} width={22} height={14} fill={W}/>
      <rect x={3}  y={15} width={3}  height={14} fill={WH}/>
      <rect x={22} y={15} width={3}  height={14} fill={WS}/>
      {/* CeraVe blue logo block */}
      <rect x={5}  y={17} width={18} height={8}  fill={NB}/>
      <rect x={5}  y={17} width={4}  height={8}  fill={BH}/>
      <rect x={7}  y={17} width={2}  height={8}  fill={BL}/>
      {/* CeraVe text hint (lighter stripe) */}
      <rect x={6}  y={19} width={16} height={2}  fill={BH}/>
      <rect x={6}  y={19} width={3}  height={2}  fill="#5A9FE8"/>
      {/* White text area */}
      <rect x={5}  y={22} width={18} height={3}  fill={WH}/>
      <rect x={6}  y={23} width={5}  height={1}  fill={NB}/>  {/* text blocks */}
      <rect x={13} y={23} width={5}  height={1}  fill={NB}/>
      {/* Bottom rim */}
      <rect x={3}  y={29} width={22} height={1} fill={RIM}/>
      <rect x={4}  y={30} width={20} height={1} fill={WD}/>
      <rect x={5}  y={31} width={18} height={1} fill={WS}/>
      {/* Sparkles */}
      <Sparkle x={1}  y={13} c="#FFF9C4"/>
      <Sparkle x={26} y={19} c="#FFF9C4"/>
      <Sparkle x={1}  y={26} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 5. Cetaphil Sun Ultra-Light Lotion SPF 50 ──────────────
   White squeezable tube, yellow screw cap at bottom          */
export function CetaphilSPFSprite({ size = 96 }: SpriteProps) {
  const W  = "#F8F8F8", WH = "#FFFFFF", WS = "#DCDCDC", WD = "#C0C0C0";
  const GC = "#C8C8C8", GCH = "#E4E4E4";
  const YB = "#FFD600", YH = "#FFE84D", YD = "#E6B800";
  const GRL = "#7CB342", GRD = "#558B2F";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      {/* Gray cap at top */}
      <rect x={10} y={0} width={8}  height={1} fill={GC}/>
      <rect x={9}  y={1} width={10} height={3} fill={GC}/>
      <rect x={9}  y={1} width={2}  height={3} fill={GCH}/>
      <rect x={17} y={1} width={2}  height={3} fill="#B0B0B0"/>
      <rect x={10} y={3} width={8}  height={1} fill="#B0B0B0"/>
      {/* Tube shoulder */}
      <rect x={9}  y={4} width={10} height={1} fill={WS}/>
      {/* Tube body - stepped rounded */}
      <rect x={8}  y={5}  width={12} height={24} fill={W}/>
      <rect x={8}  y={5}  width={2}  height={24} fill={WH}/>
      <rect x={18} y={6}  width={2}  height={22} fill={WS}/>
      <rect x={19} y={7}  width={1}  height={20} fill={WD}/>
      {/* Green Cetaphil logo band */}
      <rect x={9}  y={9}  width={10} height={1} fill={GRL}/>
      <rect x={9}  y={10} width={10} height={2} fill={GRD}/>
      <rect x={10} y={10} width={2}  height={2} fill={GRL}/>
      {/* Yellow SPF label area */}
      <rect x={9}  y={12} width={10} height={7}  fill={YB}/>
      <rect x={9}  y={12} width={2}  height={7}  fill={YH}/>
      <rect x={17} y={13} width={2}  height={5}  fill={YD}/>
      {/* "50" hint pixels */}
      <rect x={11} y={14} width={3}  height={3}  fill={WH}/>
      <rect x={15} y={14} width={3}  height={3}  fill={WH}/>
      <rect x={11} y={14} width={1}  height={1}  fill={YB}/>
      {/* White body lower */}
      <rect x={8}  y={19} width={12} height={8}  fill={W}/>
      <rect x={8}  y={19} width={2}  height={8}  fill={WH}/>
      <rect x={18} y={19} width={2}  height={8}  fill={WS}/>
      {/* Yellow crimped bottom */}
      <rect x={8}  y={27} width={12} height={3}  fill={YB}/>
      <rect x={8}  y={27} width={2}  height={3}  fill={YH}/>
      <rect x={18} y={27} width={2}  height={3}  fill={YD}/>
      <rect x={9}  y={29} width={10} height={2}  fill={YD}/>
      <rect x={10} y={30} width={8}  height={2}  fill={YD}/>
      <rect x={11} y={31} width={6}  height={1}  fill="#C89A00"/>
      {/* Sparkles */}
      <Sparkle x={6}  y={8}  c="#FFF9C4"/>
      <Sparkle x={22} y={15} c="#FFF9C4"/>
      <Sparkle x={6}  y={23} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 6. AXIS-Y Vegan Collagen Eye Serum ─────────────────────
   Slim roller-ball pen, cream body, green collar, silver tip */
export function AxisYEyeSerumSprite({ size = 96 }: SpriteProps) {
  const SM = "#C8C8C8", SH = "#E8E8E8", SD = "#A0A0A0";
  const WH = "#FFFFFF";
  const GR = "#3D8060", GL = "#52A87C", GD = "#2A5C44";
  const CR = "#FFFDE7", CH = "#FFFFFF", CD = "#F5EEC8";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      {/* Silver roller ball */}
      <rect x={12} y={0} width={4}  height={1} fill={SM}/>
      <rect x={11} y={1} width={6}  height={3} fill={SM}/>
      <rect x={11} y={1} width={2}  height={3} fill={SH}/>
      <rect x={15} y={1} width={2}  height={3} fill={SD}/>
      <rect x={12} y={3} width={4}  height={1} fill={SD}/>
      {/* White collar */}
      <rect x={12} y={4} width={4}  height={2} fill={WH}/>
      <rect x={12} y={4} width={1}  height={2} fill={WH}/>
      {/* Green cap */}
      <rect x={11} y={6} width={6}  height={4} fill={GR}/>
      <rect x={11} y={6} width={1}  height={4} fill={GL}/>
      <rect x={15} y={6} width={2}  height={4} fill={GD}/>
      {/* Cream body - slim, centered */}
      <rect x={11} y={10} width={6}  height={22} fill={CR}/>
      <rect x={11} y={10} width={1}  height={22} fill={CH}/>
      <rect x={15} y={11} width={2}  height={20} fill={CD}/>
      {/* Green circle/logo accent on body */}
      <rect x={12} y={15} width={4}  height={1}  fill={GR}/>
      <rect x={11} y={16} width={6}  height={4}  fill={GR}/>
      <rect x={12} y={20} width={4}  height={1}  fill={GR}/>
      <rect x={12} y={16} width={4}  height={4}  fill="#E8F5E9"/>
      <rect x={12} y={16} width={1}  height={4}  fill={GL}/>
      {/* Green bottom cap */}
      <rect x={11} y={32} width={6}  height={3}  fill={GD}/>
      <rect x={11} y={32} width={1}  height={3}  fill={GR}/>
      <rect x={12} y={34} width={4}  height={1}  fill="#1A3D2A"/>
      {/* Sparkles */}
      <Sparkle x={9}  y={8}  c="#A8E6CF"/>
      <Sparkle x={19} y={18} c="#A8E6CF"/>
      <Sparkle x={9}  y={28} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 7. Purederm Deep Purifying Pink O2 Bubble Mask ─────────
   Flat foil packet, periwinkle-blue with pink mask & orange tab */
export function PuredermMaskSprite({ size = 96 }: SpriteProps) {
  const BL = "#7986CB", BH = "#9FA8DA", BD = "#5C6BC0", BK = "#3F4E99";
  const PK = "#F48FB1", PH = "#FBBCCE", PD = "#D46080";
  const OR = "#FF8F00";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      {/* Outer packet shape - stepped for rounded corners */}
      <rect x={3}  y={3}  width={22} height={1} fill={BL}/>
      <rect x={2}  y={4}  width={24} height={26} fill={BL}/>
      <rect x={3}  y={30} width={22} height={1} fill={BL}/>
      {/* Inner lighter face */}
      <rect x={3}  y={4}  width={3}  height={26} fill={BH}/>
      <rect x={22} y={5}  width={3}  height={24} fill={BD}/>
      <rect x={3}  y={4}  width={22} height={2}  fill={BH}/>
      <rect x={3}  y={28} width={22} height={2}  fill={BD}/>
      {/* Orange brand tab */}
      <rect x={4}  y={6}  width={7}  height={3}  fill={OR}/>
      {/* Pink mask area in center */}
      <rect x={4}  y={9}  width={20} height={18} fill={PK}/>
      <rect x={4}  y={9}  width={3}  height={18} fill={PH}/>
      <rect x={21} y={10} width={3}  height={16} fill={PD}/>
      {/* Face mask shape - eye/mouth cut-outs (lighter area) */}
      <rect x={6}  y={11} width={6}  height={3}  fill={PH}/>
      <rect x={16} y={11} width={6}  height={3}  fill={PH}/>
      <rect x={8}  y={20} width={12} height={3}  fill={PH}/>
      <rect x={10} y={22} width={8}  height={1}  fill={PK}/>
      {/* Center cute decoration */}
      <rect x={13} y={15} width={2}  height={1}  fill={WH}/>
      <rect x={12} y={16} width={4}  height={1}  fill={WH}/>
      <rect x={13} y={17} width={2}  height={1}  fill={WH}/>
      {/* Bottom */}
      <rect x={3}  y={30} width={22} height={1}  fill={BK}/>
      <rect x={4}  y={31} width={20} height={1}  fill={BK}/>
      {/* Sparkles */}
      <Sparkle x={1}  y={8}  c="#C5CAE9"/>
      <Sparkle x={27} y={16} c="#C5CAE9"/>
      <Sparkle x={1}  y={24} c="#FFFFFF"/>
    </svg>
  );
}

const WH = "#FFFFFF";

/* ── 8. Hydrating Face Lotion ────────────────────────────────
   Soft rose-pink pump bottle with white label                */
export function HydratingLotionSprite({ size = 96 }: SpriteProps) {
  const PK = "#FFB6C1", PH = "#FFD0DA", PD = "#E8788A", PC = "#C85070";
  const PG = "#C8A0B0";
  const W  = "#FFFFFF", WS = "#F5E8EC";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      <rect x={11} y={0} width={5} height={2} fill={PG}/>
      <rect x={13} y={2} width={2} height={4} fill={PG}/>
      <rect x={9}  y={5} width={10} height={1} fill={PC}/>
      <rect x={8}  y={6} width={12} height={3} fill={PC}/>
      <rect x={8}  y={6} width={3}  height={3} fill={PD}/>
      <rect x={18} y={6} width={2}  height={3} fill="#A03050"/>
      <rect x={9}  y={8} width={10} height={1} fill="#A03050"/>
      <rect x={7}  y={9}  width={14} height={1} fill={PH}/>
      <rect x={6}  y={10} width={16} height={22} fill={PK}/>
      <rect x={6}  y={10} width={2}  height={22} fill={PH}/>
      <rect x={6}  y={10} width={1}  height={22} fill="#FFE0EA"/>
      <rect x={20} y={11} width={2}  height={20} fill={PD}/>
      <rect x={7}  y={14} width={13} height={13} fill={W}/>
      <rect x={7}  y={14} width={13} height={1}  fill={WS}/>
      <rect x={7}  y={26} width={13} height={1}  fill={WS}/>
      <rect x={13} y={17} width={2}  height={1}  fill={PC}/>
      <rect x={12} y={18} width={4}  height={2}  fill={PC}/>
      <rect x={13} y={20} width={2}  height={1}  fill={PC}/>
      <rect x={13} y={18} width={2}  height={2}  fill={PH}/>
      <rect x={13} y={22} width={2}  height={2}  fill="#81C784"/>
      <rect x={6}  y={32} width={16} height={2}  fill={PD}/>
      <rect x={7}  y={33} width={14} height={1}  fill={PC}/>
      <Sparkle x={4}  y={12} c="#FFD0DA"/>
      <Sparkle x={23} y={18} c="#FFD0DA"/>
      <Sparkle x={4}  y={27} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 9. Protective Skin Balm ─────────────────────────────────
   Small flat round silver tin                                */
export function SkinBalmSprite({ size = 96 }: SpriteProps) {
  const SV = "#D8D8D8", SH = "#F0F0F0", SD = "#B0B0B0", SK = "#909090";
  const W  = "#FFFFFF";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      <rect x={4}  y={9}  width={20} height={1} fill={SH}/>
      <rect x={3}  y={10} width={22} height={5} fill={SH}/>
      <rect x={3}  y={10} width={4}  height={5} fill={W}/>
      <rect x={21} y={10} width={4}  height={5} fill={SD}/>
      <rect x={4}  y={14} width={20} height={1} fill={SD}/>
      <rect x={3}  y={15} width={22} height={2} fill={SK}/>
      <rect x={3}  y={17} width={22} height={10} fill={SV}/>
      <rect x={3}  y={17} width={3}  height={10} fill={SH}/>
      <rect x={22} y={17} width={3}  height={10} fill={SD}/>
      <rect x={4}  y={19} width={20} height={6}  fill={W}/>
      <rect x={13} y={20} width={2}  height={1}  fill={SK}/>
      <rect x={12} y={21} width={4}  height={2}  fill={SK}/>
      <rect x={13} y={23} width={2}  height={1}  fill={SK}/>
      <rect x={3}  y={27} width={22} height={2} fill={SK}/>
      <rect x={4}  y={28} width={20} height={1} fill="#707070"/>
      <rect x={5}  y={29} width={18} height={1} fill={SD}/>
      <Sparkle x={1}  y={12} c="#EEEEEE"/>
      <Sparkle x={26} y={19} c="#EEEEEE"/>
      <Sparkle x={1}  y={25} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 10. Acne Spot Patches ───────────────────────────────────
   Clear flat packet showing a grid of hydrocolloid dots      */
export function AcnePatchesSprite({ size = 96 }: SpriteProps) {
  const WP = "#F8F8F8", WS = "#EEEEEE", WD = "#D8D8D8";
  const PT = "#B8D4F8", PH = "#D4E8FC";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      <rect x={3}  y={5}  width={22} height={1} fill={WD}/>
      <rect x={2}  y={6}  width={24} height={24} fill={WP}/>
      <rect x={3}  y={30} width={22} height={1} fill={WD}/>
      <rect x={3}  y={6}  width={3}  height={24} fill="#FFFFFF"/>
      <rect x={22} y={7}  width={3}  height={22} fill={WD}/>
      <rect x={3}  y={6}  width={22} height={3}  fill="#F8E8F0"/>
      <rect x={5}  y={11} width={4}  height={4}  fill={PT}/>
      <rect x={5}  y={11} width={1}  height={4}  fill={PH}/>
      <rect x={5}  y={11} width={4}  height={1}  fill={PH}/>
      <rect x={11} y={11} width={4}  height={4}  fill={PT}/>
      <rect x={11} y={11} width={1}  height={4}  fill={PH}/>
      <rect x={11} y={11} width={4}  height={1}  fill={PH}/>
      <rect x={17} y={11} width={4}  height={4}  fill={PT}/>
      <rect x={17} y={11} width={1}  height={4}  fill={PH}/>
      <rect x={17} y={11} width={4}  height={1}  fill={PH}/>
      <rect x={5}  y={17} width={4}  height={4}  fill={PT}/>
      <rect x={5}  y={17} width={1}  height={4}  fill={PH}/>
      <rect x={5}  y={17} width={4}  height={1}  fill={PH}/>
      <rect x={11} y={17} width={4}  height={4}  fill={PT}/>
      <rect x={11} y={17} width={1}  height={4}  fill={PH}/>
      <rect x={11} y={17} width={4}  height={1}  fill={PH}/>
      <rect x={17} y={17} width={4}  height={4}  fill={PT}/>
      <rect x={17} y={17} width={1}  height={4}  fill={PH}/>
      <rect x={17} y={17} width={4}  height={1}  fill={PH}/>
      <rect x={5}  y={23} width={4}  height={4}  fill={PT}/>
      <rect x={5}  y={23} width={1}  height={4}  fill={PH}/>
      <rect x={5}  y={23} width={4}  height={1}  fill={PH}/>
      <rect x={11} y={23} width={4}  height={4}  fill={PT}/>
      <rect x={11} y={23} width={1}  height={4}  fill={PH}/>
      <rect x={11} y={23} width={4}  height={1}  fill={PH}/>
      <rect x={2}  y={30} width={24} height={2}  fill={WD}/>
      <Sparkle x={1}  y={9}  c="#E8F4FC"/>
      <Sparkle x={26} y={15} c="#E8F4FC"/>
      <Sparkle x={1}  y={26} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 11. Vitamin C Brightening Serum ────────────────────────
   Amber/orange square dropper bottle with white label        */
export function VitaminCSerumSprite({ size = 96 }: SpriteProps) {
  const OR = "#FF8F00", OH = "#FFB300", OD = "#E65100", OL = "#FFE082";
  const WW = "#FFFFFF", WS = "#F5F5F5";
  const LB = "#FFF8E1";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      <rect x={12} y={0} width={4}  height={1} fill={WW}/>
      <rect x={11} y={1} width={6}  height={2} fill={WW}/>
      <rect x={11} y={1} width={1}  height={2} fill={WS}/>
      <rect x={16} y={1} width={1}  height={2} fill={WS}/>
      <rect x={11} y={3} width={6}  height={4} fill={WW}/>
      <rect x={11} y={3} width={1}  height={4} fill={WS}/>
      <rect x={12} y={7} width={4}  height={2} fill={WS}/>
      <rect x={13} y={7} width={2}  height={2} fill={WW}/>
      <rect x={8}  y={9} width={12} height={1} fill={OH}/>
      <rect x={7}  y={10} width={14} height={1} fill={OR}/>
      <rect x={6}  y={11} width={16} height={20} fill={OR}/>
      <rect x={7}  y={31} width={14} height={1} fill={OD}/>
      <rect x={6}  y={11} width={2}  height={20} fill={OH}/>
      <rect x={6}  y={11} width={1}  height={20} fill={OL}/>
      <rect x={20} y={12} width={2}  height={18} fill={OD}/>
      <rect x={7}  y={15} width={14} height={12} fill={LB}/>
      <rect x={7}  y={15} width={14} height={1}  fill={WS}/>
      <rect x={7}  y={26} width={14} height={1}  fill={WS}/>
      <rect x={11} y={17} width={6}  height={1}  fill={OR}/>
      <rect x={11} y={18} width={2}  height={1}  fill={OR}/>
      <rect x={11} y={19} width={6}  height={1}  fill={OR}/>
      <rect x={11} y={20} width={2}  height={1}  fill={OR}/>
      <rect x={11} y={21} width={6}  height={1}  fill={OR}/>
      <rect x={18} y={18} width={1}  height={1}  fill={OL}/>
      <rect x={9}  y={23} width={1}  height={1}  fill={OL}/>
      <rect x={6}  y={32} width={16} height={2}  fill={OH}/>
      <rect x={7}  y={33} width={14} height={1}  fill={OD}/>
      <Sparkle x={4}  y={14} c="#FFE082"/>
      <Sparkle x={24} y={20} c="#FFE082"/>
      <Sparkle x={4}  y={28} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 12. Hydrating Facial Mist ───────────────────────────────
   Slim pink spray bottle with press-down nozzle              */
export function FacialMistSprite({ size = 96 }: SpriteProps) {
  const PK = "#F48FB1", PH = "#F8BBD9", PD = "#C2185B", PM = "#E91E63";
  const W  = "#FFFFFF", WS = "#FCE4EC";
  const GP = "#D0D0D0";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      <rect x={9}  y={0} width={8}  height={1} fill={GP}/>
      <rect x={8}  y={1} width={10} height={3} fill={GP}/>
      <rect x={8}  y={1} width={2}  height={3} fill={W}/>
      <rect x={16} y={1} width={2}  height={3} fill="#B0B0B0"/>
      <rect x={18} y={2} width={4}  height={1} fill={GP}/>
      <rect x={20} y={1} width={2}  height={1} fill={GP}/>
      <rect x={10} y={4} width={8}  height={2} fill={WS}/>
      <rect x={11} y={4} width={6}  height={2} fill={W}/>
      <rect x={9}  y={6}  width={10} height={26} fill={PK}/>
      <rect x={9}  y={6}  width={2}  height={26} fill={PH}/>
      <rect x={9}  y={6}  width={1}  height={26} fill="#FDD0E0"/>
      <rect x={17} y={7}  width={2}  height={24} fill={PD}/>
      <rect x={10} y={12} width={8}  height={12} fill={W}/>
      <rect x={10} y={12} width={8}  height={1}  fill={WS}/>
      <rect x={10} y={23} width={8}  height={1}  fill={WS}/>
      <rect x={13} y={14} width={2}  height={2}  fill={PM}/>
      <rect x={12} y={16} width={4}  height={1}  fill={PM}/>
      <rect x={11} y={18} width={1}  height={1}  fill={PM}/>
      <rect x={14} y={18} width={2}  height={1}  fill={PM}/>
      <rect x={9}  y={32} width={10} height={2}  fill={PD}/>
      <rect x={10} y={33} width={8}  height={1}  fill="#9C0040"/>
      <Sparkle x={6}  y={9}  c="#F8BBD9"/>
      <Sparkle x={21} y={17} c="#F8BBD9"/>
      <Sparkle x={6}  y={26} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 13. Under-Eye Gel Patches ───────────────────────────────
   Flat lavender packet with crescent eye patch windows       */
export function EyePatchesSprite({ size = 96 }: SpriteProps) {
  const PV = "#CE93D8", PH = "#E1BEE7", PD = "#8E24AA";
  const LB = "#B3E5FC", LH = "#E1F5FE";
  const WW = "#FFFFFF";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      <rect x={2}  y={5}  width={24} height={1} fill={PV}/>
      <rect x={1}  y={6}  width={26} height={24} fill={PV}/>
      <rect x={2}  y={30} width={24} height={1} fill={PD}/>
      <rect x={2}  y={6}  width={3}  height={24} fill={PH}/>
      <rect x={23} y={7}  width={3}  height={22} fill={PD}/>
      <rect x={2}  y={6}  width={24} height={2}  fill={PH}/>
      <rect x={3}  y={8}  width={22} height={5}  fill="#F3E5F5"/>
      <rect x={3}  y={15} width={10} height={6}  fill={LB}/>
      <rect x={3}  y={15} width={2}  height={6}  fill={LH}/>
      <rect x={3}  y={15} width={10} height={1}  fill={LH}/>
      <rect x={4}  y={20} width={8}  height={1}  fill={PV}/>
      <rect x={5}  y={21} width={6}  height={1}  fill={PV}/>
      <rect x={15} y={15} width={10} height={6}  fill={LB}/>
      <rect x={15} y={15} width={2}  height={6}  fill={LH}/>
      <rect x={15} y={15} width={10} height={1}  fill={LH}/>
      <rect x={16} y={20} width={8}  height={1}  fill={PV}/>
      <rect x={17} y={21} width={6}  height={1}  fill={PV}/>
      <rect x={8}  y={17} width={1}  height={1}  fill={WW}/>
      <rect x={20} y={17} width={1}  height={1}  fill={WW}/>
      <rect x={2}  y={24} width={24} height={4}  fill={PV}/>
      <rect x={2}  y={30} width={24} height={2}  fill={PD}/>
      <rect x={3}  y={31} width={22} height={1}  fill="#6A0090"/>
      <Sparkle x={0}  y={10} c="#E1BEE7"/>
      <Sparkle x={27} y={18} c="#E1BEE7"/>
      <Sparkle x={0}  y={26} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 14. Gentle Foam Cleanser ────────────────────────────────
   Wide pale-blue foaming pump bottle with bubble label art   */
export function FoamCleanserSprite({ size = 96 }: SpriteProps) {
  const BU = "#BBDEFB", BH = "#E3F2FD", BD = "#90CAF9", BC = "#1565C0";
  const W  = "#FFFFFF", WS = "#E8F4FB";
  const PG = "#90A0B0";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      <rect x={12} y={0} width={2}  height={1}  fill={BH}/>
      <rect x={10} y={1} width={2}  height={1}  fill={BH}/>
      <rect x={15} y={1} width={2}  height={1}  fill={BH}/>
      <rect x={11} y={2} width={1}  height={1}  fill={BU}/>
      <rect x={14} y={2} width={2}  height={1}  fill={BU}/>
      <rect x={10} y={3} width={7}  height={2}  fill={PG}/>
      <rect x={13} y={5} width={2}  height={3}  fill={PG}/>
      <rect x={9}  y={7} width={10} height={1}  fill={BD}/>
      <rect x={8}  y={8} width={12} height={3}  fill={BD}/>
      <rect x={8}  y={8} width={3}  height={3}  fill={BH}/>
      <rect x={18} y={8} width={2}  height={3}  fill={BC}/>
      <rect x={9}  y={10} width={10} height={1} fill={BC}/>
      <rect x={7}  y={11} width={14} height={1} fill={BH}/>
      <rect x={5}  y={12} width={18} height={20} fill={BU}/>
      <rect x={5}  y={12} width={3}  height={20} fill={BH}/>
      <rect x={5}  y={12} width={1}  height={20} fill={W}/>
      <rect x={21} y={13} width={2}  height={18} fill={BD}/>
      <rect x={6}  y={16} width={14} height={12} fill={W}/>
      <rect x={6}  y={16} width={14} height={1}  fill={WS}/>
      <rect x={6}  y={27} width={14} height={1}  fill={WS}/>
      <rect x={10} y={19} width={3}  height={3}  fill={BU}/>
      <rect x={10} y={19} width={1}  height={3}  fill={BH}/>
      <rect x={15} y={20} width={2}  height={2}  fill={BU}/>
      <rect x={9}  y={22} width={2}  height={2}  fill={BD}/>
      <rect x={5}  y={32} width={18} height={2}  fill={BD}/>
      <rect x={6}  y={33} width={16} height={1}  fill={BC}/>
      <Sparkle x={3}  y={13} c="#E3F2FD"/>
      <Sparkle x={24} y={19} c="#E3F2FD"/>
      <Sparkle x={3}  y={28} c="#FFFFFF"/>
    </svg>
  );
}

/* ── 15. Mineral Sunscreen SPF 30 ────────────────────────────
   White squeezable tube with soft lavender accent band       */
export function MineralSunscreenSprite({ size = 96 }: SpriteProps) {
  const WW = "#F8F8F8", WH = "#FFFFFF", WS = "#DCDCDC", WD = "#C0C0C0";
  const LV = "#CE93D8", LH = "#E1BEE7", LD = "#8E24AA";
  const GC = "#BDBDBD", GCH = "#E0E0E0";
  return (
    <svg width={size} height={size} viewBox="0 0 28 36" shapeRendering="crispEdges">
      <rect x={10} y={0} width={8}  height={1} fill={GC}/>
      <rect x={9}  y={1} width={10} height={3} fill={GC}/>
      <rect x={9}  y={1} width={2}  height={3} fill={GCH}/>
      <rect x={17} y={1} width={2}  height={3} fill="#A0A0A0"/>
      <rect x={10} y={3} width={8}  height={1} fill="#A0A0A0"/>
      <rect x={9}  y={4} width={10} height={1} fill={WS}/>
      <rect x={8}  y={5}  width={12} height={24} fill={WW}/>
      <rect x={8}  y={5}  width={2}  height={24} fill={WH}/>
      <rect x={18} y={6}  width={2}  height={22} fill={WS}/>
      <rect x={19} y={7}  width={1}  height={20} fill={WD}/>
      <rect x={9}  y={9}  width={10} height={1} fill={LH}/>
      <rect x={9}  y={10} width={10} height={3} fill={LV}/>
      <rect x={10} y={10} width={2}  height={3} fill={LH}/>
      <rect x={9}  y={13} width={10} height={1} fill={LD}/>
      <rect x={9}  y={14} width={10} height={8}  fill={WH}/>
      <rect x={13} y={15} width={2}  height={1}  fill="#FFD600"/>
      <rect x={12} y={16} width={4}  height={3}  fill="#FFF176"/>
      <rect x={11} y={17} width={1}  height={1}  fill="#FFD600"/>
      <rect x={16} y={17} width={1}  height={1}  fill="#FFD600"/>
      <rect x={13} y={19} width={2}  height={1}  fill="#FFD600"/>
      <rect x={8}  y={22} width={12} height={5}  fill={WW}/>
      <rect x={8}  y={22} width={2}  height={5}  fill={WH}/>
      <rect x={18} y={22} width={2}  height={5}  fill={WS}/>
      <rect x={8}  y={27} width={12} height={3}  fill={LV}/>
      <rect x={8}  y={27} width={2}  height={3}  fill={LH}/>
      <rect x={18} y={27} width={2}  height={3}  fill={LD}/>
      <rect x={9}  y={29} width={10} height={2}  fill={LD}/>
      <rect x={10} y={30} width={8}  height={2}  fill={LD}/>
      <rect x={11} y={31} width={6}  height={1}  fill="#600090"/>
      <Sparkle x={6}  y={8}  c="#E1BEE7"/>
      <Sparkle x={22} y={15} c="#FFF9C4"/>
      <Sparkle x={6}  y={23} c="#FFFFFF"/>
    </svg>
  );
}

/* ── Sprite registry ─────────────────────────────────────────*/
export type SpriteId =
  | "cetaphil-cleanser"
  | "axisy-toner"
  | "herbivore-bakuchiol"
  | "cerave-moisturizer"
  | "cetaphil-spf"
  | "axisy-eye-serum"
  | "purederm-mask"
  | "hydrating-lotion"
  | "skin-balm"
  | "acne-patches"
  | "vitamin-c-serum"
  | "facial-mist"
  | "eye-patches"
  | "foam-cleanser"
  | "mineral-sunscreen";

const SPRITE_COMPONENTS: Record<SpriteId, React.ComponentType<SpriteProps>> = {
  "cetaphil-cleanser":    CetaphilCleanserSprite,
  "axisy-toner":          AxisYTonerSprite,
  "herbivore-bakuchiol":  HerbivoreBakuchiolSprite,
  "cerave-moisturizer":   CeraVeMoisturizerSprite,
  "cetaphil-spf":         CetaphilSPFSprite,
  "axisy-eye-serum":      AxisYEyeSerumSprite,
  "purederm-mask":        PuredermMaskSprite,
  "hydrating-lotion":     HydratingLotionSprite,
  "skin-balm":            SkinBalmSprite,
  "acne-patches":         AcnePatchesSprite,
  "vitamin-c-serum":      VitaminCSerumSprite,
  "facial-mist":          FacialMistSprite,
  "eye-patches":          EyePatchesSprite,
  "foam-cleanser":        FoamCleanserSprite,
  "mineral-sunscreen":    MineralSunscreenSprite,
};

interface ProductSpriteProps {
  spriteId: string;
  size?: number;
  className?: string;
}

export function ProductSprite({ spriteId, size = 96, className = "" }: ProductSpriteProps) {
  const Component = SPRITE_COMPONENTS[spriteId as SpriteId];
  if (!Component) return null;
  return (
    <span className={`inline-block ${className}`} style={{ imageRendering: "pixelated" }}>
      <Component size={size} />
    </span>
  );
}
