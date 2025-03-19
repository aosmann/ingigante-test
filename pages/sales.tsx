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

function sales({ propertiesList, types, locations }) {
  const inputRef = useRef(null);

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
  const [category, setCategory] = useState(
    router.query ? router.query.cat : null
  );
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [minBathrooms, setMinBathrooms] = useState(null);

  const [sortByPrice, setSortByPrice] = useState(null);
  const [sortDescending, setSortDescending] = useState(null);
  // const [price, setPrice] = useState(null);

  const [priceMin, setPriceMin] = useState(null);
  const [priceMax, setPriceMax] = useState(null);
  const [location, setLocation] = useState(
    router.query ? router.query.loc : null
  );

  useEffect(() => {
    async function fetchProperties() {
      const data = await getProperties({
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
      const dateA = new Date(a._updatedAt || a._createdAt);
      const dateB = new Date(b._updatedAt || b._createdAt);
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

  function handleCategoryChange(event) {
    setCategory(event.value);
  }

  function handleLocationChange(event) {
    setLocation(event.value);
  }

  function handleSearchQuery(event) {
    setSearchQuery(inputRef.current.value);
    // setSearchQuery(event.target.value);
  }

  // function handleBedroomsChange(event) {
  //   setMinBedrooms(parseInt(event.target.value) || null);
  // }

  // function handleBathroomsChange(event) {
  //   setMinBathrooms(parseInt(event.target.value) || null);
  // }

  function handlePriceMinChange(event) {
    setPriceMin(parseInt(event.target.value) || null);
  }

  function handlePriceMaxChange(event) {
    setPriceMax(parseInt(event.target.value) || null);
  }

  function handleSortChange(event) {
    const value = event.value;
    setSortByPrice(value);
    setSortDescending(value);
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Head>
          <title>Properties for Sale | Ingigante</title>
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
              {/* <select
                className="w-full block bg-white border border-btn p-2.5 rounded-md text-sm appearance-none md:pr-20"
                //   value={category || ''}
                onChange={handleLocationChange}
              >
                <option value={""}>Location</option>
                <option value={"Playa Gigante"}>Playa Gigante</option>
                <option value={"Guasacate"}>Guasacate</option>
                <option value={"Jiquelite"}>Jiquelite</option>
                <option value={"Popoyo"}>Popoyo</option>
              </select> */}
              {/* <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <FiChevronDown color='primary' className='opacity-30' />
              </div> */}
            </div>

            {/* <div className='relative mb-6 md:mb-0 md:w-1/4'>
              <select
                value={minBedrooms || 'Bedrooms'}
                onChange={handleBedroomsChange}
                className='w-full block bg-white border border-btn p-2.5 rounded-md text-sm appearance-none md:pr-20'
              >
                <option value={'Bedrooms'}>Bedrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <FiChevronDown color='primary' className='opacity-30' />
              </div>
            </div>
            <div className='relative mb-6 md:mb-0 md:w-1/4'>
              <select
                value={minBathrooms || 'Bathrooms'}
                onChange={handleBathroomsChange}
                className='w-full block bg-white border border-btn p-2.5 rounded-md text-sm appearance-none md:pr-20'
              >
                <option>Bathrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <FiChevronDown color='primary' className='opacity-30' />
              </div>
            </div> */}
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
              {/* <select
                value={
                  sortByPrice
                    ? sortDescending
                      ? "sellPrice-desc"
                      : "sellPrice"
                    : "sort"
                }
                onChange={handleSortChange}
                className="w-full block bg-white border border-btn p-2.5 rounded-md text-sm appearance-none md:pr-20"
              >
                <option value="sort">Sort By</option>
                <option value="sellPrice">Price (low to high)</option>
                <option value="sellPrice-desc">Price (high to low)</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FiChevronDown color="primary" className="opacity-30" />
              </div> */}
            </div>
          </div>
          {/* <div className='md:mt-12 mb-6'>
            <div className=''>
              <input
                type='range'
                name='price'
                min={0}
                max={1000000}
                step={50000}
                className='w-full'
                onMouseUp={handlePriceChange}
                onTouchEnd={handlePriceChange}
              />
            </div>
            <div className='flex flex-row justify-between'>
              <p>0 {'$'}</p>
              <p>1 000 000 {'$'}</p>
            </div>
          </div> */}
        </div>
      </div>


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
}

export default sales;
