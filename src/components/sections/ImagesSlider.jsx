"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react"; // Added useCallback

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // loading state isn't strictly needed for blocking UI anymore, but good for indicators if needed.
  // We initialize loadedImages as empty, will populate with VALID images.
  const [loadedImages, setLoadedImages] = useState([]);

  // Use useCallback to avoid stale closures if dependencies change
  const handleNext = useCallback(() => {
    setLoadedImages((currentLoadedImages) => {
      if (currentLoadedImages.length === 0) return currentLoadedImages; // Don't switch if no images
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === currentLoadedImages.length ? 0 : prevIndex + 1
      );
      return currentLoadedImages;
    });
  }, []);

  const handlePrevious = useCallback(() => {
    setLoadedImages((currentLoadedImages) => {
      if (currentLoadedImages.length === 0) return currentLoadedImages;
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? currentLoadedImages.length - 1 : prevIndex - 1
      );
      return currentLoadedImages;
    });
  }, []);

  useEffect(() => {
    loadImages();
  }, [images]); // Reload if images prop changes

  const loadImages = () => {
    const loadPromises = images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = () => reject(image); // Reject with image url just to know
      });
    });

    Promise.allSettled(loadPromises)
      .then((results) => {
        const validImages = results
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);

        setLoadedImages(validImages);
      })
      .catch((error) => console.error("Failed to load images", error));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay with faster interval
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 4000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, handleNext]); // Added handleNext to dependencies

  const slideVariants = {
    initial: {
      scale: 1.2,
      opacity: 0,
      x: "100%", // Starting from right
      filter: "blur(10px)",
    },
    visible: {
      scale: 1,
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOut
      },
      zIndex: 1,
    },
    upExit: {
      opacity: 0,
      y: "-100%", // Exit to top
      scale: 0.8,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
      zIndex: 0,
    },
    downExit: {
      opacity: 0,
      y: "100%",
      scale: 0.8,
      filter: "blur(10px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
      zIndex: 0,
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center bg-zinc-900", // Added default bg
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Render children unconditionally, z-index ensures it's above images */}
      <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto h-full w-full">
          {children}
        </div>
      </div>

      {areImagesLoaded && overlay && (
        <div className={cn("absolute inset-0 bg-black/60 z-40 pointer-events-none", overlayClassName)} />
      )}

      {areImagesLoaded && (
        <AnimatePresence mode="popLayout"> {/* Changed to popLayout for smoother transitions if needed */}
          <motion.img
            key={loadedImages[currentIndex]} // Key by URL to ensures animation triggers on change
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center"
            style={{
              position: 'absolute', // Ensure absolute positioning for stacking
              top: 0,
              left: 0,
            }}
          />
        </AnimatePresence>
      )}
    </div>
  );
};
