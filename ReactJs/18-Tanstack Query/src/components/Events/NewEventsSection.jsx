import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import EventItem from "./EventItem.jsx";
import { useQuery } from "@tanstack/react-query";
import { fetchEvents } from "../../util/http.js";

export default function NewEventsSection() {
  //send HTTP request, get back data and status
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events"], //caches data which are sent and use key as identfication for caching
    queryFn: fetchEvents, //define acttual code which will be executed to send request
    staleTime: 0, // default 0. control time after the request is sent to look if there are updated data to fetch if ths data was cached before
    gcTime: 1000 * 60 * 5, //default 5min. how long data and the cache wll be kept around
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={error.info?.message || "Failed to fetch."}
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
