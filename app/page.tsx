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
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-start pt-5 pb-32 px-6 bg-black">
        <h1 className="mb-4 mt-2 text-5xl font-normal leading-14 text-left">
          Leadership: The Journey Within
        </h1>
        <p className="text-4xl font-normal max-w-4xl leading-10 mb-3 text-zinc-50 text-left">
          Leadership rarely <em>fails</em> loudly. It <em>fractures</em>{" "}
          quietly.
        </p>
        <p className="text-2xl leading-8  text-white">
          When success no longer feels coherent. When clarity matters more than
          performance. When the work becomes personal.
        </p>
        <div className="relative w-full mt-8">
          <video
            ref={videoRef}
            className="w-full rounded-lg"
            controls={showControls}
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
        <p className="text-2xl mt-2 leading-8 text-white">
          If this resonates, a conversation may be useful.{" "}
          <a href="/contact" className="text-teal-200 hover:underline">
            Request a private introduction with me.
          </a>
        </p>
      </main>
    </div>
  );
}
