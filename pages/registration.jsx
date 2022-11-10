import React from "react";
import NavBar from "../components/NavBar";
import SubHeading2 from "../components/SubHeading2";
import { useEffect } from "react";
import Head from "next/head";

const Registration = () => {
  useEffect(() => {
    document.querySelector("iframe").addEventListener("load", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Registration | Ideathon 2K22</title>
        {/* <link rel="icon" href="https://i.imgur.com/oVZTwYa.png" /> */}
      </Head>
      <NavBar />
      <div className="mt-16 mainparent flex items-center justify-center ">
        <div className="mainsubparent space-y-0 mx-auto">
          <SubHeading2 head="Registration Form"></SubHeading2>
          {/* <SubHeading2 head="Form"></SubHeading2> */}
        </div>
      </div>
      <div className="flex mx-auto justify-center py-8">
        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeU5GBH4sWLxWrSHcL_YvuMHgRFfwxhLty3FSkI47SM_FM0rw/viewform?embedded=true"
          //   style={{ height: "100%" }}
          width="700"
          height="1200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe> */}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeL8PurloJIiiEyjOiK6d6oK498ITvggrOZKEMcY6Pl-1fibA/viewform?embedded=true"
          width="700"
          height="2170"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default Registration;
