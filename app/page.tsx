"use client";

import { useRef, useState } from "react";

const podcastClips = [
  {
    src: "/video/01-only-person-you-can-change.mp4",
    poster: "/video/01-only-person-you-can-change.jpg",
    title: "The only person you can change is yourself",
  },
  {
    src: "/video/03-you-bring-yourself-to-work.mp4",
    poster: "/video/03-you-bring-yourself-to-work.jpg",
    title: "You can't separate who you are from how you lead",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLVideoElement>(null);
  const clipRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [hasVideoEnded, setHasVideoEnded] = useState(false);
  const [clipPlaying, setClipPlaying] = useState(() =>
    podcastClips.map(() => false)
  );
  const [clipControls, setClipControls] = useState(() =>
    podcastClips.map(() => false)
  );

  const pauseOthers = (current: HTMLVideoElement | null) => {
    [heroRef.current, ...clipRefs.current].forEach((video) => {
      if (video && video !== current && !video.paused) {
        video.pause();
      }
    });
  };

  const handlePlay = () => {
    const video = heroRef.current;
    if (!video) return;
    pauseOthers(video);
    video.play();
    setIsPlaying(true);
    setShowControls(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleVideoEnd = () => {
    setHasVideoEnded(true);
  };

  const playClip = (index: number) => {
    const video = clipRefs.current[index];
    if (!video) return;
    pauseOthers(video);
    video.play();
    setClipPlaying((current) =>
      current.map((playing, i) => (i === index ? true : playing))
    );
    setClipControls((current) =>
      current.map((shown, i) => (i === index ? true : shown))
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#281e32]">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-start pt-5 pb-32 px-6 bg-[#281e32]">
        <div className="w-full flex flex-col items-start">
          <h1 className="mb-2 md:mb-4 mt-2 text-4xl md:text-5xl font-normal leading-tight md:leading-14 text-left w-full md:max-w-4xl">
            Leadership: The Journey Within
          </h1>
          <p className="text-2xl md:text-4xl font-normal max-w-4xl leading-8 md:leading-10 mb-3 text-zinc-50 text-left w-full">
            Leadership rarely <em>fails</em> loudly. It <em>fractures</em>{" "}
            quietly.
          </p>
        </div>
        <p className="text-xl md:text-2xl leading-8 text-white text-left w-full md:max-w-3xl self-start">
          When success no longer feels coherent...
          <br /> When clarity matters more than performance...
          <br /> When the work becomes personal...
        </p>

        <div className="relative w-full mt-8">
          <p className="text-xl leading-8 text-white text-center w-full self-start italic mb-2">
            <i>Please click on the short video&nbsp;below.</i>
          </p>
          <video
            ref={heroRef}
            className="w-full rounded-lg"
            controls={showControls}
            playsInline
            preload="metadata"
            onPause={handlePause}
            onEnded={handleVideoEnd}
          >
            <source src="/video/a-lumenis-video.mp4" type="video/mp4" />
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

        {/* Mobile: Always visible, directly under the main video */}
        <div className="block md:hidden">
          <p className="text-xl md:text-2xl mt-2 leading-8 text-white text-center w-full">
            <a href="/contact" className="text-teal-200 hover:underline">
              If this resonates, request a private conversation.{" "}
            </a>
          </p>
          <p className="text-xl md:text-2xl mt-1 leading-8 text-white text-center w-full">
            <a href="/about" className="text-teal-200 hover:underline">
              Meet Anna Maria Larsen.
            </a>
          </p>
        </div>

        <div className="mt-12 w-full">
          <p className="text-xl leading-8 text-white text-center w-full italic mb-6">
            <i>From the Tula Science Podcast.</i>
          </p>
          <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
            {podcastClips.map((clip, index) => (
              <figure key={clip.src} className="min-w-0">
                <div className="relative">
                  <video
                    ref={(node) => {
                      clipRefs.current[index] = node;
                    }}
                    className="aspect-[4/5] w-full rounded-lg bg-black object-cover"
                    controls={clipControls[index]}
                    playsInline
                    preload="none"
                    poster={clip.poster}
                    onPause={() =>
                      setClipPlaying((current) =>
                        current.map((playing, i) =>
                          i === index ? false : playing
                        )
                      )
                    }
                    onEnded={() => setHasVideoEnded(true)}
                  >
                    <source src={clip.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {!clipPlaying[index] && (
                    <button
                      onClick={() => playClip(index)}
                      className="absolute inset-0 flex items-center justify-center bg-[#281e32]/30 rounded-lg transition-opacity hover:bg-[#281e32]/40"
                      aria-label={`Play video: ${clip.title}`}
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
                <figcaption className="mt-3 text-center text-lg md:text-xl leading-7 text-zinc-100">
                  {clip.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Desktop: Only visible after video ends */}
        {hasVideoEnded && (
          <div className="hidden md:block">
            <p className="text-xl md:text-2xl mt-2 leading-8 text-white text-center w-full">
              <a href="/contact" className="text-teal-200 hover:underline">
                If this resonates, request a private conversation.{" "}
              </a>
            </p>
            <p className="text-xl md:text-2xl mt-1 leading-8 text-white text-center w-full">
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
