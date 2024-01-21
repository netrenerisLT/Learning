import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { name, type, children, min },
  inputRef
) {
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      <label htmlFor={name} className="text-2xl">
        {children}
      </label>
      <input
        className="py-3 w-full p-4"
        type={type}
        id={name}
        name={name}
        min={min}
        ref={inputRef}
        required
      />
    </div>
  );
});

export default Input;
