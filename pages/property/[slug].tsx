// @ts-ignore
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MdOutlineArrowBack } from "react-icons/md";
import Link from "next/link";
import { client, client_with_token } from "../../lib/sanity.client";
import RichTextComponent from "../../components/RichTextComponent";
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import urlFor from "../../lib/urlFor";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import toast, { Toaster } from "react-hot-toast";
import Map from "../../components/Map";
import { GetServerSideProps } from "next";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import ImageCarousel from "../../components/ImageCarousel";

function PropertyDetails({ property, images }: any) {
  const formRef = useRef<HTMLFormElement>(null);

  const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const newContact = {
      _type: "contactForm",
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement)?.value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement)?.value,
      email: (form.elements.namedItem("email") as HTMLInputElement)?.value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("comment") as HTMLTextAreaElement)?.value,
      property: {
        _type: "reference",
        _ref: property._id,
      },
    };

    try {
      await client_with_token.create(newContact);
      toast.success("Thank you for your message. We will get back shortly!", { duration: 3000 });
      formRef.current?.reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error("Something went wrong! Please try again");
    }
  };
  

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setSlideDirection("slide-left");
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setSlideDirection("slide-right");
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleThumbnailClick = (index: number) => {
    setSlideDirection(index > currentImageIndex ? "slide-left" : "slide-right");
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideDirection("");
    }, 500);

    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!isFullscreen) return;

      if (e.key === "Escape") {
        setIsFullscreen(false);
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        previousImage();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [isFullscreen]);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFullscreen]);

  return (
    <div className="min-h-screen mt-10">
      <Head>
        <title>
          {property.propertyType.typeName} {" for Sale in "}{" "}
          {property.location.locationName}
          {", Nicaragua"}
        </title>
      </Head>

      <div className="space-y-10 flex flex-col px-4 justify-center items-center">
        <div className="flex flex-col items-top justify-center xl:flex-row xl:space-x-4 max-w-[1200px]">
          <div className="w-full lg:w-[800px]">
            <div className="space-y-4">
              <Link href={"/sales"} className="flex items-center text-[#484848] bg-[#f1f1f1] w-fit pl-[0.4rem] pr-[1rem] rounded">
                <MdOutlineArrowBack size={20} />
                <p className="text-lg ml-[0.1rem]">Back</p>
              </Link>
              <h1 className="text-[25px] leading-none sm:text-[35px] md:text-[35px] lg:text-[35px] text-normal mb-6 pb-6 text-normal">
                {property.propertyType.typeName} {" for Sale in "}{" "}
                {property.location.locationName}
                {", Nicaragua"}
              </h1>
            </div>
            {/* Slider */}

            <ImageCarousel images={images} />

            {/* Price and title */}
            <div className="text-left pt-4">
              
              {/* Price */}
              <div className="flex items-center space-x-4">
                <h2 className="text-4xl py-3 font-normal">
                 {"$"}
                {property.sellPrice.toLocaleString()}
              </h2>
                
              </div> 


              {/* Flash Text (On demand) */}
              <div className="flex items-center space-x-4 pb-2">
                <p className="font-normal bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2">
                  {property.flash_text}
                </p>
                
                {property.price_old && (
                  <p className=" font-normal bg-[#dcefea] text-[#236253] w-fit rounded px-2">
                    {"Market value "}
                    {"$"}
                    {property.price_old.toLocaleString()}
                  </p>
                )}
                
                {/*
                {property.price_old && (
                  <p className="flex text-white bg-red-500 font-light rounded px-2">
                    {Math.round(((property.price_old - property.sellPrice) / property.price_old) * 100)}% discount
                  </p>
                )}  
                */}
              </div>


              {/* Title */}
              <div className="flex items-center text-xl font-normal text-gray-700">
                <p>
                  {property.title}, {property.location.locationName}
                  {", Nicaragua"}
                </p>
              </div>

               {/* Mini details */}
              <div className="flex items-center text-gray-500 font-normal">
                {[
                  property.rooms && `${property.rooms} rooms`,
                  property.bathrooms && `${property.bathrooms} bathrooms`,
                  property.area_total &&
                    `${property.area_total.toLocaleString()} m²`,
                ]
                  .filter(Boolean) // Remove falsy values (null, undefined, 0, "")
                  .join(", ")}
              </div>
            </div>

            {/* Mortgage */}
            {/*
            <div className="py-6 bg-[#F4F4F4] flex justify-between items-center rounded-md px-6 mt-6 mb-6">
              <div>
                <p>Estimated mortgage:</p>
                <h1>
                  {"$"}{property.sellPrice.toLocaleString()}
                </h1>
              </div>
              <Link href={"/contact"}>
                <button className="bg-btn text-white px-4 py-3.5 rounded-md">
                  Get Financing
                </button>
              </Link>
            </div>
            */}

            <div className="space-y-4 pt-6 pr-[1rem]">
              <p className="text-xl font-bold border-b pb-2 text-gray-700">
                Details
              </p>
              <div className="space-y-2">
                {property.location?.locationName && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">City:</p>
                    <p className="text-gray-500">
                      {property.location.locationName}
                    </p>
                  </div>
                )}

                {property.propertyType?.typeName && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Type:</p>
                    <p className="text-gray-500">
                      {property.propertyType.typeName}
                    </p>
                  </div>
                )}
                
                {/*
                {property.beachfront !== undefined && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Beachfront:</p>
                    <p className="text-gray-500">
                      {property.beachfront ? "Yes" : "No"}
                    </p>
                  </div>
                )}
                */}
                
                {property.beachfront === "Yes" && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Beachfront:</p>
                    <p className="text-gray-500">Yes</p>
                  </div>
                )}

                

                {property.lotSize && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Land Area:</p>
                    <p className="text-gray-500">{`${property.lotSize.toLocaleString()} m²`}</p>
                  </div>
                )}

                {property.area_total && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Property Area:</p>
                    <p className="text-gray-500">
                      {`${property.area_total.toLocaleString()} m²`}
                    </p>
                  </div>
                )}

                {property.rooms && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Rooms:</p>
                    <p className="text-gray-500">{property.rooms}</p>
                  </div>
                )}

                {property.bathrooms && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Bathrooms:</p>
                    <p className="text-gray-500">{property.bathrooms}</p>
                  </div>
                )}

                {property.parking === "Yes" && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Parking:</p>
                    <p className="text-gray-500">Yes</p>
                  </div>
                )}



                {property.propertyId && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">ID:</p>
                    <p className="text-gray-500">{property.propertyId}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4 pt-10 pb-4">
              <p className="text-xl font-bold border-b pb-2 text-gray-700">
                Description
              </p>
              <div className="space-y-2 text-gray-700">
                <PortableText
                  value={property.overview}
                  components={RichTextComponent}
                />

                {property.vrview ? (
                  <iframe
                    height="400px"
                    width="100%"
                    allowFullScreen="true"
                    src={property.vrview}
                  ></iframe>
                ) : (
                  ""
                )}

                <Link href={"/contact"} className="underline block sm:hidden">
                  Contact Us {">"}
                </Link>
              </div>
            </div>

            {/*
            <PortableText
              value={property.overview}
              components={RichTextComponent}
            />

            {property.vrview ? (
              <iframe
                height="400px"
                width="100%"
                allowFullScreen="true"
                src={property.vrview}
              ></iframe>
            ) : (
              ""
            )}

            <Link href={"/contact"} className="underline block sm:hidden">
              Contact Us {">"}
            </Link>
            */}

            {/* Mapbox */}
            <div className="flex justify-center py-10">
              {property.maplocation ? (
                <Map location={property.maplocation} />
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="mt-6 lg:mt-[6.4rem] space-y-6 w-full mb-20">
            <div className="bg-[#F4F4F4] rounded p-6 text-[#143D30] ">
              <p className="text-lg text-bold text-gray-700">Contact Us</p>
              <Toaster />
              <form
                className="space-y-4 mt-4"
                id="property"
                ref={formRef}
                onSubmit={submitContact}
              >
                <div className="flex flex-col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+1(500) 000 000"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your@company.com"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="comment">Message</label>
                  <textarea
                    id="comment"
                    name="comment"
                    rows={10}
                    placeholder="Leave us a message..."
                  ></textarea>
                </div>
                <button className="text-btn w-full py-3.5 border-[3px] rounded-md border-btn">
                  Send Message
                </button>
              </form>
            </div>

            
            {/*Promoted box*/}
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            <Link
              href="https://ingigante.com/rental/hotel-ingigante-rent"
              target="_blank"
              >
              {/* Image Section */}
              <div className="h-40 relative">
                <Image
                  src="/assets/images/hotel-cover.webp"
                  alt="Hotel Ingigante"
                  className="h-full w-full object-cover"
                  layout="fill" // Automatically fits container dimensions
                  objectFit="cover"
                />
              </div>
        
              {/* Content Section */}
              <div className="p-4">
                <div className="bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2">Promoted</div>
                <h3 className="text-lg font-bold text-gray-800 pt-2">Hotel Ingigante</h3>
                 <div className="flex items-center text-gray-500 font-normal mb-4">14 rooms, 14 bathrooms, 1,867.72 m²</div>
        
                {/* Buttons */}
                <div className="flex gap-2">
                  {/* Button to Check Hotel */}
                  <a
                    href="https://ingigante.com/rental/hotel-ingigante-rent"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-[#236253] text-green-800 py-2 rounded-md text-sm hover:bg-[#d4e8e3]"
                  >
                    Check hotel
                  </a>
        
                  {/* Button to Book Now */}
                  <a
                    href="https://us2.cloudbeds.com/reservation/MBptIV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-[#236253] text-white py-2 rounded-md text-sm hover:bg-[#134a3d]"
                  >
                    Book now
                  </a>
                </div>
              </div>
              </Link>
            </div>


            {/*Promoted box 2*/}
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                <Link
              href="https://ingigante.com/property/surf-ranch-popoyo-home"
              target="_blank"
              >
                  
                {/* Image Section */}
                <div className="h-40 relative">
                  <Image
                    src="/assets/images/promoted-2.webp"
                    alt="Surf Ranch Popoyo Home"
                    className="h-full w-full object-cover"
                    layout="fill" // Automatically fits container dimensions
                    objectFit="cover"
                  />
                </div>
          
                {/* Content Section */}
                <div className="p-4">
                  <div className="bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2">Hot SALE</div>
                  <h3 className="text-lg font-bold text-gray-800 pt-2">Surf Ranch Popoyo Home</h3>
                   <div className="flex items-center text-gray-500 font-normal mb-4">5 rooms, 4 bathrooms, 275 m²</div>
          
                  {/* Buttons */}
                  <div className="flex gap-2">
                    {/* Button to Check Hotel */}
                    <a
                      href="https://ingigante.com/property/surf-ranch-popoyo-home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-[#236253] text-white py-2 rounded-md text-sm hover:bg-[#134a3d]"
                    >
                      Buy Home
                    </a>
                  </div>
                </div>
                </Link>
              </div>


            

            {/*
            <div className="bg-[#F4F4F4] rounded p-6 space-y-4">
              <h3 className="text-lg">Brief characteristics</h3>
              <div className="text-lg space-y-2">
                <div className="flex space-x-1">
                  <p className="font-bold">Price:</p>
                  <p>${property.sellPrice.toLocaleString()}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-bold">ID:</p>
                  <p>{property.propertyId}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-bold">City:</p>
                  <p>{property.location.locationName}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-bold">Area:</p>
                  <p>{property.area_total} m&#178;</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-bold">Parking:</p>
                  <p>{property.parking}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-bold">Rooms:</p>
                  <p>{property.rooms}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-bold">Bathrooms:</p>
                  <p>{property.bathrooms}</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-bold">Property Size:</p>
                  <p>{property.propertySize} m&#178;</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-bold">Lot Size:</p>
                  <p>{property.lotSize} m&#178;</p>
                </div>
                <div className="flex space-x-1">
                  <p className="font-bold">Beachfront:</p>
                  <p>{property.beachfront}</p>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={toggleFullscreen}
            className="absolute top-4 right-4 text-white z-50 hover:opacity-75 transition-opacity"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={previousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-50 hover:scale-110 transition-transform"
          >
            <AiFillLeftCircle size={40} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-50 hover:scale-110 transition-transform"
          >
            <AiFillRightCircle size={40} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div className="relative w-full h-full">
              <Image
                src={urlFor(images[currentImageIndex].asset).url()}
                alt=""
                fill
                className={`object-contain transition-transform duration-500 ${slideDirection}`}
              />
            </div>
          </div>

          {/* Fullscreen thumbnails */}
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex justify-center gap-2 px-4 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={image._ref}
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-md transform transition-all duration-200 hover:scale-105 ${
                    currentImageIndex === index
                      ? "ring-2 ring-offset-2 ring-blue-500 scale-105"
                      : "hover:ring-1 hover:ring-blue-300"
                  }`}
                >
                  <Image
                    src={urlFor(image.asset).url()}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "properties" && slug.current == $pageSlug][0]{
    _id,
    ...,
    location->,
    propertyType->
  }`;

  const property = await client.fetch(query, { pageSlug });

  let allImages = property.images.concat(property.mainImage);

  if (!property) {
    return {
      redirect: {
        destination: "/", // Redirects to the homepage
        permanent: false, // Temporary redirect
      },
    };
  }
  
  else {
    return {
      props: {
        property,
        images: allImages,
        // images: property.images,
        // city: property.city,
        // location: property.location,
        // propertyType: property.propertyType,
        // mainImage: property.mainImage,
        // images: property.images,
        // pricePerNight: property.pricePerNight,
        // beds: property.beds,
        // bedrooms: property.bedrooms,
        // description: property.description,
        // host: property.host,
        // reviews: property.reviews,
      },
    };
  }
};

export default PropertyDetails;
