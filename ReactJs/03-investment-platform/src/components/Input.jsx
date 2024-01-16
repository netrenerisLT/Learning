export default function Input({ name, type, children }) {
  return (
    <div>
      <label htmlFor={name}>{children}</label>
      <input type={type} id={name} name={name} required />
    </div>
  );
}
