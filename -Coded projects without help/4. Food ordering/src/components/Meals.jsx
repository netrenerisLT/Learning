import MealBox from "./MealBox";
import Error from "./Error";
import useHTTP from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHTTP("http://localhost:3000/meals", requestConfig, []);

  if (error) {
    return <Error title="Failed to fetch meals." message={error}></Error>;
  }

  return (
    <>
      {isLoading ? (
        <p className="center">Loading meals menu.</p>
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
