import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import styles from "../styles/NavBar.module.css";
// import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { Scroll } from "react-scroll/modules/mixins/Helpers";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="w-full">
      <nav className="">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="w-full flex items-center justify-between font-gilroy">
              <div className="flex  items-center space-around">
                <img
                  src="https://i.imgur.com/oVZTwYa.png"
                  alt="img"
                  className="w-9 lg:w-11"
                />
                <Link href="/">
                  <a
                    className={`font-taberna mx-2 text-[1.3em] lg:text-[1.8em]  ${styles.navbarBrand}`}
                  >
                    IDEATHON
                  </a>
                </Link>
              </div>
              <div className="hidden md:block font-gilroyBold text-[2rem] tracking-wider">
                <div className="flex items-baseline mt-2 space-x-4 lg:space-x-8 text-[10px] lg:text-[14px] xl:text-[16px]">
                  <Link href="/">
                    <a className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      HOME
                    </a>
                  </Link>
                  {/* <Link href="/#about"> */}
                  <ScrollLink to="about" spy={true} smooth={true}>
                    <div className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      ABOUT
                    </div>
                  </ScrollLink>
                  {/* </Link> */}

                  <Link href="/events">
                    <a className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      EVENTS
                    </a>
                  </Link>

                  {/* <Link href="/">
                    <a className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      RULEBOOK
                    </a>
                  </Link> */}

                  {/* <Link href=""> */}
                  <ScrollLink to="timeline" spy={true} smooth={true}>
                    <div className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      TIMELINE
                    </div>
                  </ScrollLink>
                  {/* </Link> */}

                  {/* <a href="/#speakers" className={`${styles.navLink} ${styles.navLinkLtr}`}>
										SPEAKERS
									</a> */}

                  {/* <Link href="/#faqs"> */}
                  <ScrollLink to="faqs" spy={true} smooth={true}>
                    <div className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      FAQs
                    </div>
                  </ScrollLink>
                  {/* </Link> */}
                  {/* <a href="/#sponsors" className={`${styles.navLink} ${styles.navLinkLtr}`}>
										SPONSORS
									</a> */}
                  {/* <Link to="/leaderboard" className="nav-link nav-link-ltr ">
										LEADERBOARD
									</Link> */}
                  {/* <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    TEAM
                  </a> */}
                </div>
              </div>
              <div>
                <Link href="">
                  {/* <a
                    target="_blank"
                    type="submit"
                    className={` font-semibold font-gilroy tracking-wider rounded-full m-2 py-1 md:py-2 px-3 text-xs lg:text-[1.1rem] transition duration-150 ease-in-out ${styles.Register}`}
                  >
                    REGISTER NOW
                  </a> */}
                  <div className={styles.test}>
                    <div
                      className="apply-button"
                      data-hackathon-slug="ideathon-2k22"
                      data-button-theme="dark"
                      style={{ height: "44px", width: "312px" }}
                    ></div>
                  </div>
                </Link>
                {/* <div className={styles.test}>
 <div className="apply-button" data-hackathon-slug="ideathon-2k22" data-button-theme="dark"></div>
                </div> */}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-[#432d1d] text-white hover:text-[#432d1d] focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="md:hidden backdrop-blur bg-[#e2caa4] bg-opacity-20 absolute font-gilroy tracking-wider z-10 w-full"
              id="mobile-menu"
            >
              <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                  <a className="font-bold hover:bg-[#c79f82] text-[#432d1d] block px-3 py-2 rounded-md text-base">
                    HOME
                  </a>
                </Link>

                {/* <Link href="/#about"> */}
                <ScrollLink to="about" spy={true} smooth={true}>
                  <div className="font-bold hover:bg-[#c79f82] text-[#432d1d] block px-3 py-2 rounded-md text-base">
                    ABOUT
                  </div>
                </ScrollLink>
                {/* </Link> */}

                <Link href="/events">
                  <div className="font-bold hover:bg-[#c79f82] text-[#432d1d] block px-3 py-2 rounded-md text-base">
                    EVENTS
                  </div>
                </Link>

                {/* <Link href="/#timeline"> */}
                <ScrollLink to="timeline" spy={true} smooth={true}>
                  <div className="font-bold hover:bg-[#c79f82] text-[#432d1d] block px-3 py-2 rounded-md text-base">
                    TIMELINE
                  </div>
                </ScrollLink>
                {/* </Link> */}
                {/* <Link href="/#faqs"> */}
                <ScrollLink to="faqs" spy={true} smooth={true}>
                  <div className="font-bold hover:bg-[#c79f82] text-[#432d1d] block px-3 py-2 rounded-md text-base">
                    FAQs
                  </div>
                </ScrollLink>
                {/* </Link> */}

                {/* <a
									href="/#speakers"
									className="font-Montserrat font-bold text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base "
								>
									SPEAKERS
								</a> */}

                {/* <a
									href="/#sponsors"
									className="font-Montserrat font-bold text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base "
								>
									SPONSORS
								</a> */}
                {/* <Link
									to="/leaderboard"
									className="font-Montserrat font-bold text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base "
								>
									LEADERBOARD
								</Link> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
