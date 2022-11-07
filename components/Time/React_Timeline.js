import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineAppRegistration } from "react-icons/md";

const React_Timeline = () => {
  return (
    <div className="TimelineE w-4/5 mx-auto">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--content"
          // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          // contentStyle={{ width: "30%" }}
          // contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="1st November 2022"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          icon={<MdOutlineAppRegistration />}
        >
          <h1 className="font-bold font-gilroy text-xl">Registrations Start</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="14th November 2022"
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
          <h1 className="font-bold font-gilroy text-xl">Registration Ends</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="12-14th November 2022"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          {/* <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p> */}
          <h1 className="font-bold font-gilroy text-xl">Round 1 Submissions</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="17th November 2022"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          // icon={<WorkIcon />}
        >
          {/* <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p> */}
          <h1 className="font-bold font-gilroy text-xl">Round 1 Results</h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="18-20th November 2022"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          {/* <h3 className="vertical-timeline-element-title">

          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p> */}
          <h1 className="font-bold font-gilroy text-xl">
            Breaking Conventions
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="19-20th November 2022"
          iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
          // icon={<SchoolIcon />}
        >
          {/* <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p> */}
          <h1 className="font-bold font-gilroy text-xl">
            Finale and Side Events
          </h1>
        </VerticalTimelineElement>
        {/* <VerticalTimelineElement
        iconStyle={{ background: "rgba(67, 45, 29, 1)", color: "#fff" }}
        // icon={<StarIcon />}
      /> */}
      </VerticalTimeline>
    </div>
  );
};

export default React_Timeline;
