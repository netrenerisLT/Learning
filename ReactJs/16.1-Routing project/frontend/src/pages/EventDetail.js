import { useParams, json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  // const params = useParams();
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ req, params }) {
  const response = await fetch(`http://localhost:8080/events/${params.id}`);

  if (!response.ok) {
    return json(
      {
        message: "Could not fetch data for selected event... Please try again.",
      },
      { status: 500 }
    );
  } else {
    return response;
  }
}
