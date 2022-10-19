import Image from "next/image";
import React from "react";
import SubHeading from "../SubHeading";
import SpeakerCard from "./SpeakerCard";

function SpeakerSection() {
  const speakers = [
    {
      id: 1,
      name: "Ankush Singla",
      picture:
        "https://webwriterspotlight.com/sites/default/files/author%20pics/picture-36681-1621161976.jpg",
      Designation: "Co-founder",
      Company: "CodingNinjas",
      LinkedIn: "https://www.linkedin.com/in/ankushsingla/",
    },
    {
      id: 2,
      name: "Ankush Singla",
      picture: "https://i.imgur.com/5WIBYLX.png",
      Designation: "Co-founder",
      Company: "CodingNinjas",
      LinkedIn: "https://www.linkedin.com/in/ankushsingla/",
    },
    {
      id: 3,
      name: "Ankush Singla",
      picture: "https://i.imgur.com/5WIBYLX.png",
      Designation: "Co-founder",
      Company: "CodingNinjas",
      LinkedIn: "https://www.linkedin.com/in/ankushsingla/",
    },
    {
      id: 4,
      name: "Ankush Singla",
      picture: "https://i.imgur.com/5WIBYLX.png",
      Designation: "Co-founder",
      Company: "CodingNinjas",
      LinkedIn: "https://www.linkedin.com/in/ankushsingla/",
    },
    {
      id: 5,
      name: "Ankush Singla",
      picture: "https://i.imgur.com/5WIBYLX.png",
      Designation: "Co-founder",
      Company: "CodingNinjas",
      LinkedIn: "https://www.linkedin.com/in/ankushsingla/",
    },
    {
      id: 6,
      name: "Ankush Singla",
      picture: "https://i.imgur.com/5WIBYLX.png",
      Designation: "Co-founder",
      Company: "CodingNinjas",
      LinkedIn: "https://www.linkedin.com/in/ankushsingla/",
    },
  ];

  return (
    <div className="section p-4 sm:p-8 image relative">
      <div className="Speaker-Seciton-Heading">
        <SubHeading head="SPEAKER SESSIONS" />
        {/* <h2 className="text-5xl flex p-[1vmax] justify-center items-center text-[#264653] font-bold font-['TabernaSans-Black']"></h2> */}
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {speakers?.map((speaker) => (
          <SpeakerCard
            key={speaker.id}
            name={speaker.name}
            picture={speaker.picture}
            Designation={speaker.Designation}
            Company={speaker.Company}
            Linkedin={speaker.LinkedIn}
          />
        ))}
      </div>
    </div>
  );
}

export default SpeakerSection;
