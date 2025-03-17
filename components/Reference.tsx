import React from "react";
import Slider from "react-slick";
import { GoQuote } from "react-icons/go";

interface ReferenceItem {
  _id: string;
  clientName: string;
  referenceText: string;
  propertyName: string;
}

interface ReferenceProps {
  references: ReferenceItem[];
}

const Reference: React.FC<ReferenceProps> = ({ references }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <section className="text-primary bg-white mt-10 mb-10 items-center justify-center xl:flex py-14">
      <div className="max-w-7xl px-4">
        <h1 className="text-[35px] lg:text-[50px]">References</h1>
        <p className="text-[17px] sm:text-[20px]">
          Here is what our customers say about us.
        </p>

        <Slider {...settings} className="mt-5 w-full">
          {references.map((reference) => (
            <div key={reference._id} className="px-2">
              <div className="bg-[#F4F4F4] p-6 h-full flex flex-col min-h-[300px]">
                <div className="flex-1">
                  <GoQuote className="text-3xl opacity-30 mb-4" />
                  <p className="text-justify">{reference.referenceText}</p>
                </div>
                <div className="pt-6 border-t border-gray-200 mt-6">
                  <h3 className="text-[20px] font-bold">{reference.clientName}</h3>
                  <p>{reference.propertyName}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reference;
