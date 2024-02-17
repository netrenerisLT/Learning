import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isError, error, isPending } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    //executes right when mutate fn (below) is called
    onMutate: async (data) => {
      const newData = data.event; //data is passed with mutate fn (below) and we can get "event" data

      await queryClient.cancelQueries({ queryKey: ["events", params.id] }); //cancels all active queries for selected key, to prevent clashing of query.

      const onUpdatedEvent = queryClient.getQueryData(["events", params.id]); // give currently stored qeury data

      //manipulate date without wating the response
      queryClient.setQueryData(["events", params.id], newData); //first argment is the key of data (event), what want to be edited. Second argument is the new data which will be changed (of selected key).

      return {
        onUpdatedEvent: onUpdatedEvent,
      };
    },

    //rolling back optmistic update if the mutation failed
    onError: (
      error, //error object
      data, //data which was submitted to the mutation
      context //context helps to get data from onMutate (this data must be returned) and can contain onUpdatedEvent event data
    ) => {
      queryClient.setQueryData(["events", params.id], context.onUpdatedEvent); //first argment is the key of data (event), what want to be edited. Second argument is the new data which will be changed (of selected key).
    },

    //will be called no matter if mutation fn failed or succeded
    onSettled: () => {
      //makes sure and double-check that all queries is updated
      queryClient.invalidateQueries(["events", params.id]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, event: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }
  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="An error while loading event."
          message={error.info?.message || "Please try again."}
        ></ErrorBlock>
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }
  return <Modal onClose={handleClose}>{content}</Modal>;
}
