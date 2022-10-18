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

const Footer = () => {
  return (
    <div>
      <div className="p-4 flex flex-col justify-center items-center">
        <div className={`${styles.lnkcls} space-x-2`}>
          <a href="https://www.instagram.com/ecell_iiitp" target="blank">
            <FontAwesomeIcon
              icon={faInstagram}
              size="xl"
              className={`${styles.lnk}`}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCBRfXeWo-YSFt25wlZGr30w"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              size="xl"
              className={`${styles.lnk}`}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/e-cell-iiit-pune/"
            target="blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              className={`${styles.lnk}`}
            />
          </a>
          <a href="mailto:ecell@iiitp.ac.in" target="blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="xl"
              className={`${styles.lnk}`}
            />
          </a>
          <a href="https://discord.com/invite/PP2EDvQSbA" target="blank">
            <FontAwesomeIcon
              icon={faDiscord}
              size="xl"
              className={`${styles.lnk}`}
            />
          </a>
        </div>
        <hr className={`${styles.hr}`} />
        <div className="flex items-center justify-center flex-nowrap font-bold pt-2">
          <div className="font-gilroy tracking-wider space-x-4 sm:space-x-8 ">
            <a href="/" className={`${styles.nav_link}`}>
              HOME
            </a>
            <a href="/#about" className={`${styles.nav_link}`}>
              ABOUT
            </a>

            <a href="/#eventshelf" className={`${styles.nav_link}`}>
              EVENTS
            </a>

            <a href="/#speakers" className={`${styles.nav_link}`}>
              SPEAKERS
            </a>

            <a href="/#faqs" className={`${styles.nav_link}`}>
              FAQS
            </a>
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
