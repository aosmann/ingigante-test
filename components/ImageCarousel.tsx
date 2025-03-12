// ✅ Modified ImageCarousel to Grid View with Large Primary Image and Remaining Thumbnails
import React, { useState } from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";

interface ImageCarouselProps {
  images: any[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, 5);

  const handleOverlayClick = () => setShowAll(true);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {/* Primary Large Image */}
      {images[0] && (
        <div className="sm:row-span-2 sm:col-span-2 relative w-full h-72 sm:h-full rounded-lg overflow-hidden">
          <Image
            src={urlFor(images[0].asset).url()}
            alt="Main Image"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
        {visibleImages.slice(1, 5).map((img, index) => (
          <div key={index} className="relative h-36 sm:h-32 w-full rounded-lg overflow-hidden">
            <Image
              src={urlFor(img.asset).url()}
              alt={`Property image ${index + 2}`}
              fill
              className="object-cover"
            />
          </div>
        ))}

        {/* Show "+More" if more than 5 images */}
        {images.length > 5 && !showAll && (
          <div
            onClick={handleOverlayClick}
            className="relative h-36 sm:h-32 w-full rounded-lg overflow-hidden cursor-pointer bg-black/60 hover:bg-black/70 flex items-center justify-center text-white"
          >
            <span className="text-lg font-semibold">+{images.length - 5} more</span>
          </div>
        )}
      </div>

      {/* Expanded Full Gallery if showAll */}
      {showAll && (
        <div className="col-span-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
          {images.slice(5).map((img, index) => (
            <div key={index} className="relative w-full h-36 sm:h-40 rounded-lg overflow-hidden">
              <Image
                src={urlFor(img.asset).url()}
                alt={`Extra image ${index + 6}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
