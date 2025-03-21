import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, BedDouble, Bath, Ruler } from "lucide-react";

const Offers = ({ properties }: any) => {
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
    >
      <ChevronRight size={20} />
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="p-2 border border-gray-300 rounded-md hover:bg-gray-100"
    >
      <ChevronLeft size={20} />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    initialSlide: 0,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="text-primary flex flex-col bg-[#F4F4F4] justify-center items-center py-9 md:items-center">
      <div className="max-w-7xl mt-6 mb-10 px-4 w-full">
        <div className="flex items-center justify-between px-4 mb-6">
          <div>
            <h2 className="text-[35px] font-bold">Featured Listings</h2>
            <p className="text-[16px] opacity-60">
              Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/sales">
              <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 text-sm text-primary hover:text-primary/80">
                See All Listings
              </button>
            </Link>
            <PrevArrow />
            <NextArrow />
          </div>
        </div>

        <div className="max-w-7xl w-full overflow-hidden">
          <Slider {...settings}>
            {properties.map((property) => (
              <Link
                href={`/property/${property.slug.current}`}
                key={property._id}
                className="flex-shrink-0 min-w-[75%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] max-w-sm bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 snap-start"
              >
                <div className="relative w-full h-[250px]">
                  <Image
                    src={`${urlFor(property.mainImage).url()}?w=390&h=290&fit=crop&crop=center`}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  {property.propertyType?.typeName && (
                    <div className="absolute bottom-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
                      {property.propertyType.typeName}
                    </div>
                  )}
                  {property.beachfront === "Yes" && (
                    <div className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-md uppercase font-extrabold">
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

                  {property.sellPrice && (
                    <p className="text-lg font-bold text-green-700">
                      ${property.sellPrice?.toLocaleString()}
                    </p>
                  )}

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
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Offers;
