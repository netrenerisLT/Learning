import { useEffect, useState } from "react";
import MealBox from "./MealBox";
import useHTTP from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHTTP("http://localhost:3000/meals", requestConfig, []);

  return (
    <>
      {isLoading ? (
        <p>Loading meals menu.</p>
      ) : (
        <ul id="meals">
          {loadedMeals.map((meal) => (
            <MealBox key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </>
  );
}
