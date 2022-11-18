import React from "react";
import SubHeading from "../SubHeading";

function SponsorSection() {
  return (
    <div id="about" className="content-center p-4 mb-14 sm:p-8">
      <div className="hidden md:inline">
        <SubHeading head="SPONSORS" />
      </div>
      <div className="md:hidden">
        <SubHeading head="SPONSORS" />
      </div>
      <div id="sponsors">
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center text-center items-center py-8 w-[100%] lg:w-[90%]">
            <div className="space-y-8 px-8">
              <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                PLATINUM
              </div>
              <div className=" grid md:grid-cols-2  place-items-center space-y-8 md:space-y-0">
                <div className="w-[70%] px-4 md:w-[70%] logo">
                  <a
                    href="https://polygon.technology"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://i.ibb.co/z5LNnM2/Polygon-blockchain-logo.png"
                      alt="Polygon"
                      width={900}
                    />
                  </a>
                </div>
                <div className="w-[70%] px-4 md:w-[70%] logo">
                  <a
                    href="https://devfolio.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://github.com/devfolioco/brand-assets/blob/main/Logo%20+%20Text%20-%20Dark/Devfolio%20-%20Dark.png?raw=true"
                      alt="Devfolio"
                    />
                  </a>
                  {/* </div> */}
                </div>
              </div>

              <div className="space-y-8 px-8 pt-4">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  GOLD
                </div>
                <div className="px-4  grid md:grid-cols-3 place-items-center space-y-8 md:space-y-0">
                  <div className="w-[75%] md:w-[55%] logo">
                    <a
                      href="https://replit.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://i.ibb.co/vJMw1Jb/replit-logo.png"
                        alt="Replit"
                      />
                    </a>
                  </div>

                  <div className="w-[90%] md:w-[] logo">
                    <a
                      href="https://solana.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://i.ibb.co/ZxFVhKq/Solana-SOL.png"
                        alt="Solana"
                        width={900}
                      />
                    </a>
                  </div>

                  <div className="w-[90%] md:w-[] logo">
                    <a
                      href="https://filecoin.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://i.ibb.co/jrPm4FD/68747470733a2f2f6261667962656968756b3368737936643433646e333674716e76663674767a6c6569696a643569646266.png"
                        alt="Filecoin"
                        width={700}
                      />
                    </a>
                  </div>
                </div>
                <div className="px-4  grid md:grid-cols-3 place-items-center space-y-8 md:space-y-0">
                  <div></div>
                  <div className="w-[75%] md:w-[75%] logo">
                    <a
                      href="https://www.finlatics.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://i.ibb.co/BrsTf5J/Finlatics-color-logo-with-background.png"
                        alt="Finlatics"
                      />
                    </a>
                  </div>
                  <div></div>
                  {/* <div></div> */}
                  {/* <div></div> */}
                </div>
              </div>

              <div className="space-y-8 px-8 pt-4">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  SILVER
                </div>
                <div className="px-4 grid md:grid-cols-3 place-items-center space-y-8 md:space-y-0">
                  <div></div>

                  <div className="w-[40%] pt-0 md:pt-4 md:w-[] logo">
                    <a
                      href="https://risewithrise.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://i.imgur.com/Iobu0HJ.png"
                        alt="Solana"
                        width={900}
                      />
                    </a>
                  </div>

                  <div></div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-12 px-8 pt-12">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  ONLINE MEDIA PARTNER
                </div>
                <div className="px-4  grid md:grid-cols-3 place-items-center space-y-8 md:space-y-0">
                  <div className="w-[75%] md:w-[55%] logo">
                    <a
                      href="https://youthincmag.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://i.ibb.co/LSKVDN8/Yi-New-Logo-White-2.png"
                        alt="Replit"
                      />
                    </a>
                  </div>

                  <div className="w-[75%] md:w-[] logo">
                    <a
                      href="https://aglasem.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://admin.googleusercontent.com/logo-scs-key1154255"
                        alt="AglaSem - Updates, Authentic, Free"
                      />
                    </a>
                  </div>

                  <div className="w-[90%] md:w-[] logo">
                    <a
                      href="https://www.knowafest.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://i.ibb.co/T0sxyw4/know-a-fest.png"
                        alt="Filecoin"
                        width={700}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-12 px-8 pt-8 pb-4">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  SAVINGS PARTNER
                </div>
                <div className="px-4  grid md:grid-cols-3 place-items-center space-y-8 md:space-y-0">
                  <div></div>
                  <div className="w-[85%] md:w-[] logo">
                    <a
                      href="https://www.grabon.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/7/71/GrabOn_-_Official_Logo.png"
                        alt="GrabOn"
                      />
                    </a>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="space-y-8 px-8 pt-4">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  SNACKS PARTNER
                </div>
                <div className="pt-8 px-4 flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-24 space-y-8 md:space-y-0">
                  {/* <div className="w-[55%] md:w-[25%] logo">
                    <a href="https://interviewbuddy.in/" target="_blank">
                      <img
                        src="https://i.ibb.co/Tg6Mn5K/interviewbuddy.png"
                        alt="InterviewBuddy"
                      />
                    </a>
                  </div> */}
                  <div className="w-[55%] md:w-[25%] logo">
                    <img
                      src="https://i.ibb.co/s98shLL/1946-The-Waffles-Logo-Design-Sept22-Final.png"
                      alt="The Waffler"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8 px-8 pt-4">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  CREDENTIAL PARTNER
                </div>
                <div className="pt-8 px-4 flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-24 space-y-8 md:space-y-0">
                  {/* <div className="w-[55%] md:w-[25%] logo">
                    <a href="https://interviewbuddy.in/" target="_blank">
                      <img
                        src="https://i.ibb.co/Tg6Mn5K/interviewbuddy.png"
                        alt="InterviewBuddy"
                      />
                    </a>
                  </div> */}
                  <div className="w-[85%] md:w-[26%] logo">
                    <a
                      href="https://www.truscholar.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://i.imgur.com/6qZ2Y7h.png"
                        alt="TruScholar"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SponsorSection;
