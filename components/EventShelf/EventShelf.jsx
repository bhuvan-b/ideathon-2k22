import React from "react";
import SubHeading from "../SubHeading";

const EventShelf = () => {
  return (
    <div id="events" className="space-y-8 py-8">
      <div>
        <SubHeading head="EVENTS" />
      </div>
      <div className="flex flex-col md:flex-row space-x-0 w-[65%] md:w-[85%] lg:w-[70%] space-y-8 md:space-y-0 mx-auto md:space-x-12">
        <div className="hover:shadow-2xl">
          <a href="/events/aquizition" rel="noopener noreferrer">
            <img src="https://i.imgur.com/3aIe2jZ.png" alt="" />
          </a>
        </div>
        <div className="hover:shadow-2xl">
          <a href="/events/pitch2win" rel="noopener noreferrer">
            <img src="https://i.imgur.com/BwhVXas.png" alt="" />
          </a>
        </div>
        <div className="hover:shadow-2xl">
          <a href="/events/toptalks" rel="noopener noreferrer">
            <img src="https://i.imgur.com/zRUaKtg.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventShelf;
