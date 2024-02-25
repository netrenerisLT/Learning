import { useState } from "react";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  return (
    <div>
      <h2>Hello World</h2>
      {changedText ? <p>nice to meet you</p> : <p>Not changed</p>}
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
