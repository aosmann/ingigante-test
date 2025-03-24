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
    <section className="relative py-16 overflow-hidden sm:mt-4 m--1">
  {/* Background Image + Gradient Overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#286153]/90 before:via-[#286153]/50 before:to-transparent before:z-10"
    style={{
      backgroundImage: `url("https://plus.unsplash.com/premium_photo-1682629632657-4ac307921295?q=80&w=2618&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
    }}
  />

  {/* Content Container */}
  <div className="relative z-20 max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-white text-center space-y-6">
    <h1 className="text-[32px] sm:text-[42px] lg:text-[56px] font-extrabold uppercase leading-snug">
      Your Local Experts!
    </h1>
    <p className="text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-xl">
      We have developed a deep understanding of the local market and are dedicated to helping our clients achieve their real estate goals.
    </p>
  </div>

  {/* Filters Box */}
  <div className="relative z-30 bg-white/90 backdrop-blur-sm mt-10 lg:mt-16 mx-auto rounded-lg shadow-md p-4 sm:p-6 w-full max-w-4xl">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-4 space-y-4 lg:space-y-0">
      {/* Type Dropdown */}
      <div className="w-full">
        <Select
          defaultValue={category}
          onChange={handleCategoryChange}
          options={typeOptions}
          placeholder="Property Type"
          className="text-sm"
          classNames={{
            control: () => 'border border-gray-300 rounded-md',
            menu: () => 'z-50',
          }}
        />
      </div>

      {/* Location Dropdown */}
      <div className="w-full">
        <Select
          defaultValue={location}
          onChange={handleLocationChange}
          options={locationOptions}
          placeholder="Location"
          className="text-sm"
          classNames={{
            control: () => 'border border-gray-300 rounded-md',
            menu: () => 'z-50',
          }}
        />
      </div>

      {/* CTA Button */}
      <div className="w-full lg:w-auto">
        <Link
          href={{
            pathname: category === "sales" ? "/sales" : "/rentals",
            query: { loc: location },
          }}
        >
          <button className="w-full lg:w-auto bg-btn hover:bg-btn/90 text-white font-semibold py-3 px-5 rounded-md flex items-center justify-center text-sm sm:text-base transition-all duration-200">
            <FiSearch className="mr-2" />
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
