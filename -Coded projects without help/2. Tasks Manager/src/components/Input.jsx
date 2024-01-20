import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { name, type, children, min },
  inputRef
) {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input
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
