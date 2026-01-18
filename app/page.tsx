"use client";

import { useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [hasVideoEnded, setHasVideoEnded] = useState(false);

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

  const handleVideoEnd = () => {
    setHasVideoEnded(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#281e32]">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-start pt-5 pb-32 px-6 bg-[#281e32]">
        <div className="w-full flex flex-col items-center">
          <h1 className="mb-4 mt-2 text-4xl md:text-5xl font-normal leading-14 text-center w-full">
            Leadership: The Journey Within
          </h1>
          <p className="text-2xl md:text-4xl font-normal max-w-4xl leading-8 md:leading-10 mb-3 text-zinc-50 text-center w-full">
            Leadership rarely <em>fails</em> loudly. It <em>fractures</em>{" "}
            quietly.
          </p>
        </div>
        <p className="text-xl md:text-2xl leading-8 text-white text-center w-full">
          When success no longer feels coherent. When clarity matters more than
          performance. When the work becomes personal.
        </p>
        <div className="relative w-full mt-8">
          <video
            ref={videoRef}
            className="w-full rounded-lg"
            controls={showControls}
            onPause={handlePause}
            onEnded={handleVideoEnd}
          >
            <source src="/video/lumenis-video-e2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-[#281e32]/30 rounded-lg transition-opacity hover:bg-[#281e32]/40"
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
        {/* Mobile: Always visible */}
        <div className="block md:hidden">
          <p className="text-2xl mt-2 leading-8 text-white text-center w-full">
            <a href="/contact" className="text-teal-200 hover:underline">
              If this resonates, request a private conversation.{" "}
            </a>
          </p>
          <p className="text-2xl mt-2 leading-8 text-white text-center w-full">
            <a href="/about" className="text-teal-200 hover:underline">
              Meet Anna Maria Larsen.
            </a>
          </p>
        </div>

        {/* Desktop: Only visible after video ends */}
        {hasVideoEnded && (
          <div className="hidden md:block">
            <p className="text-2xl mt-2 leading-8 text-white text-center w-full">
              <a href="/contact" className="text-teal-200 hover:underline">
                If this resonates, request a private conversation.{" "}
              </a>
            </p>
            <p className="text-2xl mt-2 leading-8 text-white text-center w-full">
              <a href="/about" className="text-teal-200 hover:underline">
                Meet Anna Maria Larsen.
              </a>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
