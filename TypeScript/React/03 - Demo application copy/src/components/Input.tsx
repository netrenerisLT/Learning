import { ComponentPropsWithRef } from "react";

type inputProps = {
  id: string;
  label: string;
} & ComponentPropsWithRef<"input">;

export default function Input({ id, label, type }: inputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id}></input>
    </p>
  );
}
