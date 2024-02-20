"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

//this fn executes on the server, when "action" form is submitted

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator_email: formData.get("email"),
    creator: formData.get("name"),
  };

  await saveMeal(meal);
  redirect("/meals")
}
