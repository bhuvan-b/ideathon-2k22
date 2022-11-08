import React from "react";
import EventCard from "../../components/Events/EventCard";
import NavBar from "../../components/NavBar";
import { useRouter } from "next/router";

const eventName = () => {
  const router = useRouter();
  const eventName = router.query.eventName;
  console.log(eventName);
  return (
    <>
      <NavBar />
      {eventName && <EventCard event_name={eventName} />}
    </>
  );
};

export default eventName;
