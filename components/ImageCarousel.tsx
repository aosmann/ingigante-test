import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import urlFor from "../lib/urlFor";

interface ImageCarouselProps {
  images: any[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setSlideDirection("slide-left");
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setSlideDirection("slide-right");
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleThumbnailClick = (index: number) => {
    setSlideDirection(index > currentImageIndex ? "slide-left" : "slide-right");
    setCurrentImageIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDirection("");
    }, 500);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;

      if (e.key === "Escape") {
        setIsFullscreen(false);
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isFullscreen]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  return (
    <div className="slider-wrapper w-full">
      <div className="relative overflow-hidden rounded-lg">
        <div
          className="relative w-full cursor-pointer"
          style={{ paddingBottom: "66.67%" }}
          onClick={toggleFullscreen}
        >
          <Image
            src={urlFor(images[currentImageIndex].asset).url()}
            alt=""
            fill
            className={`object-cover transition-transform duration-500 ${slideDirection}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority
          />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            previousImage();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white hover:scale-110 transition-transform duration-200 bg-black/30 rounded-full"
        >
          <AiFillLeftCircle size={34} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white hover:scale-110 transition-transform duration-200 bg-black/30 rounded-full"
        >
          <AiFillRightCircle size={34} />
        </button>
      </div>

      <div className="mt-4 p-2 flex gap-2 overflow-x-auto pb-2 scrollbar-hide min-w-full lg:min-w-[50rem]">
        {images.slice(0, 5).map((image, index) => (
          <button
            key={image._ref}
            onClick={() => handleThumbnailClick(index)}
            className={`relative w-20 md:w-24 flex-shrink-0 overflow-hidden rounded-md transition-all duration-200 hover:scale-105 ${
              currentImageIndex === index
                ? "ring-2 ring-offset-2 ring-blue-500 scale-105"
                : "hover:ring-1 hover:ring-blue-300"
            }`}
            style={{ aspectRatio: "3/2" }}
          >
            <Image
              src={urlFor(image.asset).url()}
              alt=""
              fill
              className="object-cover"
              sizes="96px"
              loading="lazy"
            />
            {index === 4 && images.length > 5 && !isFullscreen && (
              <div className="absolute inset-0 bg-black bg-opacity-50 text-white text-sm flex items-center justify-center font-semibold">
                +{images.length - 5} more
              </div>
            )}
          </button>
        ))}
      </div>


      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 text-white z-50 hover:opacity-75 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-50 hover:scale-110 transition-transform"
          >
            <AiFillLeftCircle size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-50 hover:scale-110 transition-transform"
          >
            <AiFillRightCircle size={40} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src={urlFor(images[currentImageIndex].asset).url()}
                alt=""
                fill
                className={`object-contain transition-transform duration-500 ${slideDirection}`}
              />
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex justify-center gap-2 px-4 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={image._ref}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transform transition-all duration-200 hover:scale-105 ${
                    currentImageIndex === index
                      ? "ring-2 ring-offset-2 ring-blue-500 scale-105"
                      : "hover:ring-1 hover:ring-blue-300"
                  }`}
                >
                  <Image
                    src={urlFor(image.asset).url()}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
