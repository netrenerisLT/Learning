import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { deferedEvents } = useLoaderData();

  // if (events.isError) {
  //   return <p>{events.message}</p>;
  // }

  return (
    //suspense shows fallback while the date to Await arrives
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={deferedEvents}>
        {/* Functon will execute when resolve finishes */}
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch data... Please try again." };
    // throw new Response(
    //   JSON.stringify({ message: "Could not fetch data... Please try again." }),
    //   { status: 500 }
    // );
    return json(
      { message: "Could not fetch data... Please try again." },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export function loader() {
  return defer({
    deferedEvents: loadEvents(),
  });
}
