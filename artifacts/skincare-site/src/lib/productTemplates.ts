import { Category } from "./types";

export interface ProductTemplate {
  id: string;
  name: string;
  brand: string;
  category: Category;
  pixelArt: string[][];
  spriteId: string;
}

const E = ""; // transparent

/* ─── 1. Cetaphil Daily Facial Cleanser ─────────────────────────────────
   White pump bottle, blue cap, green+blue oval logo                      */
const cetaphilCleanser: string[][] = (() => {
  const W  = "#F0F0F0", WH = "#FFFFFF", WS = "#D8D8D8";
  const BC = "#1565C0", BL = "#1E88E5", BH = "#64B5F6";
  const GR = "#43A047";
  const PG = "#9E9E9E", PD = "#757575";
  const BS = "#BDBDBD";
  return [
    [E,  E,  E,  E,  E,  E,  PG, PD, PG, E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  E,  PG, E,  E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  WS, WS, WS, WS, WS, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  BC, BC, BC, BC, BC, BC, BC, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  BC, BH, BC, BC, BC, BC, BC, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, W,  W,  W,  W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, GR, GR, GR, W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, BL, BL, BL, W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, BH, BL, BL, W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, GR, GR, GR, W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, W,  W,  W,  W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, W,  W,  W,  W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, W,  W,  W,  W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, W,  W,  W,  W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  W,  W,  W,  W,  W,  WS, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  BS, BS, BS, BS, BS, E,  E,  E,  E,  E,  E ],
  ];
})();

/* ─── 2. AXIS-Y Daily Purifying Treatment Toner ─────────────────────────
   Tall dark-teal glass bottle, cream label, white screw cap              */
const axisYToner: string[][] = (() => {
  const W  = "#F5F5F5", WS = "#E0E0E0";
  const TG = "#1B5E20", TL = "#2E7D32", TH = "#388E3C";
  const TB = "#0D3318";
  const CR = "#FFFDE7", CS = "#F5F0CF";
  return [
    [E,  E,  E,  E,  E,  W,  WS, WS, W,  E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  W,  W,  W,  W,  E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  TG, TL, TL, TG, E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, TL, TH, TH, TL, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, TL, TH, TH, TL, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, CR, CR, CR, CR, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, CR, CS, CR, CR, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, CR, CR, CR, CR, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, CR, CR, CR, CR, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, CR, CS, CR, CR, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, TL, TH, TH, TL, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, TL, TH, TH, TL, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TG, TL, TL, TL, TL, TG, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TB, TB, TB, TB, TB, TB, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TB, TB, TB, TB, TB, TB, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  TB, TB, TB, TB, TB, TB, E,  E,  E,  E,  E,  E ],
  ];
})();

/* ─── 3. Herbivore Bakuchiol Serum ──────────────────────────────────────
   Square dropper bottle, purple/lavender liquid, white label             */
const herbivoreBakuchiol: string[][] = (() => {
  const W  = "#F5F5F5", WH = "#FFFFFF";
  const PD = "#6A1B9A", PM = "#8E24AA", PL = "#BA68C8", PH = "#E1BEE7";
  const SL = "#E8EAF6"; // label - slightly tinted white
  return [
    [E,  E,  E,  E,  E,  E,  WH, WH, WH, E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  WH, W,  W,  W,  WH, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  WH, W,  W,  W,  WH, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  W,  W,  W,  E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PM, PM, PM, PM, PM, PM, PM, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PL, PM, PM, PM, PM, PM, PD, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PL, SL, SL, SL, SL, SL, PD, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PL, SL, SL, SL, SL, SL, PD, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PL, SL, SL, SL, SL, SL, PD, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PL, SL, SL, SL, SL, SL, PD, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PL, PM, PM, PM, PM, PM, PD, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PL, PH, PM, PM, PM, PM, PD, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PL, PM, PM, PM, PM, PM, PD, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PL, PH, PM, PM, PM, PM, PD, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  PM, PM, PM, PM, PM, PM, PM, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  PD, PD, PD, PD, PD, E,  E,  E,  E,  E,  E ],
  ];
})();

/* ─── 4. CeraVe Moisturizing Cream ─────────────────────────────────────
   Wide flat tub/jar, white with navy-blue CeraVe branding               */
