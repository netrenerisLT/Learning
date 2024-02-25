import { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  return (
    <div>
      <h2>Hello World</h2>
      {changedText ? (
        <Output>nice to meet you</Output>
      ) : (
        <Output>Not changed</Output>
      )}
      <button
        onClick={() => {
          setChangedText(true);
        }}
      >
        Change
      </button>
    </div>
  );
}

export default Greeting;
