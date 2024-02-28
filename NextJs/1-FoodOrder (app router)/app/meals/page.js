import Link from "next/link";
import React from "react";

export default function Meals() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/share">Share your meal</Link>
      </p>
    </main>
  );
}
