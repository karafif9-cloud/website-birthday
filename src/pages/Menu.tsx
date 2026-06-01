import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { ComponentType } from "react";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import FallingFlowers from "@/components/FallingFlowers";
import MusicToggle from "@/components/MusicToggle";
import MenuCameraIcon from "@/components/MenuCameraIcon";
import MenuVideoIcon from "@/components/MenuVideoIcon";
import MenuLetterIcon from "@/components/MenuLetterIcon";

type MenuIconProps = { className?: string };

const cards: {
  to: string;
  title: string;
  desc: string;
  Icon: ComponentType<MenuIconProps>;
}[] = [
  {
    to: "/photos",
    title: "Photos",
    desc: "A gallery of beautiful moments",
    Icon: MenuCameraIcon,
  },
  {
    to: "/videos",
    title: "Videos",
    desc: "Memories captured in motion",
    Icon: MenuVideoIcon,
  },
  {
    to: "/messages",
    title: "Messages",
    desc: "Heartfelt words just for you",
    Icon: MenuLetterIcon,
  },
];

const iconClass =
  "h-[85%] w-[85%] transition-transform duration-300 group-hover:animate-wiggle";

const Menu = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-hero">
      <FloatingShapes />
      <FallingFlowers />
      <Navbar />
      <MusicToggle />
      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="text-center mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-deep mb-4">
            Choose your surprise
          </h1>
          <p className="text-lg text-muted-foreground">Three little gifts, all for you ✨</p>
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
              <div className="relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 overflow-visible">
                <c.Icon className={iconClass} />
              </div>
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-primary-deep transition-all">
                  {c.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-[220px]">{c.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-20 animate-fade-in">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/90 backdrop-blur border border-primary/30 text-primary-deep text-sm font-medium shadow-soft hover:bg-primary/25 hover:scale-105 transition-all"
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
