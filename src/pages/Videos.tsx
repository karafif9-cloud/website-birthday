import { useCallback, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import FloatingShapes from "@/components/FloatingShapes";
import FallingFlowers from "@/components/FallingFlowers";
import MusicToggle from "@/components/MusicToggle";
import { useBackgroundMusic } from "@/contexts/BackgroundMusicContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/** Path relatif ke `public/` */
const videos = ["videos/v1.mov", "videos/v2.mov", "videos/v3.mov"];

const videoUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path}`.replace(/\/{2,}/g, "/");

const Videos = () => {
  const { pauseForVideo, resumeAfterVideo } = useBackgroundMusic();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const anyVideoPlaying = useCallback(() => {
    return videoRefs.current.some((v) => v && !v.paused && !v.ended);
  }, []);

  const handleVideoPlay = useCallback(() => {
    pauseForVideo();
  }, [pauseForVideo]);

  const handleVideoStop = useCallback(() => {
    window.setTimeout(() => {
      if (!anyVideoPlaying()) {
        resumeAfterVideo();
      }
    }, 0);
  }, [anyVideoPlaying, resumeAfterVideo]);

  useEffect(() => () => resumeAfterVideo(), [resumeAfterVideo]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-hero">
      <FloatingShapes />
      <FallingFlowers />
      <Navbar />
      <MusicToggle />
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 animate-fade-in">
        <div className="flex flex-col gap-6 md:gap-8">
          {videos.map((path, i) => (
            <div
              key={path}
              className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-card border border-primary/10 bg-muted animate-slide-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <video
                ref={(el) => {
                  videoRefs.current[i] = el;
                }}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full object-contain bg-black"
                src={videoUrl(path)}
                onPlay={handleVideoPlay}
                onPause={handleVideoStop}
                onEnded={handleVideoStop}
              >
                Browser tidak mendukung pemutaran video ini.
              </video>
            </div>
          ))}
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

export default Videos;
