import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals for <span className={classes.span}>you.</span>
        </h1>
        <p>Choose your meal.</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your meal.</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]}/>
      </main>
    </>
  );
}
