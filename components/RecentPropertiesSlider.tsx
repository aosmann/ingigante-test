//RecentPropertiesSlider.tsx 
//test
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, BedDouble, Bath, Ruler } from "lucide-react";

import React, { useEffect, useRef, useState, useId } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import Head from "next/head";
import urlFor from "../lib/urlFor";

import { useRouter } from "next/router";

import { client } from "../lib/sanity.client";
import { GetStaticProps } from "next";

export async function getRecentPropertiesSale(limit = 5) {
    const query = `*[_type == "properties"] | order(_createdAt desc)[0...$limit]{
      ...,
      location->,
      propertyType->
    }`;
    const params = { limit };
    const response = await client.fetch(query, params);
    return response;
  }

 
interface Property {
    _id: string;
    title: string;
    sellPrice: number;
    location: { locationName: string };
    mainImage: any;
    propertyType?: { typeName: string };
    beachfront?: string;
    rooms?: number;
    bathrooms?: number;
    area_total?: number;
    slug?: { current: string };
  }
   
  

interface RecentPropertiesSliderProps {
  title: string;
  description: string;
  properties: Property[];
  seeAllLink?: string;
}


const RecentPropertiesSlider: React.FC<RecentPropertiesSliderProps> = ({ title, description, properties, seeAllLink }) => {
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
      <div className="flex items-center justify-between mb-4 border-t border-gray-200 pt-6">
        <div className="items-center gap-3">
          <p className="text-xl font-semibold text-gray-800">{title}</p>
          <p className="opacity-60">{description}</p>
        </div>

        <div className="flex items-center gap-3">
            {seeAllLink && (
                <Link href={seeAllLink}>
                    <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm text-primary hover:text-primary/80">
                    See All Listings
                    </button>
                </Link>
            )}
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

      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 scrollbar-hide"
      >
        {properties.map((property) => (
          <Link
            key={property._id}
            href={`/property/${property.slug?.current}`}
            className="flex-shrink-0 min-w-[75%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 snap-start"
          >
            <div className="relative">
                <Image
                    src={`${urlFor(property.mainImage).url()}?w=390&h=290&fit=crop&crop=center`}
                    alt={property.title}
                    className="object-cover w-full h-[250px]"
                    width={390}
                    height={290}
                />


              <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
                <Heart className="h-5 w-5 text-gray-600" />
              </button>
              {property.propertyType?.typeName && (
                <div className="absolute bottom-3 left-3 bg-[#008975] text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
                  {property.propertyType.typeName}
                </div>
              )}
              {property.beachfront === "Yes" && (
                <div className="absolute bottom-3 right-3 bg-[#0171d0] text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
                  Beachfront
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between h-full p-4 space-y-2">
              <div>
                <h2 className="text-lg font-bold text-gray-900 line-clamp-2 leading-snug">{property.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-1 min-h-[1.25rem]">
                    {property.location?.locationName}, Nicaragua
                </p>

              </div>
              <div className="mt-auto">
                 <p className="text-lg font-bold text-[#008975]">
                    ${property.sellPrice?.toLocaleString()} {/* Not property.price */}
                 </p>

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
                      <span>{property.area_total} sqft</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPropertiesSlider;
