import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function Error() {
  const error = useRouteError();

  let title = "An error occured";
  let message = "Please try again.";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }
  if (error.status === 404) {
    title = "Could not found page.";
    message = "Please try again or go back.";
  }
  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default Error;
