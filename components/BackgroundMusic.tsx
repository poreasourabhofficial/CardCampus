import React, { useEffect, useRef } from "react";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Required initial settings
    audio.loop = true;
    audio.volume =0.02; // 🎹 soft wedding piano
    audio.muted = true;
    audio.preload = "auto";

    // Try autoplay muted (allowed by browser)
    audio.play().catch(() => {});

    // 🔑 Enable sound on first user interaction
    const enableSound = () => {
      audio.muted = false;
      audio.play().catch(() => {});

      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("scroll", enableSound);
      window.removeEventListener("keydown", enableSound);
    };

    window.addEventListener("click", enableSound);
    window.addEventListener("touchstart", enableSound);
    window.addEventListener("scroll", enableSound);
    window.addEventListener("keydown", enableSound);

    return () => {
      window.removeEventListener("click", enableSound);
      window.removeEventListener("touchstart", enableSound);
      window.removeEventListener("scroll", enableSound);
      window.removeEventListener("keydown", enableSound);
    };
  }, []);

  return (
    <audio ref={audioRef}>
      <source
        src="https://pub-dbae2461049248d1b4db430fba3b5577.r2.dev/bgm.mp3"
        type="audio/mpeg"
      />
    </audio>
  );
};

export default BackgroundMusic;
