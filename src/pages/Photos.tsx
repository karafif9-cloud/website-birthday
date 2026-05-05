import { useState } from "react";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";
import { X } from "lucide-react";

const photos = [
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800",
  "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800",
  "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800",
  "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=800",
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=800",
  "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800",
  "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
  "https://images.unsplash.com/photo-1543258103-a62bdc069871?w=800",
];

const Photos = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-gradient-hero">
      <FloatingShapes />
      <Navbar />
      <MusicToggle />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-deep mb-3">Sweet Moments 📸</h1>
          <p className="text-muted-foreground">Tap any photo to see it bigger</p>
        </header>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setActive(src)}
              className="group relative aspect-square overflow-hidden rounded-3xl shadow-card border border-primary/10 animate-scale-in"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <img
                src={src}
                alt={`Memory ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {active && (
          <div
            className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
            onClick={() => setActive(null)}
          >
            <button className="absolute top-6 right-6 h-12 w-12 rounded-full bg-card flex items-center justify-center shadow-soft">
              <X className="h-5 w-5" />
            </button>
            <img src={active} alt="Preview" className="max-h-[85vh] max-w-full rounded-3xl shadow-glow animate-scale-in" />
          </div>
        )}
      </main>
    </div>
  );
};

export default Photos;
