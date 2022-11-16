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
        {/* <div className="text-white text-3xl md:text-4xl font-Montserrat font-bold">
          PLATINUM
        </div>

        <div className=" grid md:grid-cols-3  place-items-center space-y-8 md:space-y-0"> */}
        {/* Added below div since there was only one element. Remove after adding other sponsors */}
        {/* <div className=" grid place-items-center"> */}
        {/* 
          <div className="w-[70%] px-4 md:w-[100%] logo">
            <a
              href="https://polygon.technology"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://i.ibb.co/RPPbfv4/polygon-logo-99647ca.png"
                alt="Polygon"
              />
            </a>
          </div>
          <div className="w-[45%] px-4 md:w-[20%] logo">
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
          </div>

          <div className="space-y-8 px-8">
            <div className="text-white text-3xl md:text-4xl font-Montserrat font-bold">
              GOLD
            </div>
            <div className="px-4 pt-8 grid md:grid-cols-3 place-items-center space-y-8 md:space-y-0">
              <div className="w-[65%] md:w-[] logo">
                <a href="https://pokerstreet.in/" target="_blank">
                  <img
                    src="https://i.ibb.co/Hhp2PBP/logo-1.png"
                    alt="PokerStreet"
                  />
                </a>
              </div>
              <div className="w-[35%] md:w-[] logo">
                <a href="https://www.stockgro.club/" target="_blank">
                  <img
                    src="https://i.ibb.co/hZ3Sr2K/Stock-Gro-logo-Black-Font-No-background.png"
                    alt="StockGro"
                  />
                </a>
              </div>
              <div className="w-[65%] md:w-[] logo">
                <a href="https://rosenfeldmedia.com/" target="_blank">
                  <img
                    src="https://i.ibb.co/Y7HF2GM/RM-Logo-logotype.png"
                    alt="RosenfeldMedia"
                  />
                </a>
              </div>
            </div>
          </div> */}

        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center text-center items-center py-8 w-[100%] lg:w-[90%]">
            {/* <div className="space-y-24 pt-24"> */}
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

              <div className="space-y-4 md:space-y-12 px-8 pt-12">
                <div className="subhead4 text-3xl md:text-4xl font-Montserrat font-bold">
                  ONLINE MEDIA PARTNER
                </div>
                <div className="px-4  grid md:grid-cols-3 place-items-center space-y-8 md:space-y-0">
                  <div></div>
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
                  <div></div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-12 px-8 pt-8">
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
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}

          {/* <div className="w-[70%] px-4 md:w-[90%] logo">
                  <a href="https://www.finlatics.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/BrsTf5J/Finlatics-color-logo-with-background.png"
                      alt="Finlatics"
                    />
                  </a>
                </div>
                <div></div>
                <div className="w-[70%] px-4 md:pt-8 md:w-[100%] logo">
                  <a href="https://aglasem.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/Hp3k03L/aglasem-White.png"
                      alt="Aglasem"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-8 px-8">
              <div className="text-white text-3xl md:text-4xl font-Montserrat font-bold">
                MEDIA PARTNER
              </div>
              <div className="pt-8 px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="w-[60%] md:w-[20%] logo">
                  <a href="https://www.dais.world/" target="_blank">
                    <img
                      src="https://i.ibb.co/1LCPmDb/dias-world.jpg"
                      alt="daisworld"
                    />
                  </a>
                </div>
                <div className="w-[60%] md:w-[20%] logo">
                  <a href="https://youthincmag.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/LSKVDN8/Yi-New-Logo-White-2.png"
                      alt="youthincorporated"
                    />
                  </a>
                </div>
                <div className="w-[60%] md:w-[20%] logo">
                  <a href="https://www.knowafest.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/T0sxyw4/know-a-fest.png"
                      alt="KnowaFest"
                    />
                  </a>
                </div>
                <div className="w-[60%] md:w-[20%] logo">
                  <a href="https://www.eatmy.news/" target="_blank">
                    <img
                      src="https://i.ibb.co/q0fJwwQ/EMN.png"
                      alt="EatMyNews"
                    />
                  </a>
                </div>
              </div>
              <div className="pt-8 px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="w-[60%] md:w-[20%] logo">
                  <a href="https://edtimes.in/" target="_blank">
                    <img
                      src="https://i.ibb.co/X8C4Ybc/Ed-Times-Logo.png"
                      alt="EDTimes"
                    />
                  </a>
                </div>
                <div className="w-[60%] md:w-[20%] logo">
                  <a href="https://www.campustimespune.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/LJg5cCw/campus-times-pune-official-logo-round11.png"
                      alt="CampusTimesPune"
                    />
                  </a>
                </div>
                <div className="w-[60%] md:w-[20%] logo">
                  <a href="https://www.inc91.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/xhff2jt/inc91-2.png"
                      alt="Inc91"
                    />
                  </a>
                </div>
                <div className="w-[60%] md:w-[20%] logo">
                  <a href="https://www.bhaskarhindi.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/ysbcNSD/Dainikbhaskarnew2.png"
                      alt="Dainik Bhaskar"
                    />
                  </a>
                </div>
              </div>
              <div className="pt-8 px-4 flex flex-col md:flex-row justify-center items-center md:space-x-24 space-y-8 md:space-y-0">
                <div className="w-[70%] md:w-[40%] logo">
                  <a href="https://www.noticebard.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/3CnFsmD/noticebardlogo2.png"
                      alt="NoticeBard"
                    />
                  </a>
                </div>
                <div className="w-[60%] md:w-[40%] logo">
                  <a href="https://www.ideapreneurindia.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/kHsQKtD/1618541971.png"
                      alt="Ideapreneur"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-8 px-8">
              <div className="text-white text-3xl md:text-4xl font-Montserrat font-bold">
                KNOWLEDGE PARTNER
              </div>
              <div className="pt-8 px-4 flex flex-row justify-center items-center">
                <div className="w-[50%] md:w-[25%] logo">
                  <a href="https://www.icreate.org.in/" target="_blank">
                    <img
                      src="https://i.ibb.co/dQ1VvvF/icreate.jpg"
                      alt="iCreate"
                    />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 px-8">
              <div className="text-white text-3xl md:text-4xl font-Montserrat font-bold">
                SILVER
              </div>
              <div className="pt-8 px-4 flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-24 space-y-8 md:space-y-0">
                <div className="w-[55%] md:w-[25%] logo">
                  <a href="https://interviewbuddy.in/" target="_blank">
                    <img
                      src="https://i.ibb.co/Tg6Mn5K/interviewbuddy.png"
                      alt="InterviewBuddy"
                    />
                  </a>
                </div>
                <div className="w-[55%] md:w-[25%] logo">
                  <a href="https://www.taskade.com/" target="_blank">
                    <img
                      src="https://i.ibb.co/ch6tskn/image.png"
                      alt="Taskade"
                    />
                  </a>
                </div>*/}
        </div>
      </div>
    </div>
  );
}

export default SponsorSection;
