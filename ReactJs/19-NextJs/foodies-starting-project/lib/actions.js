"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

//this fn executes on the server, when "action" form is submitted
export async function shareMeal(prevState, formData) {

    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator_email: formData.get("email"),
      creator: formData.get("name"),
    };

  function inValidText(text) {
    return !text || text.trim() === "";
  }


  if (
    inValidText(meal.title) ||
    inValidText(meal.summary) ||
    inValidText(meal.instructions) ||
    inValidText(meal.creator) ||
    inValidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
        message: "invalid input"
    }
  }

  await saveMeal(meal);
  redirect("/meals");
}
