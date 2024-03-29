import { useState } from "react";

export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(props.initialName);

  function handleClick() {
    setIsEditing((isEditing) => !isEditing);

    if (isEditing) {
      props.onChangeName(props.symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          />
        ) : (
          <span className="player-name">{playerName} </span>
        )}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