const ceraVeMoisturizer: string[][] = (() => {
  const W  = "#F2F2F2", WH = "#FFFFFF", WS = "#DCDCDC";
  const NB = "#0D2E6A", BL = "#1565C0", BH = "#4285F4";
  const RIM = "#C8C8C8";
  return [
    [E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  W,  WH, WH, WH, WH, WH, WH, WH, WH, WH, W,  E,  E,  E ],
    [E,  W,  WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WS, E,  E ],
    [E,  W,  WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WS, E,  E ],
    [E,  E,  RIM,RIM,RIM,RIM,RIM,RIM,RIM,RIM,RIM,RIM,RIM, E,  E,  E ],
    [E,  W,  WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WS, W,  E,  E ],
    [E,  W,  WH, NB, NB, NB, NB, NB, NB, NB, NB, W,  WS, W,  E,  E ],
    [E,  W,  WH, BL, BH, BL, BL, BL, BL, BL, BL, W,  WS, W,  E,  E ],
    [E,  W,  WH, NB, NB, NB, NB, NB, NB, NB, NB, W,  WS, W,  E,  E ],
    [E,  W,  WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WS, W,  E,  E ],
    [E,  W,  WH, WH, WH, WH, WH, WH, WH, WH, WH, WH, WS, W,  E,  E ],
    [E,  E,  RIM,RIM,RIM,RIM,RIM,RIM,RIM,RIM,RIM,RIM,RIM, E,  E,  E ],
    [E,  E,  W,  WS, WS, WS, WS, WS, WS, WS, WS, WS, W,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E ],
  ];
})();

/* ─── 5. Cetaphil Sun SPF 50 Lotion ────────────────────────────────────
   White tube with yellow cap, sun/Cetaphil branding                      */
const cetaphilSPF: string[][] = (() => {
  const W  = "#F2F2F2", WH = "#FFFFFF", WS = "#DCDCDC";
  const GC = "#BDBDBD", GCH = "#E0E0E0";
  const YB = "#FFD600", YD = "#F9A825", YH = "#FFF176";
  const GR = "#558B2F", GRL = "#7CB342";
  return [
    [E,  E,  E,  E,  E,  GC, GCH,GC, GC, GC, GC, E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  GC, GCH,GCH,GC, GC, GC, GC, GC, E,  E,  E,  E ],
    [E,  E,  E,  E,  GC, GCH,GCH,GC, GC, GC, GC, GC, E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, WH, W,  W,  W,  W,  WS, E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, WH, W,  W,  W,  W,  WS, E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, GRL,GRL,GRL,GRL,W,  WS, E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, GR, GR, GR, GR, W,  WS, E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, YH, YB, YB, YB, W,  WS, E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, YB, YD, YB, YB, W,  WS, E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, YB, YB, YB, YB, W,  WS, E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, WH, W,  W,  W,  W,  WS, E,  E,  E,  E ],
    [E,  E,  E,  E,  W,  WH, WH, W,  W,  W,  W,  WS, E,  E,  E,  E ],
    [E,  E,  E,  E,  YB, YH, YB, YB, YB, YB, YB, YB, E,  E,  E,  E ],
    [E,  E,  E,  E,  YD, YB, YD, YD, YD, YD, YD, YD, E,  E,  E,  E ],
    [E,  E,  E,  E,  YD, YB, YD, YD, YD, YD, YD, YD, E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  YD, YD, YD, YD, YD, YD, E,  E,  E,  E,  E ],
  ];
})();

/* ─── 6. AXIS-Y Vegan Collagen Eye Serum ───────────────────────────────
   Slim roller-ball pen shape, cream body, green cap, silver ball         */
const axisYEyeSerum: string[][] = (() => {
  const SH = "#E0E0E0", SM = "#BDBDBD", SD = "#9E9E9E";
  const WH = "#FFFFFF";
  const GR = "#2E7D32", GL = "#43A047", GD = "#1B5E20";
  const CR = "#FFFDE7", CH = "#FFFFFF", CD = "#F5F0CF";
  return [
    [E,  E,  E,  E,  E,  E,  E,  SH, SH, SD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  SH, SM, SM, SD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  WH, WH, WH, WH, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  GR, GL, GL, GD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  GR, GL, GL, GD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, CR, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, CR, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, GR, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, GL, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, CR, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, CR, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, CR, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, CR, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, CR, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  CH, CR, CR, CD, E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  GD, GD, GD, GD, E,  E,  E,  E,  E,  E ],
  ];
})();

