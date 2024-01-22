export default function Button(props) {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`btn hover:scale-105 ${props.btn}`}
      >
        {props.children}
      </button>
    </>
  );
}
