import React from "react";
import SubHeading from "../SubHeading";
import Link from "next/link";

const EventShelf = () => {
  return (
    <div id="events" className="space-y-8 py-8">
      <div>
        <SubHeading head="EVENTS" />
      </div>
      <div className="flex flex-col md:flex-row space-x-0 w-[65%] md:w-[85%] lg:w-[70%] space-y-8 md:space-y-0 mx-auto md:space-x-12">
        <div className="hover:shadow-2xl">
          <Link href="/events/aquizition">
            <a>
              <img src="https://i.imgur.com/3aIe2jZ.png" alt="" />
            </a>
          </Link>
        </div>

        <div className="hover:shadow-2xl">
          <Link href="/events/pitch2win">
            <a>
              <img src="https://i.imgur.com/BwhVXas.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="hover:shadow-2xl">
          <Link href="/events/toptalks">
            <a>
              <img src="https://i.imgur.com/zRUaKtg.png" alt="" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventShelf;
