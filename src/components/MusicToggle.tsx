import { Music, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useBackgroundMusic } from "@/contexts/BackgroundMusicContext";

const MusicToggle = () => {
  const { playing, toggle } = useBackgroundMusic();

  return (
    <Button
      onClick={toggle}
      size="icon"
      variant="outline"
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-secondary/95 backdrop-blur shadow-soft border-primary/35 hover:bg-primary/30"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? (
        <Music className="h-5 w-5 text-primary-deep" />
      ) : (
        <VolumeX className="h-5 w-5 text-muted-foreground" />
      )}
    </Button>
  );
};

export default MusicToggle;
