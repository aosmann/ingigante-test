import React, { useEffect, useRef, useState, useId } from "react";
import Image from "next/image";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import urlFor from "../lib/urlFor";
import Link from "next/link";
import Head from "next/head";

import { getProperties } from "../lib/api";
import { useRouter } from "next/router";

import Select from "react-select";
import { client } from "../lib/sanity.client";
import { GetStaticProps } from "next";
import type { Property } from "../lib/api";
import { ChangeEvent } from "react";
import { SingleValue } from "react-select";
type SelectOption = { value: string; label: string };


export const getStaticProps: GetStaticProps = async () => {
  const propertiesList =
    await client.fetch(`*[_type == "properties" && _id in path("drafts.**") == false]{
    ...,
    propertyType->,
    location->
  }`);

  const types =
    await client.fetch(`*[_type == "propertyType" && _id in path("drafts.**") == false]{
    ...,
  }`);

  const locations =
    await client.fetch(`*[_type == "locations" && _id in path("drafts.**") == false]{
    ...,
  }`);

  console.log(propertiesList);

  return {
    props: {
      propertiesList,
      types,
      locations,
    },
    revalidate: 10,
  };
};


interface SalesPageProps {
  propertiesList: Property[];
  types: any[];
  locations: any[];
}

function sales({ propertiesList, types, locations }: SalesPageProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const locationOptions = locations.map((item) => ({
    value: item.locationName,
    label: item.locationName,
    instanceId: useId(),
  }));

  const typeOptions = types.map((item1) => ({
    value: item1.typeName,
    label: item1.typeName,
    instanceId: useId(),
  }));

  const sortOptions = [
    { value: "sort", label: "Sort", instanceId: useId() },
    {
      value: "sellPrice",
      label: "Price (low to high)",
      instanceId: useId(),
    },
    {
      value: "sellPrice-desc",
      label: "Price (high to low)",
      instanceId: useId(),
    },
  ];

  const router = useRouter();

  const [properties, setProperties] = useState(propertiesList);
  const [searchQuery, setSearchQuery] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [minBathrooms, setMinBathrooms] = useState(null);
  const [sortByPrice, setSortByPrice] = useState(null);
  const [sortDescending, setSortDescending] = useState(null);
  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [category, setCategory] = useState<string | null>(
    typeof router.query.cat === 'string' ? router.query.cat : null
  );
    const [location, setLocation] = useState<string | null>(
    typeof router.query.loc === 'string' ? router.query.loc : null
  );
  

  useEffect(() => {
    async function fetchProperties() {
      const data: Property[] = await getProperties({
        category,
        minBedrooms,
        minBathrooms,
        sortByPrice,
        sortDescending,
        searchQuery,
        priceMin,
        priceMax,
        location,
      });

      // Sort data by `updatedAt` or `createdAt` in descending order
      const sortedData = data.sort((a, b) => {
        const dateA = new Date(a._updatedAt ?? a._createdAt ?? "").getTime();
        const dateB = new Date(b._updatedAt ?? b._createdAt ?? "").getTime();
        return dateB - dateA; // Descending order
      });
      
      setProperties(data);
    }
    fetchProperties();
  }, [
    category,
    minBedrooms,
    minBathrooms,
    sortByPrice,
    sortDescending,
    searchQuery,
    priceMin,
    priceMax,
    location,
  ]);

  

  function handleCategoryChange(event: SingleValue<SelectOption>) {
    setCategory(event?.value ?? null);
  }
  
  function handleLocationChange(event: SingleValue<SelectOption>) {
    setLocation(event?.value ?? null);
  }
  
  function handleSearchQuery() {
    if (inputRef.current) {
      setSearchQuery(inputRef.current.value);
    }
  }
  
  function handlePriceMinChange(event: ChangeEvent<HTMLInputElement>) {
    setPriceMin(parseInt(event.target.value) || null);
  }
  
  function handlePriceMaxChange(event: ChangeEvent<HTMLInputElement>) {
    setPriceMax(parseInt(event.target.value) || null);
  }
  
  function handleSortChange(event: SingleValue<SelectOption>) {
    const value = event?.value ?? null;
  
    if (value === "sellPrice") {
      setSortByPrice("sellPrice");
      setSortDescending(false);
    } else if (value === "sellPrice-desc") {
      setSortByPrice("sellPrice");
      setSortDescending(true);
    } else {
      setSortByPrice(null);
      setSortDescending(null);
    }
  }
  

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Sales | Ingigante</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Google Tag Manager */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11184375903"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-11184375903');
              `,
            }}
          />
        
        {/* Google Analytics Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TWF5MYQK4E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TWF5MYQK4E');
            `,
          }}
        />
        
      </Head>
      <div className="bg-[#F4F4F4] w-full flex justify-center px-4 py-14">
        <div className="max-w-7xl w-full px-4">
          <div className="flex flex-col items-center text-secondary">
            <h1 className="text-[35px] text-center font-bold">Search for Properties</h1>
            <p>Browse our exclusive listings</p>
          </div>

          <div className="space-y-4 mt-4 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-5">
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5"
              placeholder="Enter a keyword"
              ref={inputRef}
              // value={searchQuery || ""}
              // onChange={(event) =>
              //   setTimeout(() => setSearchQuery(event.target.value), 1500)
              // }
            />
            <button
              // type="submit"
              className="bg-btn text-white border-0 flex items-center justify-center py-2.5 rounded-md md:px-6 w-full md:w-1/6"
              onClick={handleSearchQuery}
            >
              <span>
                <FiSearch className="mr-4" />
              </span>
              Search
            </button>
          </div>

          <p className="text-center mt-4 mb-4 opacity-50">Filter Settings</p>
          <div className="md:flex md:flex-row md:space-x-4">
            <div className="relative mb-6 md:mb-0 md:w-1/4">
              <Select
                defaultValue={category}
                onChange={handleCategoryChange}
                options={typeOptions}
                placeholder="Type"
                isSearchable={false}
                // value={category}
              />
              
            </div>
            <div className="relative mb-6 md:mb-0 md:w-1/4">
              <Select
                defaultValue={location}
                onChange={handleLocationChange}
                options={locationOptions}
                placeholder="Location"
                isSearchable={false}
                // value={loc}
              />
              
            </div>

            
            <div className="relative mb-6 md:mb-0 md:w-1/4">
              <p className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none opacity-40">
                $
              </p>
              <input
                type="number"
                placeholder="Price min."
                className="w-full pl-6 rounded-md border border-gray-300"
                onChange={handlePriceMinChange}
              />
            </div>
            <div className="relative mb-6 md:mb-0 md:w-1/4">
              <p className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none opacity-40">
                $
              </p>
              <input
                type="number"
                placeholder="Price max."
                className="w-full pl-6 rounded-md border border-gray-300"
                onChange={handlePriceMaxChange}
              />
            </div>

            <div className="relative mb-6 md:mb-0 md:w-1/4">
              <Select
                // defaultValue={feature}
                onChange={handleSortChange}
                options={sortOptions}
                placeholder="Sort"
                isSearchable={false}
              />
              
            </div>
          </div>
          
        </div>
      </div>
      <div className="max-w-7xl w-full mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 px-4">
          {properties.length > 0 ? (
            properties.map((property) => (
              <div
                className="relative max-w-sm rounded overflow-hidden shadow-md mx-auto h-full flex flex-col"
                key={property._id}
              >
                <Link
                  href={`/property/${property.slug.current}`}
                  key={property._id}
                >
                  <Image
                    src={`${urlFor(
                      property.mainImage
                    ).url()}?w=390&h=290&fit=crop&crop=center`}
                    alt="card"
                    className="object-cover lg:object-center"
                    width={390}
                    height={290}
                    priority
                  />
                  
                  <div className="px-6 py-4">
                    <h1 className="font-bold text-[20px]">{property.title}</h1>
                  </div>
                  
                  <div className="px-6 py-4 text-[17px] mt-auto">
                    <p className="text-secondary">
                      {"$"}{property.sellPrice.toLocaleString()}
                    </p>
                    <p>{property.location.locationName}</p>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <h1>No Result!</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default sales;
