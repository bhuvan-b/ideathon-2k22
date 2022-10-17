import React from "react";
const SubHeading = (props) => {
  return (
    <div className="subheadparent">
      <div className="subhead1">
        <div
          className={`text-6xl fontsize outlinetext ${
            props.type == "mainhead" ? "mainhead1" : ""
          }`}
        >
          <span>{props.head}</span>
        </div>
      </div>
      <div className="subhead2">
        <div
          className={`text-6xl fontsize outlinetext ${
            props.type == "mainhead" ? "mainhead2" : ""
          }`}
        >
          <span id={`${props.type == "mainhead" ? "text" : ""}`}>
            {props.head}
          </span>
        </div>
      </div>
      <div className="subhead3">
        <div
          className={`text-6xl fontsize outlinetext ${
            props.type == "mainhead" ? "mainhead3" : ""
          }`}
        >
          {props.head}
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
