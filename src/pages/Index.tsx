import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";
import { Sparkles } from "lucide-react";

const NAME = "Beautiful";

const Index = () => {
  const navigate = useNavigate();

  const handleEnter = () => {
    const colors = ["#98FF98", "#B0F2C2", "#ffffff", "#7CE3A8"];
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.6 },
      colors,
    });
    setTimeout(() => {
      confetti({ particleCount: 80, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 80, angle: 120, spread: 70, origin: { x: 1 }, colors });
    }, 250);
    setTimeout(() => navigate("/menu"), 800);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-hero">
      <FloatingShapes />
      <MusicToggle />
      <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/30 text-primary-deep text-sm font-medium mb-8 shadow-soft">
            <Sparkles className="h-4 w-4" />
            A little something special
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-deep leading-tight mb-6">
            Happy Birthday <br />
            <span className="bg-gradient-to-r from-primary-deep via-primary to-primary-deep bg-clip-text text-transparent">
              {NAME}
            </span>{" "}
            🎉
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-w-xl mx-auto mb-12">
            I made something special for you. Take a moment — it's all yours.
          </p>

          <Button
            onClick={handleEnter}
            size="lg"
            className="h-14 px-10 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow animate-glow-pulse hover:scale-105 transition-transform"
          >
            Enter ✨
          </Button>
        </div>

        <div className="absolute bottom-8 text-sm text-muted-foreground/70 animate-fade-in">
          Made with 💚 just for you
        </div>
      </main>
    </div>
  );
};

export default Index;
