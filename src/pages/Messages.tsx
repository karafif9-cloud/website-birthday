import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import FallingFlowers from "@/components/FallingFlowers";
import MusicToggle from "@/components/MusicToggle";
import { Heart } from "lucide-react";

const message = {
  from: "To My Sweethearth Safira",
  /** Satu string per paragraf — tambah/ubah item di array ini */
  paragraphs: [
    "Katanya, makin dewasa, ulang tahun bukan lagi soal seberapa ramai pesta, tapi tentang siapa yang tetap tinggal saat dunia lagi tidak baik-baik saja. Lewat momen ini, aku berharap kamu tahu kalau kamu selalu bisa menghandalkanku untuk itu.",
    "Isi tulisan ini tidak lebih dari sekedar harapan dan doa. Terima kasih ya, sudah mengizinkan aku menjadi salah satu dari bagian dari cerita mu di sepanjang tahun lalu dan kini.",
    "Aku tahu betul betapa banyaknya tawa, tangis, dan lelah yang kamu lewati di tahun sebelum-belumnya. Karena itu, aku bersyukur bisa merayakanmu di tahun ini, dan kamu pantas dirayakan, meskipun kecil-kecilan.",
    "Terima kasih karena sudah selalu berusaha mencari alasan untuk tetap bertahan dan berjuang. Semoga di usia ini, tangki cintamu terisi penuh, duniamu terasa lebih teduh, selalu sehat dan panjang umurnya, dan perlahan mimpi-mimpimu itu tumbuh menjadi utuh.",
    "Live well, i always pray for uou here and of course. i always support whatever choice you make, as long it,s good for you beloved. I LOVE YOU SO MUCH 💚",
  ],
};

const fullText = message.paragraphs.join("\n\n");

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
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [opened]);

  const typedParagraphs = typed.split("\n\n");

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-hero">
      <FloatingShapes />
      <FallingFlowers />
      <Navbar />
      <MusicToggle />
      <main className="relative z-10 max-w-3xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
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
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#F9CDD5] via-[#f0b8c2] to-primary/25 border border-primary/30 shadow-soft" />
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background:
                    "linear-gradient(135deg, transparent 49%, hsl(72 25% 42% / 0.2) 50%) bottom left / 50% 55% no-repeat, linear-gradient(225deg, transparent 49%, hsl(72 25% 42% / 0.2) 50%) bottom right / 50% 55% no-repeat",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 h-[58%] rounded-b-xl bg-gradient-to-br from-primary/30 to-[#F9CDD5]/80 border-t border-primary/25" />
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
                    background: "linear-gradient(180deg, hsl(351 80% 89%) 0%, hsl(72 25% 42% / 0.85) 100%)",
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                    borderTopLeftRadius: "0.75rem",
                    borderTopRightRadius: "0.75rem",
                  }}
                />
              </div>
              <div
                className={`absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary via-primary-deep to-primary-deep shadow-soft flex items-center justify-center transition-opacity duration-500 ${
                  opened ? "opacity-0" : "opacity-100"
                }`}
              >
                <Heart className="h-5 w-5 md:h-6 md:w-6 fill-primary-foreground text-primary-foreground" />
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
            <div className="text-lg leading-relaxed text-foreground min-h-[120px] space-y-4">
              {typedParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {typed.length < fullText.length && <span className="animate-pulse">|</span>}
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Messages;
