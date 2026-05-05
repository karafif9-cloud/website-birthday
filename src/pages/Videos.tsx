import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import MusicToggle from "@/components/MusicToggle";

const videos = [
  { title: "Birthday Wishes", src: "https://www.youtube.com/embed/inS9gAgSENE" },
  { title: "Sweet Memories", src: "https://www.youtube.com/embed/9bZkp7q19f0" },
  { title: "Just For You", src: "https://www.youtube.com/embed/2Vv-BfVoq4g" },
  { title: "A Special Song", src: "https://www.youtube.com/embed/ScNNfyq3d_w" },
];

const Videos = () => (
  <div className="min-h-screen bg-gradient-hero">
    <FloatingShapes />
    <Navbar />
    <MusicToggle />
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary-deep mb-3">Memories in Motion 🎥</h1>
        <p className="text-muted-foreground">Press play and enjoy</p>
      </header>
      <div className="grid md:grid-cols-2 gap-8">
        {videos.map((v, i) => (
          <div
            key={i}
            className="bg-gradient-card rounded-3xl p-4 shadow-card border border-primary/10 animate-slide-up"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <div className="aspect-video overflow-hidden rounded-2xl bg-muted">
              <iframe
                src={v.src}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
            <h3 className="mt-4 px-2 text-lg font-semibold text-primary-deep">{v.title}</h3>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Videos;
