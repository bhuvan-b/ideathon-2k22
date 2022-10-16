import { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import { data } from "./data";
import "./Faqs.module.css";

export default function FaqSection() {
  const [questions] = useState(data);

  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <div className="sm:w-3/4 w-[85%] bg-[#000A0C]" id="faqs">
        <div className="p-2 pb-14 text-center font-Montserrat font-bold text-4xl md:text-6xl flex flex-col items-center justify-center">
          <div>
            <span className="text-white">FAQ</span>
            <span className="text-cyan-400">S </span>
          </div>
          <hr className="secheadingfaq" />
        </div>
        {questions.map((question) => (
          <SingleQuestion {...question} key={question.id} />
        ))}
      </div>
    </div>
  );
}
