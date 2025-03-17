import React, { useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import hero from "../public/assets/images/hero.png";
import Link from "next/link";
import Select, { SingleValue } from "react-select";

// ✅ Define the expected types for props
interface HeroProps {
  propertyType: { typeName: string }[];
  locations: { locationName: string }[];
}

// ✅ Option type for react-select
interface OptionType {
  value: string;
  label: string;
}

const Hero: React.FC<HeroProps> = ({ propertyType, locations }) => {
  const [location, setLocation] = useState<OptionType | null>(null);
  const [category, setCategory] = useState<OptionType | null>(null);

  const handleCategoryChange = (option: SingleValue<OptionType>) => {
    setCategory(option);
  };

  const handleLocationChange = (option: SingleValue<OptionType>) => {
    setLocation(option);
  };

  const locationOptions: OptionType[] = locations.map((item) => ({
    value: item.locationName,
    label: item.locationName,
  }));

  const typeOptions: OptionType[] = [
    { value: "rentals", label: "For Rent" },
    { value: "sales", label: "For Sale" },
  ];

  return (
    <section className="bg-primary py-16 flex flex-col justify-center items-center top-0 sm:mt-4 m--1 overflow-y-hidden z-10">
      <div className="flex flex-col space-y-5 lg:items-center justify-center max-w-7xl lg:flex-row p-4 relative items-center">
        {/* Heading + Description */}
        <div className="space-y-4 md:mb-20 sm:mb-10">
          <h1 className="text-[35px] lg:text-[64px] text-secondary font-bely uppercase leading-snug">
            YOUR LOCAL EXPERTS!
          </h1>
          <p className="text-secondary-light font-thin tracking-wider leading-[30px] text-[14px] sm:text-[21px] mb-4 pt-4 sm:pt-0">
            We have developed a deep understanding of the local market and are
            dedicated to helping our clients achieve their real estate goals.
          </p>
        </div>

        {/* Hero Image */}
        <Image
          src={hero}
          alt="Real estate search illustration"
          className="w-[300px] sm:w-[400px] md:w-[400px] lg:w-[500px] xl:w-[550px] 2xl:w-[650px]"
          priority
        />

        {/* Search Filter Section */}
        <div className="bg-[#F4F4F4] p-4 rounded mt-6 lg:absolute lg:w-2/3 w-full lg:bottom-14 lg:left-4 xl:bottom-20 2xl:bottom-34 max-w-[47rem] z-50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-4">
            <div className="relative mb-6 lg:mb-0 lg:w-full z-20">
              <Select
                value={category}
                onChange={handleCategoryChange}
                options={typeOptions}
                isSearchable={false}
                placeholder="Type"
              />
            </div>

            <div className="relative mb-6 lg:mb-0 lg:w-full z-10">
              <Select
                value={location}
                onChange={handleLocationChange}
                options={locationOptions}
                isSearchable={false}
                placeholder="Location"
                maxMenuHeight={145}
              />
            </div>

            <Link
              href={{
                pathname: category?.value === "sales" ? "/sales" : "/rentals",
                query: { loc: location?.value || "" },
              }}
            >
              <button className="bg-btn text-white flex items-center justify-center py-3 rounded-md lg:py-2 lg:px-4 w-full">
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
