import { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "./data";
import "./Faqs.module.css";
import SubHeading from "../SubHeading";

export default function FaqSection() {
  const [questions] = useState(data);

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="md:w-3/4 w-[100%] bg-[#FDEC0] space-y-14" id="faqs">
        {/* <div className="p-2 pb-14 text-center font-Montserrat font-bold text-4xl md:text-6xl flex flex-col items-center justify-center"> */}
        <div>
          <SubHeading head="FAQs" />
        </div>
        {/* <hr className="secheadingfaq" /> */}
        {/* </div> */}
        <div>
          {questions.map((question) => (
            <SingleQuestion {...question} key={question.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
