import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineArrowBack } from "react-icons/md";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import RichTextComponent from "../../components/RichTextComponent";
import { client, client_with_token } from "../../lib/sanity.client";
import Map from "../../components/Map";

import ImageCarousel from "../../components/ImageCarousel";

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "propertiesRent" && slug.current == $pageSlug][0]{
    _id,
      ...,
      location->,
      propertyType->
    }`;

  const rentals = await client.fetch(query, { pageSlug });

  let allImages = rentals.images.concat(rentals.mainImage);

  if (!rentals) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        rentals,
        allImages,
      },
    };
  }
};

const RentalDetails = ({ rentals, imagaes }: any) => {
  const formRef = useRef();

  const submitContact = async (e: any) => {
    e.preventDefault();
    const newContact = {
      _type: "contactForm",
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[3].value,
      phone: e.target[2].value,
      message: e.target[4].value,
      property: {
        _type: "reference",
        _ref: rentals._id,
      },
    };
    client_with_token
      .create(newContact)
      .then((result) => {
        toast.success("Thank you for your message. We will get back shortly!", {
          duration: 3000,
        });
        formRef.current.reset();
      })
      .catch((error) => {
        toast.error("Something went wrong! Please try again");
      });
  };

  return (
    
    <div className="min-h-screen mt-10">
      <Head>
        <title>
          {rentals.propertyType.typeName} {" for Rent in "}{" "}
          {rentals.location.locationName}
          {", Nicaragua"}
        </title>

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
        
      </Head>

      <div className="space-y-10 flex flex-col px-4 justify-center items-center bg-gray-50">
        <div className="flex flex-col items-top justify-center xl:flex-row xl:space-x-4 max-w-[1200px]">
          <div className="w-full lg:w-[800px]">
            <div className="space-y-4">
              <Link href={"/rentals"} className="flex items-center text-[#484848] w-fit pl-[0.4rem] pr-[1rem] rounded">
                <MdOutlineArrowBack size={20} />
                <p className="text-lg ml-[0.1rem]">Back</p>
              </Link>
              <h1 className="text-[25px] leading-none sm:text-[35px] md:text-[35px] lg:text-[35px] text-normal mb-6 pb-6 text-normal">
                {rentals.propertyType.typeName} {" for Rent in "}{" "}
                {rentals.location.locationName}
                {", Nicaragua"}
              </h1>
            </div>
            
            {/* Slider */}
            <ImageCarousel images={rentals.images} />
            
            {/* Price */} {/* Details */}
            <div className="text-left pt-4">
            
              {/* Flash Text (On demand) */}
              <div className="flex items-center space-x-4">
                <p className="font-normal bg-[#ffebeb] text-[#ff0000] w-fit rounded px-2">
                  {rentals.flash_text}
                </p>
                
                {rentals.price_old && rentals.price && (
                  <p className="flex text-white bg-red-500 font-light rounded px-2">
                    {Math.round(((rentals.price_old - rentals.price) / rentals.price_old) * 100)}% discount
                  </p>
                )}
              </div>
            
              <div className="flex items-end space-x-4 pt-3">
                <h2 className="text-4xl font-normal">
                  {"$"}
                  {rentals.price}
                  {"/"}
                  {rentals.category === "month" ? "month" : "day"}
                </h2>

                {rentals.price_old && rentals.price && (
                  <h2 className="text-2xl font-thin line-through opacity-60">
                      {"$"}
                      {rentals.price_old}
                      {"/"}
                      {rentals.category === "month" ? "month" : "day"}
                    </h2>
                )}

              </div>

            {/* Title */}
              <div className="flex items-center text-xl font-normal text-gray-700 pt-3">
                <p>
                  {rentals.title}, {rentals.location.locationName}
                  {", Nicaragua"}
                </p>
              </div>

            {/* Mini details */}
              <div className="flex items-center text-gray-500 font-normal">
                {[
                  rentals.rooms && `${rentals.rooms} rooms`,
                  rentals.bathrooms && `${rentals.bathrooms} bathrooms`,
                  rentals.area_usable && `${rentals.area_usable} m²`,
                ]
                  .filter(Boolean) // Remove falsy values (null, undefined, 0, "")
                  .join(", ")}
              </div>
            </div>
            <div className="space-y-4 pt-6 pr-[1rem]">
              <p className="text-xl font-bold border-b pb-2 text-gray-700">
                Details
              </p>
              <div className="space-y-2">
                {rentals.location?.locationName && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">City:</p>
                    <p className="text-gray-500">
                      {rentals.location.locationName}
                    </p>
                  </div>
                )}

                {rentals.propertyType?.typeName && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Type:</p>
                    <p className="text-gray-500">
                      {rentals.propertyType.typeName}
                    </p>
                  </div>
                )}

                {rentals.beachfront === "Yes" && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Beachfront:</p>
                    <p className="text-gray-500">Yes</p>
                  </div>
                )}

                {rentals.lotSize && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Land Area:</p>
                    <p className="text-gray-500">{`${rentals.lotSize.toLocaleString()} m²`}</p>
                  </div>
                )}

                {rentals.area_total && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Property Area:</p>
                    <p className="text-gray-500">
                      {`${rentals.area_total.toLocaleString()} m²`}
                    </p>
                  </div>
                )}

                {rentals.rooms && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Rooms:</p>
                    <p className="text-gray-500">{rentals.rooms}</p>
                  </div>
                )}

                {rentals.bathrooms && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Bathrooms:</p>
                    <p className="text-gray-500">{rentals.bathrooms}</p>
                  </div>
                )}

                {rentals.parking === "Yes" && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">Parking:</p>
                    <p className="text-gray-500">Yes</p>
                  </div>
                )}

                {rentals.propertyId && (
                  <div className="flex justify-between border-b py-2">
                    <p className="font-medium text-gray-700">ID:</p>
                    <p className="text-gray-500">{rentals.propertyId}</p>
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
                  value={rentals.overview}
                  components={RichTextComponent}
                />

                {rentals.vrview ? (
                  <iframe
                    height="400px"
                    width="100%"
                    allowFullScreen="true"
                    src={rentals.vrview}
                  ></iframe>
                ) : (
                  ""
                )}

                <Link href={"/contact"} className="underline block sm:hidden">
                  Contact Us {">"}
                </Link>
              </div>
            </div>
            {/* Mapbox */}
            <div className="flex justify-center py-4">
              {/* <Image src={map} alt='map' /> */}
              <Map location={rentals.maplocation} />
            </div>
          </div>

          <div className="mt-6 lg:mt-[6.4rem] space-y-6 w-full mb-20">

            {/*CONTACT FORM*/}
          <div className="bg-white rounded-lg shadow-sm p-6 text-gray-800 space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <Toaster />
            <form
              className="space-y-4"
              id="property"
              ref={formRef}
              onSubmit={submitContact}
            >
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+1(500) 000 000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="your@company.com"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={5}
                  placeholder="Leave us a message..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
          
              <button
                type="submit"
                className="w-full py-3 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

            
            

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
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;
