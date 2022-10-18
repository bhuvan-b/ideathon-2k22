import React from "react";
import React_Timeline from "./React_Timeline";
import SubHeading from "../SubHeading";

const Timeline = () => {
  return (
    <div id="timeline" className="space-y-8 py-8">
      <div>
        <SubHeading head="TIMELINE" />
      </div>
      <div>
        <React_Timeline />
      </div>
    </div>
  );
};

export default Timeline;
