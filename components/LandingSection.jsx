import React from "react";
import Image from "next/image";
import TinyMedium from "./Global/Titles/TinyMedium";
import Medium from "./Global/Titles/Medium";

const LandingSection = () => {
  return (
    <div>
      <Image
        className="-z-10"
        src={"https://i.imgur.com/AvmKsjU.jpg"}
        layout="fill"
      />
      <div className="h-[100vh]">
        <Medium  classes={"text-5xl text-[#264653] font-bold font-taberna"} text="IDEATHON"/>
        <TinyMedium classes={"text-4xl text-[#432D1D] font-gilroyBold"} text="REMINISCE TO IDEATE"/>
      </div>
    </div>
  );
};

export default LandingSection;
