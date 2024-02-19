import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";
export default function MealInfo({ params }) {
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound() //calls closest notfound or error page and stops forward execution
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>"); //add html support in instructions and add brakes when space is typed

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill></Image>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`maito:${meal.creatot_email}`}>my</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
        <div className={classes.headerText}></div>
      </header>
      <main className={classes.main}>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
