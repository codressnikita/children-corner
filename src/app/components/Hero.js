"use client";

import { useEffect, useState, useRef } from "react";
import Overlay from "./Overlay";

const Hero = ({ videoSrc, isFocused, overlayOpts = {} }) => {
  const [overlayOpacity, setOverlayOpacity] = useState(0); // Start with 0 opacity
  const videoRef = useRef(null); // Define the ref for the video element

  const handleScroll = () => {
    const scrollY = window.scrollY; // Get the current scroll position
    const newOpacity = Math.min(scrollY / window.innerHeight, 1); // Calculate new opacity
    setOverlayOpacity(newOpacity); // Update overlay opacity
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen for scroll events

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  useEffect(() => {
    if (isFocused && videoRef.current) {
      videoRef.current.currentTime = 0; // Restart the video
      videoRef.current.play(); // Ensure the video plays
    }
  }, [isFocused]); // Trigger when isFocused changes

  return (
    <section className="hero-section fixed inset-0 h-screen overflow-hidden">
      <video
        ref={videoRef} // Assign the ref to the video element
        className="w-full h-full object-cover opacity-30"
        src={videoSrc}
        autoPlay
        loop
        muted={!isFocused}
        playsInline
      />
      <Overlay
        animateIn={!isFocused} // Set animateIn to false if isFocused is true
        animateOut={isFocused} // Set animateOut to true if isFocused is true
        animationDuration={1}
        mainOpacity={overlayOpacity + 0.2} // Set the overlay opacity based on scroll
        {...overlayOpts}
      />
    </section>
  );
};

export default Hero;
