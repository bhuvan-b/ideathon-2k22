import React from "react";
import Image from "next/image";
import SubHeading from "./SubHeading";

const LandingSection = () => {
  return (
    <div className="">
      <div>
        {/* <h3 className="text-3xl text-[#432D1D] font-gilroyBold ml-[27rem] -mb-10 mt-10">
          RELIVING THE PAST
        </h3> */}
        <SubHeading type="mainhead" head="IDEATHON"></SubHeading>
        {/* <h3 className="text-3xl text-right text-[#432D1D] font-gilroyBold mr-[27rem] -mt-28">
          2K22
        </h3> */}
        {/* <h3 className="text-4xl text-[#432D1D] font-gilroyBold">
          REMINISCE TO IDEATE
        </h3> */}
      </div>
      <div className="mt-8">
        <img className="" src="https://i.imgur.com/trZs8Ty.png" alt="" />
      </div>
    </div>
  );
};

export default LandingSection;
