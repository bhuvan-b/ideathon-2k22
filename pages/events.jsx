import React from "react";
import NavBar from "../components/NavBar";
import SubHeading2 from "../components/SubHeading2";
import Head from "next/head";

const Events = () => {
  return (
    <>
      <Head>
        <title>Events | Ideathon 2K22</title>
        {/* <link rel="icon" href="https://i.imgur.com/oVZTwYa.png" /> */}
      </Head>
      <NavBar />
      <div className="mainparent flex items-center justify-center h-[80vh]">
        <div className="mainsubparent space-y-0 mx-auto">
          <SubHeading2 type="mainhead" head="COMING"></SubHeading2>
          <SubHeading2 type="mainhead" head="SOON"></SubHeading2>
        </div>
      </div>
    </>
  );
};

export default Events;
