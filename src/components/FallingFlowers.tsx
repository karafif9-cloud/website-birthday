import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type Petal = {
  left: string;
  delay: string;
  duration: string;
  size: number;
  drift: string;
  opacity: number;
  symbol: string;
};

const petals: Petal[] = [
  { left: "4%", delay: "0s", duration: "16s", size: 26, drift: "40px", opacity: 0.55, symbol: "🌸" },
  { left: "14%", delay: "3s", duration: "19s", size: 22, drift: "-30px", opacity: 0.48, symbol: "🌺" },
  { left: "24%", delay: "1s", duration: "14s", size: 24, drift: "25px", opacity: 0.52, symbol: "🌸" },
  { left: "34%", delay: "5s", duration: "21s", size: 20, drift: "-45px", opacity: 0.5, symbol: "🌼" },
  { left: "44%", delay: "2s", duration: "17s", size: 28, drift: "35px", opacity: 0.54, symbol: "🌸" },
  { left: "54%", delay: "7s", duration: "15s", size: 23, drift: "-20px", opacity: 0.47, symbol: "🌺" },
  { left: "64%", delay: "4s", duration: "20s", size: 25, drift: "50px", opacity: 0.56, symbol: "🌸" },
  { left: "74%", delay: "0.5s", duration: "18s", size: 21, drift: "-35px", opacity: 0.45, symbol: "🌼" },
  { left: "84%", delay: "6s", duration: "16s", size: 27, drift: "28px", opacity: 0.53, symbol: "🌸" },
  { left: "92%", delay: "8s", duration: "22s", size: 19, drift: "-25px", opacity: 0.44, symbol: "🌺" },
  { left: "8%", delay: "9s", duration: "23s", size: 24, drift: "32px", opacity: 0.49, symbol: "🌼" },
  { left: "48%", delay: "10s", duration: "19s", size: 22, drift: "-40px", opacity: 0.51, symbol: "🌸" },
  { left: "58%", delay: "11s", duration: "17s", size: 26, drift: "22px", opacity: 0.52, symbol: "🌺" },
  { left: "18%", delay: "12s", duration: "20s", size: 20, drift: "-28px", opacity: 0.46, symbol: "🌸" },
  { left: "78%", delay: "13s", duration: "18s", size: 24, drift: "38px", opacity: 0.55, symbol: "🌼" },
];

type FallingFlowersProps = {
  className?: string;
};

const FallingFlowers = ({ className }: FallingFlowersProps) => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 z-[1] overflow-hidden motion-reduce:hidden",
      className
    )}
    aria-hidden
  >
    {petals.map((p, i) => (
      <span
        key={i}
        className="absolute top-0 animate-fall select-none will-change-transform"
        style={
          {
            left: p.left,
            fontSize: p.size,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
            "--drift": p.drift,
          } as CSSProperties
        }
      >
        {p.symbol}
      </span>
    ))}
  </div>
);

export default FallingFlowers;
