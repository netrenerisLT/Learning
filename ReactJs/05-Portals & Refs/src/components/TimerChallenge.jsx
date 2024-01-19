import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallange({ title, targetTime }) {
  const [timeRemaining, settimeRemaining] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();

  const timerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    settimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      settimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Timer is running..." : "Timer inactive."}
        </p>
      </section>
    </>
  );
}
