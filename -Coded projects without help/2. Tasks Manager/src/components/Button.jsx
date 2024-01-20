export default function Button(props) {
  return (
    <>
      <button
        className={`${props.bColor} ${props.bHColor} ${props.tColor} p-4 w-auto rounded-lg uppercase text-1xl`}
      >
        {props.children}
      </button>
    </>
  );
}
