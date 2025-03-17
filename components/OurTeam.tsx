import React from "react";
import urlFor from "../lib/urlFor";
import Image from "next/image";

interface TeamMember {
  _id: string;
  name: string;
  position: string;
  image: any; // Replace `any` with the actual image type if known (e.g., SanityImageSource)
}

interface OurTeamProps {
  teamMembers: TeamMember[];
}

const OurTeam: React.FC<OurTeamProps> = ({ teamMembers }) => {
  return (
    <section className="text-primary flex flex-col bg-white justify-center items-center">
      <div className="max-w-7xl mt-10 mb-10 px-4 text-center">
        <div className="mb-10">
          <h1 className="text-[35px] sm:text-[50px]">Our Team</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-16 mb-8 sm:mb-2 place-content-center">
          {teamMembers.map((member) => (
            <div className="max-w-sm overflow-hidden mx-auto" key={member._id}>
              <div className="relative w-[240px] h-[297px]">
                <Image
                  src={urlFor(member.image).url()}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h1 className="font-bold text-[20px] mt-3">{member.name}</h1>
              <p>{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
