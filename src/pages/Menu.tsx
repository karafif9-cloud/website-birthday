import { Link } from "react-router-dom";
import { Image, Video, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";

const cards = [
  { to: "/photos", icon: Image, title: "Photos", desc: "A gallery of beautiful moments", emoji: "📸" },
  { to: "/videos", icon: Video, title: "Videos", desc: "Memories captured in motion", emoji: "🎥" },
  { to: "/messages", icon: Mail, title: "Messages", desc: "Heartfelt words just for you", emoji: "💌" },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <FloatingShapes />
      <Navbar />
      <MusicToggle />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-deep mb-4">Choose your surprise</h1>
          <p className="text-lg text-muted-foreground">Three little gifts, all for you ✨</p>
        </header>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative overflow-hidden rounded-3xl bg-gradient-card p-8 shadow-card border border-primary/10 transition-all duration-500 hover:scale-105 hover:shadow-glow animate-slide-up"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="absolute inset-0 bg-gradient-mint opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-5xl mb-4">{c.emoji}</div>
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/30 mb-4 group-hover:bg-primary/50 transition-colors">
                  <c.icon className="h-7 w-7 text-primary-deep" />
                </div>
                <h2 className="text-2xl font-bold text-primary-deep mb-2">{c.title}</h2>
                <p className="text-muted-foreground">{c.desc}</p>
                <div className="mt-6 text-sm font-medium text-primary-deep/70 group-hover:translate-x-2 transition-transform">
                  Open →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Menu;
