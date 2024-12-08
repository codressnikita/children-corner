"use client";

import { useEffect, useState } from "react";

const Overlay = ({
  leftSize = { height: 60, width: 200 }, // Customize left triangle size
  rightSize = { height: 40, width: 200 }, // Customize right triangle size
  mainColor = "from-blue-500 to-blue-500", // Gradient color for main overlay
  leftColor = "from-blue-500 to-blue-500", // Gradient color for left triangle
  rightColor = "from-blue-500 to-blue-500", // Gradient color for right triangle
  mainOpacity = 0.3, // Opacity for main overlay
  leftOpacity = 0.6, // Opacity of left triangle
  rightOpacity = 0.6, // Opacity of right triangle
  animateIn = false, // Option to animate in
  animateOut = false, // Option to animate out
  animationDuration = 0.5, // Duration of animations in seconds
}) => {
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (animateIn) {
      setTimeout(() => {
        setIsAnimatingIn(true);
        setIsAnimatingOut(false);
      }, 200); // Delay the start of the animate-in
    } else if (animateOut) {
      setIsAnimatingIn(false);
      setTimeout(() => {
        setIsAnimatingOut(true);
      }, 200); // Delay the start of the animate-out
    } else {
      setIsAnimatingIn(false);
      setIsAnimatingOut(false);
    }
  }, [animateIn, animateOut]);

  return (
    <>
      {/* Main Overlay with opacity animation */}
      <div
        className={`absolute top-0 left-0 z-10 bg-gradient-to-tl ${mainColor}`}
        style={{
          width: "100%",
          height: "100%",
          opacity: isAnimatingIn
            ? mainOpacity
            : isAnimatingOut
            ? 0
            : mainOpacity, // Ensure opacity is set correctly
          transition: `all ${animationDuration}s ease`, // Use configurable animation duration
        }}
      />

      {/* Left Triangle Overlay */}
      <div
        className={`absolute bottom-0 left-0 z-10 bg-gradient-to-tr ${leftColor}`}
        style={{
          width: `${leftSize.width}%`,
          height: `${leftSize.height}%`,
          opacity: leftOpacity,
          clipPath: "polygon(0 100%, 100% 100%, 0 0)", // Clip path for triangle
          transition: `all ${animationDuration}s ease`, // Use configurable animation duration
          transform: isAnimatingIn
            ? "translateX(0)"
            : isAnimatingOut
            ? "translateX(-150%)"
            : "translateX(0)", // Ensure triangles remain visible
        }}
      />

      {/* Right Triangle Overlay */}
      <div
        className={`absolute bottom-0 right-0 z-10 bg-gradient-to-tl ${rightColor}`}
        style={{
          width: `${rightSize.width}%`,
          height: `${rightSize.height}%`,
          opacity: rightOpacity,
          clipPath: "polygon(100% 0%, 100% 100%, 0% 100%)", // Clip path for right triangle
          transition: `all ${animationDuration}s ease`, // Use configurable animation duration
          transform: isAnimatingIn
            ? "translateX(0)"
            : isAnimatingOut
            ? "translateX(150%)"
            : "translateX(0)", // Ensure triangles remain visible
        }}
      />
    </>
  );
};

export default Overlay;
