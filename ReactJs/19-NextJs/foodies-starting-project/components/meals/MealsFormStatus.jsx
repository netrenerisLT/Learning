"use client";
import { useFormStatus } from "react-dom";

export default function MealsFormStatus() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting" : "Share Meal"}</button>
  );
}
