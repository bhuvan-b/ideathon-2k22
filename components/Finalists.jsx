import React from "react";
import SubHeading from "./SubHeading";
const Finalists = () => {
  return (
    <div id="finalists" className="space-y-8 py-8">
      <div>
        <SubHeading head="Ideathon Finalists" />
      </div>
      <div className="flex justify-center items-center md:px-4 px-2">
        <iframe
          src="https://drive.google.com/file/d/1xBAHk0s6vJbKOLWqss8utsOeKxtXRzNi/preview"
          width="900"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
    </div>
  );
};

export default Finalists;
