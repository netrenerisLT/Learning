export default function Button(props) {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`${props.btn} btn hover:scale-105`}
      >
        {props.children}
      </button>
    </>
  );
}
