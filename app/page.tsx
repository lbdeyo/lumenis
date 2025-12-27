"use client";

import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
      setShowControls(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-start justify-start pt-5 pb-32 px-6 bg-white dark:bg-black">
        <h1 className="mb-4 mt-2 text-5xl font-semibold leading-14 text-left">
          Leadership: The Journey Within
        </h1>
        <p className="mb-8 text-xl font-semibold max-w-4xl leading-10  text-black text-left dark:text-zinc-50">
          Lumenis Partners is a boutique Executive Mentoring and Executive
          Search firm helping individuals and business thrive through the
          careful exploration and assessment of human talent.
        </p>
        <div className="relative w-full">
          <video
            ref={videoRef}
            className="w-full rounded-lg"
            controls={showControls}
            loop
            onPause={handlePause}
          >
            <source src="/video/lumenis-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-lg transition-opacity hover:bg-black/40"
              aria-label="Play video"
            >
              <svg
                className="w-20 h-20 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
