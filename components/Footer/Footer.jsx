import React from "react";
import {
  faDiscord,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="p-4 flex flex-col justify-center items-center">
        <div className={`${styles.lnkcls} space-x-2`}>
          <Link href="events">
            <a target="blank">
              <FontAwesomeIcon
                icon={faInstagram}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
          <Link href="https://www.youtube.com/channel/UCBRfXeWo-YSFt25wlZGr30w">
            <a target="blank">
              <FontAwesomeIcon
                icon={faYoutube}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/company/e-cell-iiit-pune/">
            <a target="blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
          <Link href="mailto:ecell@iiitp.ac.in">
            <a target="blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
          <Link href="https://discord.com/invite/PP2EDvQSbA">
            <a target="blank">
              <FontAwesomeIcon
                icon={faDiscord}
                size="xl"
                className={`${styles.lnk}`}
              />
            </a>
          </Link>
        </div>
        <hr className={`${styles.hr}`} />
        <div className="flex items-center justify-center flex-nowrap font-bold pt-2">
          <div className="font-gilroy tracking-wider space-x-4 sm:space-x-8 ">
            <Link href="/">
              <a className={`${styles.nav_link}`}>HOME</a>
            </Link>
            <Link href="/#about">
              <a className={`${styles.nav_link}`}>ABOUT</a>
            </Link>
            <Link href="/#timeline">
              <a className={`${styles.nav_link}`}>TIMELINE</a>
            </Link>

            {/* <a href="/#speakers" className={`${styles.nav_link}`}>
              SPEAKERS
            </a> */}
            <Link href="/#faqs">
              <a className={`${styles.nav_link}`}>FAQS</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={`mt-5 font-gilroy tracking-wider p-2 ${styles.btm}`}>
        © E-Cell IIIT Pune | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
