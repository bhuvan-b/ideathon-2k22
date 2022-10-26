import React from "react";
import SubHeading from "../SubHeading";

function AboutSection() {
  return (
    <div id="about" className="content-center p-4 mb-14 sm:p-8">
      <div className="hidden md:inline">
        <SubHeading head="ABOUT IDEATHON 2k22" />
      </div>
      <div className="md:hidden">
        <SubHeading head="ABOUT " />
        <SubHeading head="IDEATHON 2k22" />
      </div>
      <div className="w-[100%] md:w-4/5 mx-auto space-y-8 mt-8 text-[#432d1d]">
        <div className="font-consolas text-justify text-xl md:text-2xl">
          With each generation, new ideas for innovation grew. It is crucial to
          have an institution of higher learning to assist the young to
          implement these ideas. The Entrepreneurship Cell at IIIT Pune is back
          to reawaken and spark off the creative whiz inside of you! We are
          flying back to the golden era and trailblazing our way back to 2022
          with astounding enthusiasm and intellectual events.
        </div>
        <div className="font-consolas text-justify text-xl md:text-2xl">
          Ideathon 2k22 aims at bringing together the best minds and fashioning
          the most innovative solutions. Besides conceptualizing ideas and
          envisaging contributing to society, Ideathon 2k22 consists of stunning
          events and ingenious sessions with the finest entrepreneurs and
          industrialists. We invite you to add your perspective to the table of
          innovation and reminisce to ideate. Ideathon 2k22 will be conducted in
          hybrid mode, granting an opportunity for all of you to have an amazing
          time brainstorming and acquiring practical knowledge.
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
