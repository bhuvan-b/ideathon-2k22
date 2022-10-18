import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineAppRegistration } from "react-icons/md";

const React_Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work "
        // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // contentStyle={{ width: "30%" }}
        // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date="5-7 November 2022"
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        icon={<MdOutlineAppRegistration />}
      >
        {/* <h3 className="vertical-timeline-element-title text-neutral-900">
          Creative Director
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p> */}

        <h1 className="font-bold font-gilroy text-xl">
          Submission for Round-1
        </h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="12 November 2022"
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        {/* <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p> */}
        <h1 className="font-bold font-gilroy text-xl">
          Round-1 results declared
        </h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="14-15 November 2022"
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        {/* <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p> */}
        <h1 className="font-bold font-gilroy text-xl">Ideathon for freshers</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="16 November 2022"
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        {/* <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p> */}
        <h1 className="font-bold font-gilroy text-xl">
          Breaking Coneventions-1
        </h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="17 November 2022"
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p> */}
        <h1 className="font-bold font-gilroy text-xl">
          Breaking Conventions-2
        </h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="18 November 2022"
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p> */}
        <h1 className="font-bold font-gilroy text-xl">
          Breaking Conventions-3
        </h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="19 November 2022"
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p> */}
        <h1 className="font-bold font-gilroy text-xl">Main Event Day-1</h1>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="20 November 2022"
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        // icon={<SchoolIcon />}
      >
        {/* <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p> */}
        <h1 className="font-bold font-gilroy text-xl">Main Event Day-2</h1>
      </VerticalTimelineElement>
      {/* <VerticalTimelineElement
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        // icon={<StarIcon />}
      /> */}
    </VerticalTimeline>
  );
};

export default React_Timeline;
