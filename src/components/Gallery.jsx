import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import imageRoute from "../utils/imageRoute";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Clean up GSAP instances on component unmount
    return () => gsap.killTweensOf(".image-container");
  }, []);

  // Handle clicking on an image to view it fullscreen
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  // Close the fullscreen view
  const closeFullscreen = () => {
    setSelectedImage(null);
  };

  // Handle mouse move for tilt effect
  const handleMouseMove = (e, index) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2; // X offset from center
    const y = e.clientY - rect.top - rect.height / 2; // Y offset from center

    gsap.to(container, {
      rotationY: x / 20, // Adjust sensitivity of tilt
      rotationX: -y / 20,
      ease: "power3.out",
      duration: 0.5,
    });
  };

  // Reset tilt on mouse leave
  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotationY: 0,
      rotationX: 0,
      ease: "power3.out",
      duration: 0.5,
    });
  };

  return (
    <div className="gallery bg-black min-h-screen grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
      {imageRoute.map((image, index) => (
        <div
          key={index}
          className="image-container relative cursor-pointer overflow-hidden"
          onClick={() => handleImageClick(image)}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative w-full h-0 pb-[100%]">
            {/* Aspect ratio is 1:1 */}
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      ))}

      {/* Fullscreen image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeFullscreen}
        >
          <img
            src={selectedImage}
            alt="Selected full image"
            className="max-w-full max-h-full object-contain"
          />
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeFullscreen}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
