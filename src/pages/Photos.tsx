import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import FallingFlowers from "@/components/FallingFlowers";
import MusicToggle from "@/components/MusicToggle";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/** Path ke file di folder `public`, contoh: `/photos/p1.jpg` */
const photos = [
  "/photos/p1.PNG",
  "/photos/p2.PNG",
  "/photos/p3.PNG",
  "/photos/p4.PNG",
  "/photos/p5.PNG",
  "/photos/p6.PNG",
  "/photos/p7.PNG",
  "/photos/p8.PNG",
  "/photos/p9.PNG",
];

const Photos = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-hero">
      <FloatingShapes />
      <FallingFlowers />
      <Navbar />
      <MusicToggle />
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
        <div className="rounded-3xl animate-slide-up">
          <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
            {photos.map((src, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden rounded-xl shadow-card border border-primary/10 group"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/90 backdrop-blur border border-primary/30 text-primary-deep text-sm font-medium shadow-soft hover:bg-primary/25 hover:scale-105 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke menu
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Photos;
