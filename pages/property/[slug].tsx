// ✅ FULL PropertyDetails Page Redesign Based on RentalDesign
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineArrowBack } from "react-icons/md";
import { client, client_with_token } from "../../lib/sanity.client";
import Map from "../../components/Map";
import ImageCarousel from "../../components/ImageCarousel";
import RichTextComponent from "../../components/RichTextComponent";
import { Car, Bath, BedDouble, Ruler } from "lucide-react";

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = `*[ _type == "properties" && slug.current == $pageSlug][0]{ _id, ..., location->, propertyType-> }`;
  const property = await client.fetch(query, { pageSlug });
  let allImages = property?.images?.concat(property?.mainImage) || [];

  if (!property) return { props: null, notFound: true };

  return {
    props: {
      property,
      allImages,
    },
  };
};

const PropertyDetails = ({ property, allImages }: any) => {
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Head>
        <title>{property.propertyType.typeName} for Sale in {property.location.locationName}, Nicaragua</title>
      </Head>

      <div className="space-y-4 mb-6">
        <Link href="/sales" className="flex items-center text-gray-600 hover:text-primary">
          <MdOutlineArrowBack className="mr-2" /> Back
        </Link>
        <h1 className="text-2xl text-gray-600">{property.propertyType.typeName} for Sale in {property.location.locationName}</h1>
      </div>

      <div className="space-y-4 mb-6">
        <ImageCarousel images={allImages} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h2>
              <p className="text-xl text-primary font-semibold">${property.sellPrice?.toLocaleString()}</p>
              <p className="text-gray-600">{property.location.locationName}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{property.propertyType.typeName}</span>
                {property.beachfront === "Yes" && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Beachfront</span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6 text-gray-700 py-6 border-y border-gray-200 text-sm">
                {property.rooms && (
                  <div className="flex items-center gap-2">
                    <BedDouble className="h-5 w-5" />
                    <span>{property.rooms} Rooms</span>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5" />
                    <span>{property.bathrooms} Bathrooms</span>
                  </div>
                )}
                {property.area_total && (
                  <div className="flex items-center gap-2">
                    <Ruler className="h-5 w-5" />
                    <span>{property.area_total} m² total</span>
                  </div>
                )}
                {property.parking === "Yes" && (
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5" />
                    <span>Parking</span>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
                <div className="text-gray-700 text-sm leading-relaxed">
                  <PortableText value={property.overview} components={RichTextComponent} />
                </div>
                {property.vrview && (
                  <div className="mt-4">
                    <iframe width="100%" height="400" src={property.vrview} allowFullScreen></iframe>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Map</h2>
                <Map location={property.maplocation} />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
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
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
