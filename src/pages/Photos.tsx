import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/** Path ke file di folder `public`, contoh: `/photos/photo-1.jpg` */
const photos = [
  "/photos/p1.jpg",
  "/photos/p2.jpg",
  "/photos/p3.jpg",
  "/photos/p4.jpg",
  "/photos/p5.jpg",
  "/photos/p6.jpg",
];

const Photos = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <FloatingShapes />
      <Navbar />
      <MusicToggle />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {photos.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card border border-primary/10 group animate-slide-up"
              style={{ animationDelay: `${i * 0.06}s` }}
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

        <div className="flex justify-center mt-16">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 backdrop-blur border border-primary/20 text-primary-deep text-sm font-medium shadow-soft hover:bg-primary/20 hover:scale-105 transition-all"
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
