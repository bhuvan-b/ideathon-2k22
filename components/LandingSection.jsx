import React from "react";
import Image from "next/image";
import SubHeading from "./SubHeading";

const LandingSection = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-8 md:pt-0">
      <div className="mt-28">
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

      <div className="mt-8 -mb-14 md:hidden flex">
        <div className="mx-auto">
          <div
            className="apply-button"
            data-hackathon-slug="ideathon-2k22"
            data-button-theme="dark"
          ></div>
        </div>
      </div>
      <div className="hidden md:inline md:mt-8 mt-28">
        <img className="carImg" src="https://i.imgur.com/trZs8Ty.png" alt="" />
      </div>
      <div className="md:hidden pt-10 md:mt-8 mt-28">
        <img className="carImg" src="https://i.imgur.com/LPyMehN.png" alt="" />
      </div>
    </div>
  );
};

export default LandingSection;
