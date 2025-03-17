import Image from "next/image";
import contact1 from "../public/assets/images/contact.png";
import React, { useState, useRef } from "react";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import { client_with_token } from "../lib/sanity.client";

const contact = () => {
  const formRef = useRef();

const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const newContact = {
    _type: "contactForm",
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    message: formData.get("comment") as string,
  };

  client_with_token
    .create(newContact)
    .then(() => {
      toast.success("Thank you for your message. We will get back shortly!", {
        duration: 3000,
      });
      formRef.current?.reset(); // ✅ also safer
    })
    .catch(() => {
      toast.error("Something went wrong! Please try again");
    });
  };

  return (
    <div className="min-h-screen w-full bg-primary flex flex-col items-center justify-center px-4 py-4">
      <Head>
        <title>Contact | Ingigante</title>
        <link rel="icon" href="/favicon.ico" />

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
        
        {/* Google Analytics Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TWF5MYQK4E"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TWF5MYQK4E');
            `,
          }}
        />
        
      </Head>
      <div className="flex flex-row items-center justify-around min-h-screen max-w-7xl">
        <div>
          <h1 className="text-[20px] md:text-[45px] font-bely text-secondary">
            GET IN TOUCH
          </h1>
          <p className="text-secondary font-thin tracking-wider leading-[30px] text-[14px] sm:text-[21px] mb-4 line-h-2 pt-4 sm:pt-0">
            Our friendly team would love to hear from you
          </p>
          <Toaster />
          <form
            className="md:flex md:flex-col space-y-5 mt-10"
            id="contactForm"
            ref={formRef}
            onSubmit={submitContact}
          >
            <div className="md:flex md:flex-row justify-between space-y-5 md:space-y-0">
              <div className="flex flex-col px-1">
                <label htmlFor="firstName" className="text-secondary">
                  First Name
                </label>
                <input
                  name="firstName"
                  id="firstName"
                  placeholder="First Name*"
                  required
                  type={"text"}
                  minLength={3}
                  maxLength={25}
                />
              </div>
              <div className="flex flex-col px-1">
                <label htmlFor="lastName" className="text-secondary">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col px-1">
              <label htmlFor="email" className="text-secondary">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="your@company.com*"
                required
              />
            </div>
            <div className="flex flex-col px-1">
              <label htmlFor="phone" className="text-secondary">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+1(500) 000 000"
              />
            </div>
            <div className="flex flex-col px-1">
              <label htmlFor="comment" className="text-secondary">
                Message
              </label>
              <textarea
                id="comment"
                name="comment"
                required
                rows={10}
                placeholder="Leave us a message..."
              ></textarea>
            </div>
            {/* <div className="flex space-x-2 items-center">
              <input type="checkbox" name="check" id="check" />
              <p className="text-[#F4EDD3]">
                You agree to our friendly privacy policy.
              </p>
            </div> */}
            <button
              className="bg-secondary text-white w-full py-3 px-1"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="hidden md:block">
          <Image src={contact1} alt="contact" height={750} />
        </div>
      </div>
    </div>
  );
};

export default contact;
