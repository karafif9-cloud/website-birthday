import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

type VideoMoment = {
  title: string;
  /** Path ke file di folder `public`, contoh: `/videos/clip-1.mp4` */
  src: string;
  type?: string;
  caption: string;
  date: string;
};

const videos: VideoMoment[] = [
  {
    title: "Birthday Wishes",
    src: "/videos/a1.mp4",
    caption: "Ucapan sederhana yang dibuat khusus untuk hari spesialmu.",
    date: "Malam Ulang Tahun",
  },
  {
    title: "Sweet Memories",
    src: "/videos/a2.mp4",
    caption: "Potongan momen manis yang selalu bikin senyum sendiri.",
    date: "Kompilasi Kenangan",
  },
  {
    title: "Just For You",
    src: "/videos/a3.mp4",
    caption: "Lagu dan gambar yang dipilih untuk menemani harimu.",
    date: "Playlist Favorit",
  },
];

const Videos = () => (
  <div className="min-h-screen bg-gradient-hero">
    <FloatingShapes />
    <Navbar />
    <MusicToggle />
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-deep mb-3">Memories in Motion 🎥</h1>
        <p className="text-muted-foreground">Press play and enjoy</p>
      </header>

      <div className="flex flex-col gap-16 md:gap-24">
        {videos.map((v, i) => {
          const reverse = i % 2 === 1;
          return (
            <article
              key={i}
              className={`flex flex-col ${
                reverse ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-6 md:gap-10 animate-slide-up`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-3xl shadow-card border border-primary/10 group bg-muted">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  title={v.title}
                >
                  <source src={v.src} type={v.type ?? "video/mp4"} />
                </video>
              </div>

              <div className="w-full md:w-1/2">
                <div className="bg-white/70 backdrop-blur rounded-3xl p-6 md:p-8 shadow-soft border border-primary/10">
                  <p className="text-xs uppercase tracking-widest text-primary-deep/70 mb-2">{v.date}</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary-deep mb-3">{v.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{v.caption}</p>
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

export default Videos;
