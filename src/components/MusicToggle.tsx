import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(
      "https://cdn.pixabay.com/download/audio/2022/10/30/audio_347111d624.mp3"
    );
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;
    return () => {
      audio.pause();
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().catch(() => {});
      setPlaying(true);
    }
  };

  return (
    <Button
      onClick={toggle}
      size="icon"
      variant="outline"
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-card/80 backdrop-blur shadow-soft border-primary/30 hover:bg-primary/20"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? <Music className="h-5 w-5 text-primary-deep" /> : <VolumeX className="h-5 w-5 text-muted-foreground" />}
    </Button>
  );
};

export default MusicToggle;
