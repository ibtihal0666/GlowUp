import { useTheme } from "./ThemeProvider";

const HeartIcon = ({ color, size }: { color: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 8 7" shapeRendering="crispEdges">
    <rect x="1" y="0" width="2" height="1" fill={color} />
    <rect x="5" y="0" width="2" height="1" fill={color} />
    <rect x="0" y="1" width="8" height="3" fill={color} />
    <rect x="1" y="4" width="6" height="1" fill={color} />
    <rect x="2" y="5" width="4" height="1" fill={color} />
    <rect x="3" y="6" width="2" height="1" fill={color} />
  </svg>
);

const StarIcon = ({ color, size }: { color: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" shapeRendering="crispEdges">
    <rect x="3" y="0" width="2" height="1" fill={color} />
    <rect x="3" y="1" width="2" height="1" fill={color} />
    <rect x="1" y="2" width="6" height="1" fill={color} />
    <rect x="0" y="3" width="8" height="2" fill={color} />
    <rect x="1" y="5" width="6" height="1" fill={color} />
    <rect x="1" y="6" width="2" height="1" fill={color} />
    <rect x="5" y="6" width="2" height="1" fill={color} />
  </svg>
);

const CatIcon = ({ color, size }: { color: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" shapeRendering="crispEdges">
    <rect x="0" y="0" width="2" height="2" fill={color} />
    <rect x="6" y="0" width="2" height="2" fill={color} />
    <rect x="0" y="2" width="8" height="4" fill={color} />
    <rect x="1" y="3" width="1" height="1" fill="white" />
    <rect x="6" y="3" width="1" height="1" fill="white" />
    <rect x="3" y="4" width="2" height="1" fill="white" />
    <rect x="1" y="6" width="2" height="2" fill={color} />
    <rect x="5" y="6" width="2" height="2" fill={color} />
  </svg>
);

const FlowerIcon = ({ color, size }: { color: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" shapeRendering="crispEdges">
    <rect x="2" y="0" width="4" height="2" fill={color} />
    <rect x="0" y="2" width="8" height="4" fill={color} />
    <rect x="2" y="6" width="4" height="2" fill={color} />
    <rect x="3" y="3" width="2" height="2" fill="white" />
    <rect x="0" y="1" width="2" height="2" fill={color} />
    <rect x="6" y="1" width="2" height="2" fill={color} />
    <rect x="0" y="5" width="2" height="2" fill={color} />
    <rect x="6" y="5" width="2" height="2" fill={color} />
  </svg>
);

const ButterflyIcon = ({ color, size }: { color: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" shapeRendering="crispEdges">
    <rect x="0" y="0" width="3" height="3" fill={color} />
    <rect x="5" y="0" width="3" height="3" fill={color} />
    <rect x="0" y="3" width="3" height="3" fill={color} />
    <rect x="5" y="3" width="3" height="3" fill={color} />
    <rect x="3" y="1" width="2" height="6" fill="rgba(0,0,0,0.2)" />
    <rect x="1" y="1" width="2" height="1" fill="white" />
    <rect x="5" y="1" width="2" height="1" fill="white" />
  </svg>
);

const MoonIcon = ({ color, size }: { color: string; size: number }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" shapeRendering="crispEdges">
    <rect x="2" y="0" width="4" height="1" fill={color} />
    <rect x="1" y="1" width="5" height="1" fill={color} />
    <rect x="0" y="2" width="5" height="1" fill={color} />
    <rect x="0" y="3" width="4" height="1" fill={color} />
    <rect x="0" y="4" width="4" height="1" fill={color} />
    <rect x="0" y="5" width="5" height="1" fill={color} />
    <rect x="1" y="6" width="5" height="1" fill={color} />
    <rect x="2" y="7" width="4" height="1" fill={color} />
  </svg>
);

const ICONS = [HeartIcon, StarIcon, CatIcon, FlowerIcon, ButterflyIcon, MoonIcon] as const;

interface FloatingEl {
  id: number;
  Icon: (typeof ICONS)[number];
  left: number;
  animClass: string;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const ELEMENTS: FloatingEl[] = [
  { id: 1,  Icon: HeartIcon,     left: 4,  animClass: "float-a", delay: 0,    duration: 14, size: 20, opacity: 0.5 },
  { id: 2,  Icon: StarIcon,      left: 12, animClass: "float-b", delay: 1.5,  duration: 18, size: 16, opacity: 0.4 },
  { id: 3,  Icon: CatIcon,       left: 22, animClass: "float-a", delay: 3,    duration: 20, size: 24, opacity: 0.45 },
  { id: 4,  Icon: FlowerIcon,    left: 33, animClass: "float-c", delay: 0.5,  duration: 16, size: 18, opacity: 0.4 },
  { id: 5,  Icon: HeartIcon,     left: 45, animClass: "float-b", delay: 4,    duration: 13, size: 14, opacity: 0.55 },
  { id: 6,  Icon: ButterflyIcon, left: 55, animClass: "float-a", delay: 2,    duration: 22, size: 22, opacity: 0.4 },
  { id: 7,  Icon: StarIcon,      left: 65, animClass: "float-c", delay: 6,    duration: 17, size: 20, opacity: 0.45 },
  { id: 8,  Icon: MoonIcon,      left: 74, animClass: "float-b", delay: 1,    duration: 19, size: 18, opacity: 0.4 },
  { id: 9,  Icon: FlowerIcon,    left: 82, animClass: "float-a", delay: 5,    duration: 15, size: 16, opacity: 0.5 },
  { id: 10, Icon: CatIcon,       left: 90, animClass: "float-c", delay: 2.5,  duration: 21, size: 20, opacity: 0.4 },
  { id: 11, Icon: HeartIcon,     left: 8,  animClass: "float-c", delay: 7,    duration: 12, size: 18, opacity: 0.35 },
  { id: 12, Icon: StarIcon,      left: 50, animClass: "float-a", delay: 8,    duration: 16, size: 14, opacity: 0.45 },
  { id: 13, Icon: ButterflyIcon, left: 30, animClass: "float-b", delay: 9,    duration: 18, size: 20, opacity: 0.4 },
  { id: 14, Icon: MoonIcon,      left: 70, animClass: "float-c", delay: 3.5,  duration: 20, size: 16, opacity: 0.35 },
];

export function PixelBackground() {
  const { theme } = useTheme();

  const pinkColors  = ["#FF9EB5", "#FFB6C1", "#FF69B4", "#FFAEC9", "#FFC0CB", "#E75480"];
  const purpleColors = ["#C39BD3", "#D4B4E0", "#BA8FD0", "#9B59B6", "#D7BDE2", "#A569BD"];
  const colors = theme === "pink" ? pinkColors : purpleColors;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {ELEMENTS.map((el) => {
        const color = colors[el.id % colors.length];
        return (
          <div
            key={el.id}
            className={`absolute bottom-0 ${el.animClass}`}
            style={{
              left: `${el.left}%`,
              opacity: el.opacity,
              animationDuration: `${el.duration}s`,
              animationDelay: `${el.delay}s`,
              animationFillMode: "both",
              imageRendering: "pixelated",
            }}
          >
            <el.Icon color={color} size={el.size} />
          </div>
        );
      })}
    </div>
  );
}
