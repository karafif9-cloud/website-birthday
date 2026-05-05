import { Link } from "react-router-dom";
import { Camera, Film, Mail, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";

const cards = [
  {
    to: "/photos",
    icon: Camera,
    title: "Photos",
    desc: "A gallery of beautiful moments",
    anim: "group-hover:rotate-[-8deg] group-hover:scale-110",
    float: "animate-float",
  },
  {
    to: "/videos",
    icon: Film,
    title: "Videos",
    desc: "Memories captured in motion",
    anim: "group-hover:translate-x-1 group-hover:scale-110",
    float: "animate-float-slow",
  },
  {
    to: "/messages",
    icon: Mail,
    title: "Messages",
    desc: "Heartfelt words just for you",
    anim: "group-hover:-translate-y-2 group-hover:scale-110",
    float: "animate-float",
  },
];

const Menu = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <FloatingShapes />
      <Navbar />
      <MusicToggle />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-deep mb-4">
            Choose your surprise
          </h1>
          <p className="text-lg text-muted-foreground">
            Three little gifts, all for you ✨
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 place-items-center">
          {cards.map((c, i) => (
            <Link
              key={c.to}
              to={c.to}
              aria-label={c.title}
              className="group flex flex-col items-center gap-4 animate-slide-up outline-none"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div
                className={`relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-mint shadow-glow border border-primary/30 transition-all duration-500 group-hover:shadow-[0_0_60px_hsl(145_90%_75%/0.7)] ${c.float}`}
              >
                <span className="absolute inset-0 rounded-full bg-primary/20 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <c.icon
                  className={`relative h-14 w-14 md:h-16 md:w-16 text-primary-deep transition-transform duration-500 ${c.anim}`}
                  strokeWidth={1.75}
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-primary-deep group-hover:tracking-wide transition-all">
                  {c.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-[200px]">
                  {c.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-20 animate-fade-in">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 backdrop-blur border border-primary/20 text-primary-deep text-sm font-medium shadow-soft hover:bg-primary/20 hover:scale-105 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Menu;
