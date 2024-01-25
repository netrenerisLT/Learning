import { useEffect, useState } from "react";
import ProgresBar from "./ProgresBar";

const TIMER = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    const time = setTimeout(() => {
      onConfirm();
    }, TIMER);

    return () => {
      clearTimeout(time);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgresBar timer={TIMER} />
    </div>
  );
}
