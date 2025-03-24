import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import hero from "../public/assets/images/hero.png";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import Link from "next/link";

import Select from "react-select";

const Hero = ({ propertyType, locations }) => {
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);

  // const [searchCat, setSearchCat] = useState(null);

  function handleCategoryChange(event) { 
    setCategory(event.value);
  }

  function handleLocationChange(event) {
    setLocation(event.value);
  }

  const locationOptions = locations.map((item) => ({
    value: item.locationName,
    label: item.locationName,
  }));

  const typeOptions = [
    { value: "rentals", label: "For Rent" },
    { value: "sales", label: "For Sale" },
  ];

  return (
    <section
        className="relative bg-primary py-16 flex flex-col justify-center items-center top-0 sm:mt-4 m--1 overflow-y-hidden z-10 before:absolute before:inset-0 before:bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3273&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] before:bg-cover before:bg-center before:opacity-40 before:z-0 before:content-[''] before:bg-gradient-to-r before:from-black/80 before:via-black/40 before:to-transparent">
        <div className="relative z-10 flex flex-col space-y-5 lg:items-center justify-center max-w-7xl lg:flex-row p-4 items-center">
          <div className="space-y-4 md:mb-20 sm:mb-10 text-white">
            <h1
              className="text-[35px] lg:text-[64px] font-bely uppercase leading-snug"
              id="customFont"
            >
              YOUR LOCAL EXPERTS!
            </h1>
            <p className="font-thin tracking-wider leading-[30px] text-[14px] sm:text-[21px] mb-4 pt-4 sm:pt-0">
              We have developed a deep understanding of the local market and are
              dedicated to helping our clients achieve their real estate goals.
            </p>
          </div>

          <Image
            src={hero}
            alt="hero"
            className="w-[300px] sm:w-[400px] md:w-[400px] lg:w-[500px] xl:w-[550px] 2xl:w-[650px] relative z-10"
          />

          <div className="bg-[#F4F4F4] p-4 rounded mt-6 lg:absolute lg:w-2/3 w-full lg:bottom-14 lg:left-4 xl:bottom-20 2xl:bottom-34 max-w-[47rem] z-50">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-4 ">
              <div className="relative mb-6 lg:mb-0 lg:w-full z-20">
                <Select
                  defaultValue={category}
                  onChange={handleCategoryChange}
                  options={typeOptions}
                  isSearchable={false}
                  placeholder="Type"
                />
              </div>

              <div className="relative mb-6 lg:mb-0 lg:w-full z-10">
                <Select
                  defaultValue={location}
                  onChange={handleLocationChange}
                  options={locationOptions}
                  isSearchable={false}
                  placeholder="Location"
                  maxMenuHeight={145}
                />
              </div>

              <Link
                href={{
                  pathname: category == "sales" ? "/sales" : "/rentals",
                  query: { loc: location },
                }}
              >
                <button className="bg-btn text-white flex items-center justify-center py-3 rounded-md lg:py-2 lg:px-4 w-full">
                  <span>
                    <FiSearch className="mr-4" />
                  </span>
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

  );
};

export default Hero;
