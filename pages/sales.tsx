import React, { useEffect, useRef, useState, useId } from "react";
import Image from "next/image";
import { Heart, BedDouble, Bath, Ruler } from "lucide-react";
import urlFor from "../lib/urlFor";
import Link from "next/link";
import Head from "next/head";
import { client } from "../lib/sanity.client";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const propertiesList = await client.fetch(`*[_type == "properties" && _id in path("drafts.**") == false]{
    ...,
    propertyType->,
    location->
  }`);

  return {
    props: { propertiesList },
    revalidate: 10,
  };
};

const Sales = ({ propertiesList }) => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Properties for Sale | Ingigante</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-7xl w-full mt-14 px-4">
        <h1 className="text-[35px] text-center font-bold text-gray-800">Properties for Sale</h1>
        <p className="text-center opacity-70">Browse our exclusive listings</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {propertiesList.length > 0 ? (
            propertiesList.map((property) => (
              <Link key={property._id} href={`/property/${property.slug.current}`} className="block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition hover:shadow-xl duration-300 h-full flex flex-col justify-between">
                  {/* Image Section */}
                  <div className="relative">
                    <Image
                      src={`${urlFor(property.mainImage).url()}?w=390&h=290&fit=crop&crop=center`}
                      alt={property.title}
                      className="object-cover w-full h-[250px]"
                      width={390}
                      height={290}
                      priority
                    />

                    {/* Favorite Button */}
                    <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition">
                      <Heart className="h-5 w-5 text-gray-600" />
                    </button>

                    {/* Property Type Badge */}
                    <div className="absolute bottom-3 left-3 bg-[#008975] text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
                      {property.propertyType.typeName}
                    </div>

                    {/* Beachfront Tag (if applicable) */}
                    {property.beachfront === "Yes" && (
                      <div className="absolute bottom-3 right-3 bg-[#0171d0] text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
                        Beachfront
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between h-full p-4 space-y-2">
                    <div>
                      {/* Title */}
                      <h2 className="text-lg font-bold text-gray-900 line-clamp-2 leading-snug">
                        {property.title}
                      </h2>

                      {/* Location */}
                      <p className="text-sm text-gray-600 line-clamp-1 min-h-[1.25rem]">
                        {property.location.locationName}, Nicaragua
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mt-auto">
                      <p className="text-lg font-bold text-[#008975]">
                        ${property.sellPrice.toLocaleString()}
                      </p>

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
                            <span>{property.area_total} sqft</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <h1 className="text-center text-gray-500">No Results Found!</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sales;
