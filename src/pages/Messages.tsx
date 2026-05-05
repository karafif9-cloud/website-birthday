import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";
import { Heart } from "lucide-react";

const messages = [
  {
    from: "From the heart",
    text: "Happy birthday! Today is all about celebrating the wonderful, kind, and one-of-a-kind person you are. May your year be filled with laughter, light, and everything your heart desires. 💚",
  },
  {
    from: "A friend",
    text: "Thank you for being you. Your warmth makes every room brighter. Wishing you a year as beautiful as your smile.",
  },
  {
    from: "Family",
    text: "Watching you grow into someone so amazing is our greatest joy. Have the happiest of birthdays — you deserve it all.",
  },
  {
    from: "Someone who cares",
    text: "Here's to new adventures, cozy mornings, big dreams, and quiet moments. May this year hug you tight.",
  },
];

const Messages = () => {
  const [typed, setTyped] = useState("");
  const first = messages[0].text;

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(first.slice(0, i));
      if (i >= first.length) clearInterval(id);
    }, 25);
    return () => clearInterval(id);
  }, [first]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <FloatingShapes />
      <Navbar />
      <MusicToggle />
      <main className="max-w-3xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-deep mb-3">Messages for You 💌</h1>
          <p className="text-muted-foreground">Words written with love</p>
        </header>
        <div className="space-y-8 relative">
          <div className="absolute left-6 top-4 bottom-4 w-px bg-primary/30 hidden md:block" />
          {messages.map((m, i) => (
            <div
              key={i}
              className="relative md:pl-16 animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="hidden md:flex absolute left-0 top-6 h-12 w-12 rounded-full bg-primary items-center justify-center shadow-glow">
                <Heart className="h-5 w-5 text-primary-foreground fill-primary-foreground" />
              </div>
              <div className="bg-gradient-card rounded-3xl p-8 shadow-card border border-primary/10">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-deep/70 mb-3">
                  {m.from}
                </p>
                <p className="text-lg leading-relaxed text-foreground">
                  {i === 0 ? (
                    <>
                      {typed}
                      {typed.length < first.length && <span className="animate-pulse">|</span>}
                    </>
                  ) : (
                    m.text
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Messages;
