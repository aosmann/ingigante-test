import Head from "next/head";
import Link from "next/link";
import { BedDouble, Bath, Ruler, Heart } from "lucide-react";
import React, { useEffect, useId, useRef, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { client } from "../lib/sanity.client";
import urlFor from "../lib/urlFor";
import Image from "next/image";
import Select from "react-select";
import { getPropertiesRent } from "../lib/api";
import { useRouter } from "next/router";
type SelectOption = { value: string; label: string };
import type { Property } from "../lib/api";



export const getStaticProps = async () => {
  const rentals =
    await client.fetch(`*[_type == "propertiesRent" && _id in path("drafts.**") == false && _id in path("live.**")]{
    ...,
    propertyType->,
    location->
  }`);

  const features =
    await client.fetch(`*[_type == "features" && _id in path("drafts.**") == false]{
    ...,
  }`);

  const types =
    await client.fetch(`*[_type == "propertyType" && _id in path("drafts.**") == false]{
    ...,
  }`);

  const locations =
    await client.fetch(`*[_type == "locations" && _id in path("drafts.**") == false]{
    ...,
  }`);

  return {
    props: {
      rentals,
      features,
      types,
      locations,
    },
  };
};

interface PropertyType {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  category: string;
  location: { locationName: string };
  propertyType: { typeName: string };
  rooms?: number;
  bathrooms?: number;
  area_total?: number;
  beachfront?: string;
  mainImage: any;
  _createdAt?: string;
  _updatedAt?: string;
}

interface RentalsPageProps {
  rentals: PropertyType[];
  features: any[];
  types: any[];
  locations: any[];
}


const Rentals = ({ rentals, features, types, locations }: RentalsPageProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const [category, setCategory] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [priceCategory, setPriceCategory] = useState<string | null>(null);
  const [feature, setFeature] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceMin, setPriceMin] = useState<number | null>(null);
  const [priceMax, setPriceMax] = useState<number | null>(null);
  const [sortByPrice, setSortByPrice] = useState<string | null>(null);
  const [sortDescending, setSortDescending] = useState<boolean | null>(null);

  const [featuresList, setFeaturesList] = useState(features);
  const [rentalsList, setRentalsList] = useState<any[]>(rentals);


  useEffect(() => {
    async function fetchProperties() {
      const data = (await getPropertiesRent({
        category,
        sortByPrice,
        sortDescending,
        searchQuery,
        priceMin,
        priceMax,
        location,
        feature,
        priceCategory,
      })) as Property[];
  
      let sortedData: Property[] = data;
  
      if (sortByPrice === "price") {
        sortedData = data.sort((a, b) => {
          const priceA = a.sellPrice || 0;
          const priceB = b.sellPrice || 0;
          return sortDescending ? priceB - priceA : priceA - priceB;
        });
      } else {
        sortedData = data.sort((a, b) => {
          const dateA = new Date(a._updatedAt ?? a._createdAt ?? "").getTime();
          const dateB = new Date(b._updatedAt ?? b._createdAt ?? "").getTime();
          return dateB - dateA;
        });
      }
  
      // ✅ Set rentalsList here
      setRentalsList(sortedData);
    }
  
    fetchProperties();
  }, [
    category,
    sortByPrice,
    sortDescending,
    searchQuery,
    priceMin,
    priceMax,
    location,
    feature,
    priceCategory,
  ]);
  

  function handlePriceCategoryChange(option: SelectOption | null) {
    setPriceCategory(option?.value ?? null);
  }
  
  function handleCategoryChange(option: SelectOption | null) {
    setCategory(option?.value || null);
  }
  
  function handleLocationChange(option: SelectOption | null) {
    setLocation(option?.value || null);
  }
  
  function handleSearchQuery() {
    if (inputRef.current) {
      setSearchQuery((inputRef.current as HTMLInputElement).value);
    }
  }
  
  function handlePriceMinChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPriceMin(parseInt(event.target.value) || null);
  }
  
  function handlePriceMaxChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPriceMax(parseInt(event.target.value) || null);
  }
  
  function handleFeature(option: SelectOption | null) {
    setFeature(option?.value || null);
  }
  
  function handleSortChange(option: SelectOption | null) {
    const value = option?.value;
    if (value === "price") {
      setSortByPrice("price");
      setSortDescending(false);
    } else if (value === "price-desc") {
      setSortByPrice("price");
      setSortDescending(true);
    }
  }

  const featureOptions = featuresList.map((item) => ({
    value: item.featureName,
    label: item.featureName,
  }));

  const typeOptions = types.map((item1) => ({
    value: item1.typeName,
    label: item1.typeName,
  }));

  const locationOptions = locations.map((item) => ({
    value: item.locationName,
    label: item.locationName,
    instanceId: useId(),
  }));

  const sortOptions: SelectOption[] = [
    { value: "price", label: "Price (low to high)" },
    { value: "price-desc", label: "Price (high to low)" },
  ];

  const priceCategories = [
    // { value: "sort", label: "Sort" },
    { value: "month", label: "Price / month" },
    { value: "day", label: "Price / day" },
  ];


  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
        <title>Rentals | Ingigante</title>
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
            <h1 className="text-[35px] font-bold">Search for Rentals</h1>
            <p>Vacation and long-term rentals</p>
          </div>

          <div className="space-y-4 mt-4 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-5">
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md  block w-full p-2.5"
              placeholder="Enter a keyword"
              ref={inputRef}
              // value={searchQuery || ""}
              // onChange={(event) =>
              //   setTimeout(() => setSearchQuery(event.target.value), 500)
              // }
            />
            <button
              // type="submit"
              onClick={handleSearchQuery}
              className="bg-btn text-white flex items-center justify-center py-2.5 rounded-md md:px-6 w-full md:w-1/6"
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
              <Select<SelectOption>
                defaultValue={typeOptions.find(opt => opt.value === category) || null}
                onChange={handleCategoryChange}
                options={typeOptions}
                placeholder="Type"
                isSearchable={false}
              />

              <Select<SelectOption>
                defaultValue={featureOptions.find(opt => opt.value === feature) || null}
                onChange={handleFeature}
                options={featureOptions}
                placeholder="Feature"
                isSearchable={false}
              />

              <Select<SelectOption>
                defaultValue={locationOptions.find(opt => opt.value === location) || null}
                onChange={handleLocationChange}
                options={locationOptions}
                placeholder="Location"
                isSearchable={false}
              />

              <Select<SelectOption>
                defaultValue={priceCategories.find(opt => opt.value === priceCategory) || null}
                onChange={handlePriceCategoryChange}
                options={priceCategories}
                placeholder="Price Category"
                isSearchable={false}
              />

              <div className="relative mb-6 md:mb-0 md:w-1/4">
                <p className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none opacity-40">
                  $
                </p>
                <input
                  type="number"
                  placeholder="Price max."
                  className="w-full pl-6 rounded-md border border-gray-300 "
                  onChange={handlePriceMaxChange}
                />
              </div>

              <div className="relative mb-6 md:mb-0 md:w-1/4">
              <Select<SelectOption>
                defaultValue={
                  sortByPrice
                    ? sortOptions.find((opt) =>
                        sortDescending ? opt.value === "price-desc" : opt.value === "price"
                      ) || null
                    : null
                }
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
            {rentalsList.length > 0 ? (
              rentalsList.map((property) => (
                <Link href={`/rental/${property.slug.current}`} className="block">
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
                      <div className="absolute bottom-3 left-3 bg-[#008975] text-white text-xs px-3 py-1 rounded-md">
                        {property.propertyType.typeName}
                      </div>

                      {/* Beachfront Tag (if applicable) */}
                      {property.beachfront === "Yes" && (
                        <div className="absolute bottom-3 right-3 bg-[#0171d0] text-white text-xs px-3 py-1 rounded-md">
                          Beachfront
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-between h-full p-4 space-y-2">
                      {/* Title */}
                      <h2 className="text-lg font-bold text-gray-900 line-clamp-2 leading-snug min-h-[3rem]">{property.title}</h2>

                      {/* Location */}
                      <p className="text-sm text-gray-600 line-clamp-1 min-h-[1.25rem]">{property.location.locationName}, Nicaragua</p>

                      {/* Price */}
                      <p className="text-lg font-bold text-[#008975]">
                        ${property.price.toLocaleString()} / {property.category === "month" ? "month" : "day"}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap items-center text-sm text-gray-700 mt-2 gap-x-4 gap-y-2">
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
              ))
            ) : (
              <h1>No Result!</h1>
            )}
          </div>
        </div>

      </div>
  </div>
  );
};

export default Rentals;
