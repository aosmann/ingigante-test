// pages/other.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Reference from "../components/Reference";
import { client } from "../lib/sanity.client";
import Head from "next/head";
import escrow from "../public/assets/images/escrow.jpg";
import eventplan from "../public/assets/images/eventplan.jpg";
import OtherSection from "../components/OtherSection";
import { GetStaticProps } from "next";

interface ReferenceType {
  _id: string;
  // add other fields if needed
}

interface OtherServiceType {
  _id: string;
  // add other fields if needed
}

interface Props {
  references: ReferenceType[];
  otherServices: OtherServiceType[];
}

export const getStaticProps: GetStaticProps = async () => {
  const references = await client.fetch(`*[_type == "references"]`);
  const otherServices = await client.fetch(`*[_type == "otherServices"] | order(ordering)`);
  return {
    props: {
      references,
      otherServices,
    },
    revalidate: 10,
  };
};

const Other = ({ references, otherServices }: Props) => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Services | Ingigante</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='bg-[url("/assets/images/consulting.png")] bg-no-repeat bg-cover py-52 text-secondary top-0'>
        <div className="flex flex-col justify-center items-center">
          <div className="max-w-7xl w-full">
            <h1 className=" text-center font-bely text-[30px] md:text-[60px]">
              OTHER SERVICES
            </h1>
            <p className="text-[16px] text-center">
              Professional services that assist clients in buying, selling,
              leasing, managing, and investing in real estate properties and
              much more.
            </p>
          </div>
        </div>
      </div>

      <section className="text-primary flex px-4 xl:justify-center">
        <div className="flex flex-col items-center lg:flex-row lg:space-x-10 mt-12 mb-12 max-w-7xl ">
          <Image
            src={escrow}
            alt="about"
            className="w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px]"
          />
          <div className="text-[17px] lg:w-[350px]">
            <h2 className="text-[35px] lg:text-[50px]">Escrow</h2>
            <p>
              An escrow service is a third-party intermediary that helps
              facilitate transactions between two parties by holding funds or
              assets until the transaction is complete...
            </p>
            <Link href="/contact" className="underline font-bold">
              Contact Us {">"}
            </Link>
          </div>
        </div>
      </section>

      <section className="text-primary flex px-4 xl:justify-center">
        <div className="flex flex-col items-center lg:flex-row-reverse lg:space-x-reverse lg:space-x-10 mt-12 mb-12 max-w-7xl ">
          <Image
            src={eventplan}
            alt="about"
            className="w-[350px] sm:w-[450px] md:w-[450px] lg:w-[500px] xl:w-[600px] 2xl:w-[650px]"
          />
          <div className="text-[17px] lg:w-[350px]">
            <h2 className="text-[35px] lg:text-[50px] leading-tight">Event Planning</h2>
            <p>
              Event planning is the process of coordinating and managing
              various aspects of an event...
            </p>
            <Link href="/contact" className="underline font-bold">
              Contact Us {">"}
            </Link>
          </div>
        </div>
      </section>

      <Reference references={references as any} />

    </div>
  );
};

export default Other;