/* ─── 7. Purederm Deep Purifying Pink O2 Bubble Mask ───────────────────
   Flat foil packet, periwinkle-blue packet with pink sheet mask visible  */
const puredermMask: string[][] = (() => {
  const BL = "#7986CB", BH = "#9FA8DA", BD = "#5C6BC0";
  const PK = "#F48FB1", PH = "#FBBCCE", PD = "#E06090";
  const OR = "#FF8F00";
  return [
    [E,  BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, E,  E ],
    [E,  BL, BH, BH, BH, BH, BH, BH, BH, BH, BH, BH, BH, BD, E,  E ],
    [E,  BL, BH, OR, OR, OR, BH, BH, BH, BH, BH, BH, BH, BD, E,  E ],
    [E,  BL, BH, PK, PK, PK, PK, PK, PK, BH, BH, BH, BH, BD, E,  E ],
    [E,  BL, BH, PK, PH, PK, PK, PK, PK, BH, BH, BH, BH, BD, E,  E ],
    [E,  BL, BH, PD, PK, PK, PK, PK, PK, BH, BH, BH, BH, BD, E,  E ],
    [E,  BL, PK, PK, PK, PK, PK, PK, PK, PK, PK, BH, BH, BD, E,  E ],
    [E,  BL, PK, PK, PH, PK, PK, PK, PK, PK, PK, BH, BH, BD, E,  E ],
    [E,  BL, PK, PK, PK, PK, PK, PK, PK, PK, PK, BH, BH, BD, E,  E ],
    [E,  BL, BH, PD, PK, PK, PK, PK, PK, BH, BH, BH, BH, BD, E,  E ],
    [E,  BL, BH, PK, PK, PK, PK, PK, PK, BH, BH, BH, BH, BD, E,  E ],
    [E,  BL, BH, BH, BH, BH, BH, BH, BH, BH, BH, BH, BH, BD, E,  E ],
    [E,  BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, E,  E ],
    [E,  E,  BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, BL, E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E ],
    [E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E,  E ],
  ];
})();

/* ─── Exported template catalogue ───────────────────────────────────────*/
export const PRODUCT_TEMPLATES: ProductTemplate[] = [
  {
    id: "cetaphil-cleanser",
    spriteId: "cetaphil-cleanser",
    name: "Daily Facial Cleanser",
    brand: "Cetaphil",
    category: "Cleanser",
    pixelArt: cetaphilCleanser,
  },
  {
    id: "axisy-toner",
    spriteId: "axisy-toner",
    name: "Daily Purifying Treatment Toner",
    brand: "AXIS-Y",
    category: "Toner",
    pixelArt: axisYToner,
  },
  {
    id: "herbivore-bakuchiol",
    spriteId: "herbivore-bakuchiol",
    name: "Bakuchiol Retinol Alternative Serum",
    brand: "Herbivore",
    category: "Serum",
    pixelArt: herbivoreBakuchiol,
  },
  {
    id: "cerave-moisturizer",
    spriteId: "cerave-moisturizer",
    name: "Moisturizing Cream",
    brand: "CeraVe",
    category: "Moisturizer",
    pixelArt: ceraVeMoisturizer,
  },
  {
    id: "cetaphil-spf",
    spriteId: "cetaphil-spf",
    name: "Sun Ultra-Light Lotion SPF 50",
    brand: "Cetaphil",
    category: "SPF",
    pixelArt: cetaphilSPF,
  },
  {
    id: "axisy-eye-serum",
    spriteId: "axisy-eye-serum",
    name: "Vegan Collagen Eye Serum",
    brand: "AXIS-Y",
    category: "Eye Cream",
    pixelArt: axisYEyeSerum,
  },
  {
    id: "purederm-mask",
    spriteId: "purederm-mask",
    name: "Deep Purifying Pink O2 Bubble Mask",
    brand: "Purederm",
    category: "Mask",
    pixelArt: puredermMask,
  },
];
