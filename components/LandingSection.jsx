import React from "react";
import Image from "next/image";

const LandingSection = () => {
  return (
    <div className="">
      <Image
        className="-z-10"
        src={"https://i.imgur.com/AvmKsjU.jpg"}
        layout="fill"
      />

      <div className="flex justify-center ">
        <div className="w-75 mt-24 ">
          <div className="text-4xl -mb-14 text-[#432D1D] font-gilroyBold">
            REMINISCE TO IDEATE
          </div>
          <div className="text-[10rem] text-[#264653] font-bold font-taberna">
            IDEATHON
          </div>
          <div className="text-right -mt-10 text-4xl text-[#432D1D] font-gilroyBold">
            2K22
          </div>
        </div>
      </div>
      <div className="flex img-fluid -mt-10">
        <img className="" src="https://i.imgur.com/OSxeX43.png" alt="" />
      </div>
    </div>
  );
};

export default LandingSection;
