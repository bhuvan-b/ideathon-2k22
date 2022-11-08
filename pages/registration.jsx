import React from "react";
import NavBar from "../components/NavBar";
import SubHeading2 from "../components/SubHeading2";
import { useEffect } from "react";

const registration = () => {
  useEffect(() => {
    console.log("hi");
    var selected = document.querySelector("iframe");
    selected.addEventListener("load", onhandleScroll);
    const onhandleScroll = () => {
      console.log("hwllo");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    return () => selected.removeEventListener("scroll", onhandleScroll);
  }, []);

  return (
    <>
      <NavBar />
      <div className="mainparent flex items-center justify-center ">
        <div className="mainsubparent space-y-0 mx-auto">
          <SubHeading2 head="Registration Form"></SubHeading2>
          {/* <SubHeading2 head="Form"></SubHeading2> */}
        </div>
      </div>
      <div className="flex mx-auto justify-center py-8">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeU5GBH4sWLxWrSHcL_YvuMHgRFfwxhLty3FSkI47SM_FM0rw/viewform?embedded=true"
          //   style={{ height: "100%" }}
          width="700"
          height="1200"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </>
  );
};

export default registration;
