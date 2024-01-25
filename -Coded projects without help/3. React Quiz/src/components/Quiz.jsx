import { useState } from "react";
import QUESTIONS_DUMMY from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  function handeSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswer) => {
      console.log(selectedAnswer);
      return [...prevAnswer, selectedAnswer];
    });
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS_DUMMY[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS_DUMMY[activeQuestionIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handeSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
