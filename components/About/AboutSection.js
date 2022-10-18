import React from "react";
import SubHeading from "../SubHeading";

function AboutSection() {
  return (
    <div className="content-center p-4 mb-14 sm:p-8">
      <div>
        <SubHeading head="ABOUT IDEATHON '22" />
      </div>
      <div className="w-[90%] md:w-4/5 mx-auto space-y-8 mt-8 text-[#432d1d]">
        <div className="font-consolas text-justify text-xl md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          quisque eu phasellus cum. Morbi nec massa convallis et risus diam,
          aliquam. Gravida scelerisque quisque donec aliquam enim ultrices
          pulvinar. Purus vitae eu id habitant velit. Erat dui, vel sed vel.
          Mollis nunc sed facilisis sed vitae id sit euismod feugiat. Proin et
          nulla enim, porta metus turpis quam sed nulla. Proin et nulla enim,
          porta metus turpis quam sed nulla. Proin et nulla enim, porta metus
          turpis quam sed nulla.
        </div>
        <div className="font-consolas text-justify text-xl md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          quisque eu phasellus cum. Morbi nec massa convallis et risus diam,
          aliquam. Gravida scelerisque quisque donec aliquam enim ultrices
          pulvinar. Purus vitae eu id habitant velit. Erat dui, vel sed vel.
          Mollis nunc sed facilisis sed vitae id sit euismod feugiat. Proin et
          nulla enim, porta metus turpis quam sed nulla. Porta metus turpis quam
          sed nulla. Gravida scelerisque quisque donec aliquam enim ultrices
          pulvinar.
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
