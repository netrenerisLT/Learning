import React from "react";
import EventsList from "../components/EventsList";
import { Link } from "react-router-dom";

const EVENTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function EventsPage() {
  return (
    <>
      <div>
        EVENTS
        {/* <EventsList /> */}
      </div>
      <ul>
        {EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}> {event.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
