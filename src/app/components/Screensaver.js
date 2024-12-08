"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";
import { useScreensaverContext } from "../ScreensaverContext";

const Screensaver = ({ idleTimeout = 100000 }) => {
  const { screensaverDisabled, setScreensaverDisabled } =
    useScreensaverContext();
  const [isIdle, setIsIdle] = useState(false);

  // Idle detection logic
  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsIdle(true), idleTimeout);
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);

    resetTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      clearTimeout(timeoutId);
    };
  }, [idleTimeout]);

  if (screensaverDisabled) return null;

  return (
    <>
      {isIdle && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Video background */}
          <video
            className="w-full h-full object-cover"
            src={"./screensaver.mp4"}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay over the video */}
          <div className="absolute inset-0 bg-black bg-opacity-95 z-40"></div>

          {/* Content layout */}
          <div className="w-full h-full absolute inset-0 flex">
            {/* Left Half - Logo */}
            <div className="w-1/2 flex items-center justify-center z-50">
              <img src="./logo.png" alt="Logo" className=" h-auto w-[30vw]" />
            </div>

            {/* Right Half - Text */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center text-center z-50 px-4">
              <h1 className="text-6xl font-bold text-white">
                More of <span className="text-yellow-500">Indian History</span>
              </h1>
              <button className="text-4xl mt-10 px-4 py-2 border-2 border-yellow-500 text-yellow-500 bg-transparent rounded-lg">
                Tap to Start
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Screensaver;
