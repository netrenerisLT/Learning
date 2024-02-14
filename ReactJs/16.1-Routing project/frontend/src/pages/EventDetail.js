import {
  useParams,
  json,
  useRouteLoaderData,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventDetailPage() {
  // const params = useParams();
  const { deferEvent, deferEvents } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading event...</p>}
      >
        <Await resolve={deferEvent}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading events.</p>}
      >
        <Await resolve={deferEvents}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    return json(
      {
        message: "Could not fetch data for selected event... Please try again.",
      },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

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

export async function loader({ request, params }) {
  const id = params.id;

  return defer({
    deferEvent: await loadEvent(id), //await let wait for this data to be loaded before the page/component loads
    deferEvents: loadEvents(),
  });
}

export async function action({ request, params }) {
  const response = await fetch(`http://localhost:8080/events/${params.id}`, {
    method: request.method,
  });

  if (!response.ok) {
    return json(
      {
        message: "Could not delete event... Please try again.",
      },
      { status: 500 }
    );
  } else {
    return redirect("/events");
  }
}
