"use client";
import { useFormStatus } from "react-dom";

export default function MealsFormStatus() {
  const { pending } = useFormStatus(); //this hook must be added to jsx component
  return (
    <button disabled={pending}>{pending ? "Submitting" : "Share Meal"}</button>
  );
}
