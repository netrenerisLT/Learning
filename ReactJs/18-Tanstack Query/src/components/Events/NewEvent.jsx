import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { createNewEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
  const navigate = useNavigate();

  //dont send data when component is renderer, as it by default with useQuery
  //mutate used when you need to tell when to send the request
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: createNewEvent,
    //waits till the mutation request is completed and then executes this function when succesful mutation
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["events"]}); //tells that certain data is outdated and it needs to berefetched if it's somehow visible (e.x. under the backdrrop) on the screen
      navigate("/events");
    },
  });

  function handleSubmit(formData) {
    mutate({ event: formData });
  }

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm onSubmit={handleSubmit}>
        {isPending && "Submitting data..."}
        {!isPending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Create
            </button>
          </>
        )}
      </EventForm>
      {isError && (
        <ErrorBlock
          title="An error while submiting event."
          message={error.info?.message || "Please try again."}
        ></ErrorBlock>
      )}
    </Modal>
  );
}
