import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";
import { Heart } from "lucide-react";

const message = {
  from: "From my heart",
  text: "Selamat ulang tahun, sayang. Terima kasih sudah hadir dengan segala hangatmu. Semoga hari-harimu selalu dipenuhi tawa, ketenangan, dan cinta yang tulus. Kamu berharga, hari ini dan seterusnya. 💚",
};

const Messages = () => {
  const [opened, setOpened] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!opened) {
      setTyped("");
      return;
    }

    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(message.text.slice(0, i));
      if (i >= message.text.length) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [opened]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <FloatingShapes />
      <Navbar />
      <MusicToggle />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-deep mb-3">Messages for You 💌</h1>
          <p className="text-muted-foreground">Tap the letter to open the message</p>
        </header>

        <div className="flex flex-col items-center gap-8">
          <button
            onClick={() => setOpened((prev) => !prev)}
            className="group relative outline-none transition-transform hover:scale-105"
            aria-label="Open message letter"
          >
            <div className="relative w-[180px] h-[120px] md:w-[220px] md:h-[140px]">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-amber-50 via-white to-rose-50 border border-amber-200/80 shadow-soft" />
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 49%, hsl(20 60% 78% / 0.5) 50%) bottom left / 50% 55% no-repeat, linear-gradient(225deg, transparent 49%, hsl(20 60% 78% / 0.5) 50%) bottom right / 50% 55% no-repeat",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-[58%] rounded-b-xl bg-gradient-to-br from-amber-200/70 to-rose-200/70 border-t border-amber-300/70" />
              <div
                className="absolute top-0 left-0 w-full h-[56%] origin-top transition-transform duration-700"
                style={{
                  transformStyle: "preserve-3d",
                  transform: opened ? "rotateX(-180deg)" : "rotateX(0deg)",
                }}
              >
                <div
                  className="w-full h-full"
                  style={{
                    background: "linear-gradient(180deg, hsl(18 62% 78%) 0%, hsl(14 55% 68%) 100%)",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    borderTopLeftRadius: "0.75rem",
                    borderTopRightRadius: "0.75rem",
                  }}
                />
              </div>
              <div
                className={`absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-rose-700 via-rose-800 to-red-900 shadow-soft flex items-center justify-center transition-opacity duration-500 ${
                  opened ? "opacity-0" : "opacity-100"
                }`}
              >
                <Heart className="h-5 w-5 md:h-6 md:w-6 fill-amber-50 text-amber-50" />
              </div>
            </div>
            <p className="mt-3 text-sm font-semibold tracking-wide uppercase text-primary-deep/80">
              {opened ? "Close Letter" : "Open Letter"}
            </p>
          </button>

          <article
            className={`relative w-full bg-gradient-card rounded-3xl p-8 shadow-card border border-primary/10 transition-all duration-500 ${
              opened ? "opacity-100 translate-y-0 animate-scale-in" : "opacity-0 translate-y-3 pointer-events-none"
            }`}
          >
            <div className="absolute -top-5 right-6 h-10 w-10 rounded-full bg-primary shadow-glow flex items-center justify-center">
              <Heart className="h-4 w-4 text-primary-foreground fill-primary-foreground" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-deep/70 mb-3">{message.from}</p>
            <p className="text-lg leading-relaxed text-foreground min-h-[120px]">
              {typed}
              {typed.length < message.text.length && <span className="animate-pulse">|</span>}
            </p>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Messages;
