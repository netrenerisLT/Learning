import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const userLost = remainingTime <= 0;

  const formatedTime = (remainingTime / 1000).toFixed(2);

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  const dialogBox = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogBox.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogBox} className="result-modal" onClose={onReset}>
      {userLost ? <h2>You Lost</h2> : <h2>You score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>{formatedTime} seconds left.</strong>
      </p>
      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
