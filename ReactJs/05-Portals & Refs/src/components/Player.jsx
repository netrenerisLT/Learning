import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSetsubmitted] = useState(false);

  function changeName(event) {
    setPlayerName(event.target.value);
  }

  function handleClick(params) {
    setSetsubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : "unknown entity"} </h2>
      <p>
        <input type="text" onChange={changeName} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
