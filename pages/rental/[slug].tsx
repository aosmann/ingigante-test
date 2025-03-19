// Refactored RentalDetails Page - Clean Layout Style
import { PortableText } from "@portabletext/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { MdOutlineArrowBack } from "react-icons/md";
import { BedDouble, Bath, Ruler, Car, Waves, Check } from "lucide-react";

import ImageCarousel from "../../components/ImageCarousel";
import RichTextComponent from "../../components/RichTextComponent";
import Map from "../../components/Map";
import { client, client_with_token } from "../../lib/sanity.client";

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;
  const query = `*[ _type == "propertiesRent" && slug.current == $pageSlug][0]{
    _id,
    ..., 
    location->,
    propertyType->
  }`;
  const rentals = await client.fetch(query, { pageSlug });
  let allImages = rentals?.images.concat(rentals?.mainImage);
  if (!rentals) return { props: null, notFound: true };
  return { props: { rentals, allImages } };
};

const RentalDetails = ({ rentals, allImages }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const submitContact = async (e) => {
    e.preventDefault();
    const newContact = {
      _type: "contactForm",
      firstName: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      property: { _type: "reference", _ref: rentals._id },
    };
    client_with_token.create(newContact)
      .then(() => {
        toast.success("Thank you for your message!", { duration: 3000 });
        formRef.current.reset();
      })
      .catch(() => toast.error("Something went wrong. Try again!"));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Head>
        <title>{rentals?.title} | Property for Rent in {rentals?.location?.locationName}, Nicaragua</title>
      </Head>

      {/* Back & Title Row */}
      <div className="space-y-4 mb-6">
        <Link href="/rentals" className="flex items-center text-gray-600 hover:text-primary">
          <MdOutlineArrowBack className="mr-2" /> Back
        </Link>
        <div className="flex justify-between items-center">
          <h1 className="text-lg text-gray-600">
            {rentals?.propertyType?.typeName} for Rent in {rentals?.location?.locationName}
          </h1>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative h-[400px]">
          <ImageCarousel images={allImages} />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Property Info */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{rentals?.title}</h2>
                <p className="text-2xl text-green-600 font-semibold">${rentals?.price}</p>
                <p className="text-gray-600">{rentals?.location?.locationName}, Nicaragua</p>
              </div>
              <div className="flex space-x-2">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                  {rentals?.propertyType?.typeName}
                </span>
                {rentals?.beachfront === "Yes" && (
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Beachfront
                  </span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y">
              {rentals?.rooms && (
                <div className="flex items-center text-gray-600"><BedDouble className="mr-2" />{rentals.rooms} beds</div>
              )}
              {rentals?.bathrooms && (
                <div className="flex items-center text-gray-600"><Bath className="mr-2" />{rentals.bathrooms} baths</div>
              )}
              {rentals?.area_total && (
                <div className="flex items-center text-gray-600"><Ruler className="mr-2" />{rentals.area_total} m²</div>
              )}
              {rentals?.parking === "Yes" && (
                <div className="flex items-center text-gray-600"><Car className="mr-2" />Parking</div>
              )}
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Description</h3>
              <div className="text-gray-700 text-sm">
                <PortableText value={rentals?.overview} components={RichTextComponent} />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Features</h3>
              <ul className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
                {rentals?.parking === "Yes" && (
                  <li className="flex items-center"><Car className="mr-2" />Parking Available</li>
                )}
                {rentals?.beachfront === "Yes" && (
                  <li className="flex items-center"><Waves className="mr-2" />Beachfront Property</li>
                )}
                {rentals?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center"><Check className="mr-2 text-primary" />{feature}</li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <Map location={rentals?.maplocation} />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Interested in this property?</h3>
            <Toaster />
            <form onSubmit={submitContact} ref={formRef} className="space-y-4">
              <input
                type="text" name="name" placeholder="Name" required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email" name="email" placeholder="Email" required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <input
                type="tel" name="phone" placeholder="Phone"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
              <textarea
                name="message" placeholder="Message" rows={4} required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button type="submit" className="w-full py-3 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90">
                Contact Agent
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentalDetails;