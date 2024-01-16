import { useState } from "react";

export default function Input({ name, type, children, onClick }) {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input onChange={onClick} type={type} id={name} name={name} required />
    </div>
  );
}
