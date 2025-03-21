import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BedDouble, Bath, Ruler } from "lucide-react";
import urlFor from "../lib/urlFor";
import { useEffect, useRef, useState } from "react";

const Offers = ({ properties }: any) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const scrollAmount = 340; // Adjust based on card width

  // Clone first 3 cards for infinite loop illusion
  const clonedCards = properties.slice(0, 3);
  const allCards = [...properties, ...clonedCards];

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    let newIndex = direction === "right" ? scrollIndex + 1 : scrollIndex - 1;

    // Forward infinite scroll loop logic
    if (newIndex >= properties.length + 1) {
      // Reset scroll instantly to beginning (first real card)
      scrollRef.current.scrollTo({ left: 0, behavior: "auto" });
      newIndex = 1;
    } else if (newIndex < 0) {
      // Optional: prevent going backwards
      newIndex = 0;
    }

    scrollRef.current.scrollTo({
      left: newIndex * scrollAmount,
      behavior: "smooth",
    });

    setScrollIndex(newIndex);
  };

  // Auto-scroll every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, [scrollIndex]);

  return (
    <section className="w-full py-12 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header + Controls */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Listings</h2>
            <p className="text-gray-600 mt-1 text-sm">
              Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/sales">
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm text-primary hover:text-primary/80">
                See All Listings
              </button>
            </Link>
            <button
              onClick={() => scroll("left")}
              className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
        >
          {allCards.map((property: any, index: number) => (
            <Link
              key={`${property._id}-${index}`} // ensure unique keys
              href={`/property/${property.slug.current}`}
              className="flex-shrink-0 snap-start min-w-[75%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] max-w-sm bg-white rounded-lg shadow-md overflow-hidden transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-[250px]">
                <Image
                  src={`${urlFor(property.mainImage).url()}?w=390&h=290&fit=crop&crop=center`}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                {property.propertyType?.typeName && (
                  <div className="absolute bottom-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
                    {property.propertyType.typeName}
                  </div>
                )}
                {property.beachfront === "Yes" && (
                  <div className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
                    Beachfront
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="flex flex-col justify-between p-4 space-y-2">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 line-clamp-2 leading-snug">
                    {property.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-1 min-h-[1.25rem]">
                    {property.location?.locationName}, Nicaragua
                  </p>
                </div>

                {/* Price */}
                {property.sellPrice && (
                  <p className="text-lg font-bold text-green-700">
                    ${property.sellPrice?.toLocaleString()}
                  </p>
                )}

                {/* Features */}
                <div className="flex flex-wrap items-center text-sm text-gray-700 mt-2 gap-x-4 gap-y-2 border-t border-gray-200 pt-4">
                  {property.rooms && (
                    <div className="flex items-center gap-1">
                      <BedDouble className="h-4 w-4" />
                      <span>{property.rooms} beds</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center gap-1">
                      <Bath className="h-4 w-4" />
                      <span>{property.bathrooms} baths</span>
                    </div>
                  )}
                  {property.area_total && (
                    <div className="flex items-center gap-1">
                      <Ruler className="h-4 w-4" />
                      <span>{property.area_total.toLocaleString()} sqft</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
