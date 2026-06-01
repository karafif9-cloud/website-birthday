import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import FloatingShapes from "@/components/FloatingShapes";
import FallingFlowers from "@/components/FallingFlowers";
import MusicToggle from "@/components/MusicToggle";
import { Heart, Sparkles } from "lucide-react";

const NAME = "Safira";

const Index = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const handleOpen = () => {
    if (opened) return;
    setOpened(true);
    const colors = ["#F9CDD5", "#7A8450", "#d4a8b0", "#9aa86a"];
    setTimeout(() => {
      confetti({ particleCount: 120, spread: 90, origin: { y: 0.5 }, colors });
      confetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1 }, colors });
    }, 700);
    setTimeout(() => setLeaving(true), 2400);
    setTimeout(() => navigate("/menu"), 3000);
  };

  return (
    <div
      className={`group relative min-h-screen overflow-hidden bg-gradient-hero transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
    >
      <FloatingShapes />
      <FallingFlowers />
      <MusicToggle />

      <main className="relative z-10 min-h-screen flex flex-col items-center text-center px-6 pt-20 md:pt-24 pb-8">
        <h1 className="animate-fade-in text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-deep leading-tight tracking-tight mb-6 md:mb-10">
          Happy Birthday Safira
        </h1>

        <div className="flex flex-1 flex-col items-center justify-center w-full">
        <div className="animate-fade-in mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 text-primary-deep text-sm font-medium shadow-soft">
            <Sparkles className="h-4 w-4" />
            You've got mail
          </div>
        </div>

        {/* Envelope */}
        <button
          onClick={handleOpen}
          aria-label="Open birthday letter"
          className={`group relative outline-none transition-transform duration-500 ${
            opened ? "scale-110" : "hover:scale-[1.02]"
          }`}
          style={{ perspective: "1200px" }}
        >
          <div className="relative w-[300px] h-[200px] md:w-[380px] md:h-[250px]">
            {/* Envelope body */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#F9CDD5] via-[#f0b8c2] to-primary/25 shadow-glow border border-primary/30 transition-all duration-700 group-hover:shadow-[0_0_60px_hsl(351_80%_85%_/_0.35)]" />

            {/* Letter coming out */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-[88%] rounded-lg bg-gradient-to-b from-[#F9CDD5] via-secondary to-accent shadow-soft border border-primary/25 p-5 text-left transition-all duration-[1800ms] ease-out ${
                opened
                  ? "bottom-[40%] opacity-100 translate-y-[-60%]"
                  : "bottom-2 opacity-0"
              }`}
              style={{ zIndex: 1 }}
            >
              <p className="text-xs md:text-sm text-muted-foreground mb-1">My Dearest {NAME},</p>
              <p className="text-sm md:text-base font-semibold text-primary-deep flex items-center gap-1.5 tracking-wide">
                On Your Special Day
                <Heart className="h-4 w-4 fill-primary text-primary" />
              </p>
              <p className="text-[11px] md:text-xs text-muted-foreground mt-1 italic">
                With timeless love, warm wishes, and all my heart.
              </p>
              <div className="mt-3 flex items-center justify-between text-[10px] md:text-[11px] text-primary-deep/80">
                <span>sealed with love</span>
                <span>forever yours</span>
              </div>
            </div>

            {/* Envelope back pocket (front of envelope, covers letter bottom) */}
            <div
              className="absolute inset-x-0 bottom-0 h-[55%] rounded-b-xl bg-gradient-to-br from-primary/40 to-primary/60 border-t border-primary/40"
              style={{ zIndex: 2 }}
            />
            {/* Side flaps (triangular look) */}
            <div
              className="absolute inset-0 rounded-xl"
              style={{
                zIndex: 2,
                background:
                  "linear-gradient(135deg, transparent 49%, hsl(72 25% 42% / 0.2) 50%) bottom left / 50% 55% no-repeat, linear-gradient(225deg, transparent 49%, hsl(72 25% 42% / 0.2) 50%) bottom right / 50% 55% no-repeat",
              }}
            />

            {/* Envelope flap (top, opens) */}
            <div
              className="absolute top-0 left-0 w-full origin-top transition-transform duration-[1400ms] ease-in-out"
              style={{
                height: "55%",
                transformStyle: "preserve-3d",
                transform: opened ? "rotateX(-180deg)" : "rotateX(0deg)",
                zIndex: opened ? 0 : 3,
              }}
            >
              <div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(180deg, hsl(351 80% 89%) 0%, hsl(72 25% 42% / 0.85) 100%)",
                  clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  borderTopLeftRadius: "0.75rem",
                  borderTopRightRadius: "0.75rem",
                }}
              />
            </div>

            {/* Wax seal */}
            <div
              className={`absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-primary via-primary-deep to-primary-deep shadow-soft flex items-center justify-center text-primary-foreground text-xl transition-opacity duration-500 ${
                opened ? "opacity-0" : "opacity-100"
              }`}
              style={{ zIndex: 4 }}
            >
              <Heart className="h-6 w-6 md:h-7 md:w-7 fill-primary-foreground text-primary-foreground" />
            </div>
          </div>

          {/* Hint */}
          <p
            className={`mt-8 text-base md:text-lg text-primary-deep font-medium transition-opacity duration-300 ${
              opened ? "opacity-0" : "opacity-100 group-hover:animate-[glow-pulse_4.5s_ease-in-out_infinite]"
            }`}
          >
            Tap to open ✨
          </p>
        </button>

        <p className="mt-10 text-sm text-muted-foreground/70 animate-fade-in">
          Made with 💚 just for you
        </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
