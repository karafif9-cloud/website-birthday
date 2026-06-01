import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const MUSIC_SRC = "/music/m1.mp3";

type BackgroundMusicContextValue = {
  playing: boolean;
  toggle: () => void;
  pauseForVideo: () => void;
  resumeAfterVideo: () => void;
};

const BackgroundMusicContext = createContext<BackgroundMusicContextValue | null>(null);

export const BackgroundMusicProvider = ({ children }: { children: ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userWantsMusicRef = useRef(true);
  const pausedForVideoRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  const playMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || pausedForVideoRef.current || !userWantsMusicRef.current) return;
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }, []);

  const pauseMusic = useCallback(() => {
    audioRef.current?.pause();
    setPlaying(false);
  }, []);

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC);
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const tryAutoplay = () => playMusic();

    tryAutoplay();

    const unlockOnGesture = () => {
      tryAutoplay();
    };
    document.addEventListener("pointerdown", unlockOnGesture, { once: true });
    document.addEventListener("keydown", unlockOnGesture, { once: true });

    return () => {
      document.removeEventListener("pointerdown", unlockOnGesture);
      document.removeEventListener("keydown", unlockOnGesture);
      audio.pause();
      audioRef.current = null;
    };
  }, [playMusic]);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      userWantsMusicRef.current = false;
      pauseMusic();
    } else {
      userWantsMusicRef.current = true;
      void playMusic();
    }
  }, [pauseMusic, playMusic, playing]);

  const pauseForVideo = useCallback(() => {
    pausedForVideoRef.current = true;
    pauseMusic();
  }, [pauseMusic]);

  const resumeAfterVideo = useCallback(() => {
    pausedForVideoRef.current = false;
    if (userWantsMusicRef.current) {
      void playMusic();
    }
  }, [playMusic]);

  return (
    <BackgroundMusicContext.Provider
      value={{ playing, toggle, pauseForVideo, resumeAfterVideo }}
    >
      {children}
    </BackgroundMusicContext.Provider>
  );
};

export const useBackgroundMusic = () => {
  const ctx = useContext(BackgroundMusicContext);
  if (!ctx) {
    throw new Error("useBackgroundMusic must be used within BackgroundMusicProvider");
  }
  return ctx;
};
