// ✅ Enhanced ImageCarousel: Grid View + Overlay + Image Viewer Modal
import React, { useState } from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

interface ImageCarouselProps {
  images: any[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openViewer = (index: number) => {
    setCurrentIndex(index);
    setIsViewerOpen(true);
  };

  const closeViewer = () => setIsViewerOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Large Primary Image */}
      {images[0] && (
        <div
          className="sm:row-span-2 sm:col-span-2 relative w-full h-72 sm:h-full rounded-lg overflow-hidden cursor-pointer"
          onClick={() => openViewer(0)}
        >
          <Image
            src={urlFor(images[0].asset).url()}
            alt="Main Image"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
        {images.slice(1, 5).map((img, index) => (
          <div
            key={index + 1}
            className="relative h-36 sm:h-32 w-full rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openViewer(index + 1)}
          >
            <Image
              src={urlFor(img.asset).url()}
              alt={`Image ${index + 2}`}
              fill
              className="object-cover"
            />
            {/* Overlay for last thumbnail if there are more */}
            {index === 3 && images.length > 5 && (
              <div
                className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-lg font-semibold"
                onClick={() => openViewer(4)}
              >
                +{images.length - 4} more
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Image Viewer Modal */}
      {isViewerOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={closeViewer}
          >
            &times;
          </button>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            onClick={prevImage}
          >
            <AiFillLeftCircle size={40} />
          </button>

          <div className="relative w-[90%] max-w-4xl h-[80%]">
            <Image
              src={urlFor(images[currentIndex].asset).url()}
              alt={`Image ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
            onClick={nextImage}
          >
            <AiFillRightCircle size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
