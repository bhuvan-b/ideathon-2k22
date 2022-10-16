import { useState } from "react";
import { BsPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div>
        <div className={"faq" + (showAnswer ? "open" : "")}>
          <h2
            onClick={() => setShowAnswer(!showAnswer)}
            className="text-lg font-semibold tracking-wider cursor-pointer"
          >
            {question}
          </h2>
          {showAnswer ? (
            <button onClick={() => setShowAnswer(!showAnswer)}>
              <FaMinus className="icon-" />
            </button>
          ) : (
            <button onClick={() => setShowAnswer(!showAnswer)}>
              <BsPlus className="icon_" />
            </button>
          )}
        </div>
        <div className="faq-ans">{showAnswer && <p>{answer}</p>}</div>
      </div>
    </>
  );
}
