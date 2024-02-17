import { Link, Outlet, useParams, useNavigate } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EventDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      //tells that certain data is outdated and it needs to berefetched if it's somehow visible (e.x. under the backdrrop) on the screen
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none", //make sure, that invalidated querys will not be refetched immediatly, but after they will be required for fetching again
      });
      navigate("/events");
    },
  });
  function handleDelete() {
    const isApprovedDeletion = window.confirm("Are you sure?");
    if (isApprovedDeletion) {
      mutate({ id: params.id });
    }
  }

  let content;

  if (isPending) {
    content = (
      <div className="center" id="event-details-content">
        <p>Loading event..</p>
      </div>
    );
  }

  if (isError) {
    content = (
      <div className="center" id="event-details-content">
        <ErrorBlock
          title="An error while loading event."
          message={error.info?.message || "Please try again."}
        ></ErrorBlock>
      </div>
    );
  }

  if (data) {
    content = (
      <>
        <header>
          <h1>{data.title}</h1>
          <nav>
            <button onClick={handleDelete}>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>
        <div id="event-details-content">
          <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{data.location}</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>
                {data.date} @ {data.time}
              </time>
            </div>
            <p id="event-details-description">{data.description}</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      <article id="event-details">{content}</article>
    </>
  );
}
