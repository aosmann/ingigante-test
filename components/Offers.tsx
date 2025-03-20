import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import RecentPropertiesSlider from "../components/RecentPropertiesSlider"; // Adjust the path based on your folder structure
import { getProperties } from "../lib/api";


export async function getStaticProps() {
  const properties = await getProperties({}); // or filter some recent ones
  return {
    props: { properties },
  };
}

const Offers = ({ properties }: any) => {
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute top-1/2 right-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      className="absolute top-1/2 left-[-25px] transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: properties.length >= 4 ? 4 : properties.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    initialSlide: 0,
    nextArrow: <NextArrow />, // Add custom next arrow
    prevArrow: <PrevArrow />, // Add custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <section className="text-primary flex flex-col bg-[#F4F4F4] justify-center items-center py-9 md:items-center">
      <div className="max-w-7xl mt-6 mb-10 px-4">
        
        <div>
            <RecentPropertiesSlider
            title="Featured Listings"
            description="Discover our featured properties"
            properties={properties}
            seeAllLink="/properties"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
