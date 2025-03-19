// components/RecentPropertiesSlider.tsx
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  image: string;
  tag?: string;
  link: string;
}

interface RecentPropertiesSliderProps {
  title: string;
  properties: Property[];
  seeAllLink?: string;
}

const RecentPropertiesSlider: React.FC<RecentPropertiesSliderProps> = ({ title, properties, seeAllLink }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full py-10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          
          <h2 className="text-xl font-semibold text-gray-800 ml-4">{title}</h2>
        </div>
        

        <div className="flex items-center gap-3">
            {seeAllLink && (
            <Link href={seeAllLink} className="text-sm text-primary hover:underline">
                See All
            </Link>
            )}
          <button
            onClick={() => scroll("left")}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
            aria-label="Scroll Right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
      </div>

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 scrollbar-hide"
      >
        {properties.map((property) => (
          <Link
            key={property.id}
            href={property.link}
            className="flex-shrink-0 w-72 bg-white border border-gray-200 rounded-lg shadow-md snap-start hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48 w-full rounded-t-lg overflow-hidden">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              {property.tag && (
                <div className="inline-block text-xs text-white bg-primary px-2 py-1 rounded mb-2">
                  {property.tag}
                </div>
              )}
              <h3 className="text-md font-bold text-gray-900 truncate mb-1">{property.title}</h3>
              <p className="text-sm text-green-700 font-semibold mb-1">${property.price.toLocaleString()}</p>
              <p className="text-sm text-gray-500">{property.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPropertiesSlider;