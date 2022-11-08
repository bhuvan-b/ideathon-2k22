import React, { useEffect } from "react";
// import eventIcon from "../Images/events/icons/eventicon.png";
import NavBar from "../NavBar";
import Link from "next/link";
import data from "./Data";

const EventCard = () => {
  // console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className=" bg-eventsbg bg-cover flex justify-center items-center lg:h-screen">
        <div className="flex justify-center items-center ">
          <div className="flex mt-[20px] h-fit text-white rounded-sm font-Montserrat font-medium bg-[#432d1d] bg-opacity-70  lg:w-4/5 p-8 m-8">
            <div className="flex flex-col lg:flex-row justify-center w-full">
              <div className="lg:w-2/5 flex flex-col space-y-4 justify-center items-center text-center">
                <div className="">
                  <img
                    className="max-h-[12rem]"
                    src={data[0].eventIcon}
                    alt={data[0].name}
                  />
                </div>
                <div className="text-4xl font-bold font-consolas">
                  {/* {data[0].whiteText}{" "} */}
                  <span className="text-white-300 ">{data[0].blueText}</span>
                </div>

                <a href={data[0].registerLink} target="_blank">
                  <button
                    type="submit"
                    className={`mx-auto font-semibold font-gilroy tracking-wider rounded-full m-2 py-1 md:py-3 px-4 text-lg lg:text-[1.2rem] transition duration-150 ease-in-out Register`}
                  >
                    REGISTER NOW
                  </button>
                </a>
              </div>
              <div className="lg:w-3/5 mt-4 space-y-4 divide-y divide-cyan-400 text-center">
                {/* right-col */}
                <div className="space-y-3">
                  <div className="tracking-wider font-consolas">
                    Team Size: {data[0].teamSize} Members
                  </div>
                  <div className="tracking-wider font-consolas">
                    Cash Prizes upto INR {data[0].cashPrize}
                  </div>
                  {/* Rulebook Button */}
                  <div>
                    <Link href="https://tinyurl.com/ideathon2k22-rulebook">
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
                  <div className="text-justify font-consolas">
                    {data[0].eventDescription}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventCard;
