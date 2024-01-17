export default function Input({ name, type, children, onClick, value, min }) {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input
        onChange={onClick}
        type={type}
        id={name}
        name={name}
        min={min}
        value={value}
        required
      />
    </div>
  );
}
