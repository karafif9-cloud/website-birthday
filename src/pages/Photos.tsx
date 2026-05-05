import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type Moment = {
  src: string;
  title: string;
  caption: string;
  date: string;
};

const photos: Moment[] = [
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900",
    title: "Tawa pertama",
    caption: "Momen kecil yang selalu bikin hari terasa lebih ringan.",
    date: "Taman Kota · Sore",
  },
  {
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176?w=900",
    title: "Kue sederhana",
    caption: "Kue kecil, lilin sederhana, tapi penuh harapan untukmu.",
    date: "Rumah · Malam",
  },
  {
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=900",
    title: "Langit pagi",
    caption: "Pagi yang tenang — seperti senyum yang selalu ku rindu.",
    date: "Pantai · Pagi",
  },
  {
    src: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=900",
    title: "Jalan pulang",
    caption: "Setiap langkah bersamamu rasanya tidak pernah jauh.",
    date: "Kota Tua",
  },
  {
    src: "https://images.unsplash.com/photo-1557555187-23d685287bc3?w=900",
    title: "Bunga kesukaan",
    caption: "Sekuntum kecil untuk hari besarmu hari ini.",
    date: "Toko Bunga · Siang",
  },
  {
    src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=900",
    title: "Petualangan kecil",
    caption: "Cerita-cerita yang kelak jadi kenangan paling hangat.",
    date: "Pegunungan",
  },
];

const Photos = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <FloatingShapes />
      <Navbar />
      <MusicToggle />
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-deep mb-3">
            Sweet Moments 📸
          </h1>
          <p className="text-muted-foreground">
            Geser ke bawah, nikmati setiap momennya
          </p>
        </header>

        <div className="flex flex-col gap-16 md:gap-24">
          {photos.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={i}
                className={`flex flex-col ${
                  reverse ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-6 md:gap-10 animate-slide-up`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden rounded-3xl shadow-card border border-primary/10 group">
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="w-full md:w-1/2">
                  <div className="bg-white/70 backdrop-blur rounded-3xl p-6 md:p-8 shadow-soft border border-primary/10">
                    <p className="text-xs uppercase tracking-widest text-primary-deep/70 mb-2">
                      {p.date}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-deep mb-3">
                      {p.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {p.caption}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex justify-center mt-20">
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
