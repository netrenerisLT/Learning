import { useEffect, useState } from "react";
import MealBox from "./MealBox";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const mealsData = await response.json();
        setLoadedMeals(mealsData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMeals();
  }, [setLoadedMeals]);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealBox
          key={meal.id}
          name={meal.name}
          price={meal.price}
          description={meal.description}
          image={meal.image}
        />
      ))}
    </ul>
  );
}
