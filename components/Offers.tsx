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
        {/* 
        <div className="mb-10 px-4">
          <h2 className="text-[35px] font-bold">Featured Listings</h2>
          <p className="text-[16px] opacity-60">
            Fulfill your career dreams, enjoy all the achievements of the city
            center and luxury housing to the fullest
          </p>
        </div>*/}
        {/* 
        <div className="max-w-7xl w-screen space-x-4">
          <Slider {...settings}>
            {properties.map((property) => (
              <Link
                href={`/property/${property.slug.current}`}
                key={property._id}
              >
                <div className="max-w-sm h-[450px] rounded overflow-hidden mx-auto bg-white">
                  <div className="h-[290px]">
                    <Image
                      src={`${urlFor(
                        property.mainImage
                      ).url()}?w=390&h=290&fit=crop&crop=center`}
                      alt="card"
                      className="object-cover lg:object-center w-full h-full"
                      width={390}
                      height={290}
                    />
                  </div>
                  <div className="px-6 py-4 text-left h-[80px]">
                    <h1 className="text-[20px] line-clamp-2">
                      {property.title}
                    </h1>
                  </div>
                  <div className="px-6 py-4 text-[17px] text-left">
                    <p className="opacity-60 pb-1">
                      {property.propertyType.typeName}
                    </p>
                    <p className="opacity-60 pb-1">
                      in {property.location.locationName}
                    </p>
                    <p className="text-secondary font-bold">
                      {"$"}
                      {property.sellPrice.toLocaleString()}
                    </p>
                  </div>
                </div>

                
              </Link>
            ))}
          </Slider>
        </div>
        <div className="flex items-center justify-center mt-10">
          <Link href={"/sales"}>
            <button className="py-2 px-4 border-primary border-2 rounded-md text-[16px]">
              Show Sale Listings
            </button>
          </Link>
        </div>
        */}
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
