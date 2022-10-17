import Image from "next/image";
import React from "react";
import SubHeading from "../SubHeading";
import SpeakerCard from "./SpeakerCard";

function SpeakerSection() {
  const speakers = [
    {
      name: "Ankush Singla",
      picture:
        "https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg",
      Designation: "Co-founder",
      Company: "CodingNinjas",
    },
    {
      name: "Ankush Singla",
      picture:
        "https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg",
      Designation: "Co-founder",
      Company: "CodingNinjas",
    },
    {
      name: "Ankush Singla",
      picture:
        "https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg",
      Designation: "Co-founder",
      Company: "CodingNinjas",
    },
    {
      name: "Ankush Singla",
      picture:
        "https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg",
      Designation: "Co-founder",
      Company: "CodingNinjas",
    },
    {
      name: "Ankush Singla",
      picture:
        "https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg",
      Designation: "Co-founder",
      Company: "CodingNinjas",
    },
    {
      name: "Ankush Singla",
      picture:
        "https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg",
      Designation: "Co-founder",
      Company: "CodingNinjas",
    },
  ];

  return (
    <div className="section image relative">
      <div className="Speaker-Seciton-Heading">
        <SubHeading head="SPEAKER SESSIONS" />
        {/* <h2 className="text-5xl flex p-[1vmax] justify-center items-center text-[#264653] font-bold font-['TabernaSans-Black']"></h2> */}
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {speakers?.map((speaker) => (
          <SpeakerCard
            name={speaker.name}
            picture={speaker.picture}
            Designation={speaker.Designation}
            Company={speaker.Company}
          />
        ))}
      </div>
    </div>
  );
}

export default SpeakerSection;
