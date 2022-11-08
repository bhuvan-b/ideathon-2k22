import React, { useEffect } from "react";
import Link from "next/link";
import Data from "./Data";
import { useState } from "react";

const EventCard = (props) => {
  // console.log(data);
  const [data, setdata] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const newdata = Data.find((obj) => obj.name === props.event_name);
    setdata(newdata);
  }, [data]);
  return (
    <>
      {data && (
        <div className=" flex justify-center items-center lg:mt-24 mt-12">
          <div className="flex justify-center items-center ">
            <div className=" bg-[#432d1d] bg-opacity-20  backdrop-blur-2xl pb-10 rounded rounded-xl flex mt-[20px] h-fit text-white font-Montserrat font-medium  lg:w-4/5 p-8 m-4">
              <div className="flex flex-col lg:flex-row  justify-center w-full">
                <div className="lg:w-2/5 flex flex-col space-y-4 justify-center items-center text-center">
                  <div className="">
                    <img
                      className="max-h-[12rem]"
                      src={data.eventIcon}
                      alt={data.name}
                    />
                  </div>

                  {/* <div>
                  <SubHeading type="mainhead" head="Aquizition"></SubHeading>
                </div> */}
                  <div className="text-5xl font-bold font-taberna">
                    {/* {data[0].whiteText}{" "} */}
                    <span className="text-[#432d1d] ">{data.eventName}</span>
                  </div>

                  <a href={data.registerLink} target="_blank">
                    <button
                      type="submit"
                      className={`mx-auto font-semibold font-gilroy tracking-wider rounded-full m-2 py-1 md:py-3 px-4 text-lg lg:text-[1.2rem] transition duration-150 ease-in-out Register`}
                    >
                      REGISTER NOW
                    </button>
                  </a>
                </div>
                <div className="lg:w-3/5 mt-4 text-[#432d1d] space-y-4 divide-y divide-[#432d1d] text-center">
                  {/* right-col */}
                  <div className="space-y-3">
                    <div className="tracking-wider font-consolas">
                      Team Size: {data.teamSize} Members
                    </div>
                    <div className="tracking-wider font-consolas">
                      Cash Prizes upto INR {data.cashPrize}
                    </div>
                    <div className="tracking-wider font-consolas">
                      Mode: Offline
                    </div>
                    {/* Rulebook Button */}
                    <div>
                      <Link href={data.rulebookLink}>
                        <a
                          target="_blank"
                          type="submit"
                          className={`mx-auto font-semibold font-gilroy tracking-wider rounded-full m-2 py-1 md:py-3 px-4 text-lg lg:text-[1.2rem] transition duration-150 ease-in-out Register`}
                        >
                          RULE BOOK
                        </a>
                      </Link>
                      {/* <a href={data[0].rulebookLink} target="_blank">
                    <button
                      type="submit"
                      className="text-cyan-200 border-2 hover:bg-cyan-700 border-cyan-200 hover:text-white font-bold rounded-full m-2 p-2 px-3"
                    >
                      RULEBOOK
                    </button>
                  </a> */}
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="text-justify font-consolas text-[#432d1d] ">
                      {data.eventDescription}
                    </div>
                    <div className="mt-4 text-justify font-consolas text-[#432d1d] ">
                      {data.para2}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default EventCard;
