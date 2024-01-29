import { useEffect, useState } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [fetching, setFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces(params) {
      setFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("failed to fetch places");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({ message: error.message || "Could not fetch places" });
      }
      setFetching(false);
    }
    fetchPlaces();

    // fetch("http://localhost:3000/places")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   });
  }, []);

  if (error) {
    return (
      <>
        <Error
          title="An error occured"
          message={error.message}
          onConfirm={null}
        />
      </>
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={fetching}
      loadingText="Fetching place, please wait."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
