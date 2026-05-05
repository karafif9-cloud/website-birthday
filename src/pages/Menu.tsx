import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";
import cameraImg from "@/assets/menu-camera.png";
import videoImg from "@/assets/menu-video.png";
import letterImg from "@/assets/menu-letter.png";

const cards = [
  { to: "/photos", img: cameraImg, title: "Photos", desc: "A gallery of beautiful moments" },
  { to: "/videos", img: videoImg, title: "Videos", desc: "Memories captured in motion" },
  { to: "/messages", img: letterImg, title: "Messages", desc: "Heartfelt words just for you" },
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
              <div className="relative flex items-center justify-center w-40 h-40 md:w-48 md:h-48 rounded-full transition-all duration-500 group-hover:drop-shadow-[0_10px_30px_hsl(145_70%_60%/0.45)]">
                <img
                  src={c.img}
                  alt={c.title}
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:animate-wiggle"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl md:text-2xl font-bold text-primary-deep transition-all">
                  {c.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1 max-w-[220px]">
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
