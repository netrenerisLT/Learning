import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import MealsItemGrid from "@/components/meals/meals-grid";

export default function Meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals for <span className={styles.highlight}>you.</span>
        </h1>
        <p>Choose your meal.</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share your meal</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsItemGrid meals={[]}/>
      </main>
    </>
  );
}
