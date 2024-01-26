import { useState, useCallback } from "react";
import QUESTIONS_DUMMY from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");

  const activeQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const quizCompleted = activeQuestionIndex === QUESTIONS_DUMMY.length;

  const handleSelectAnswer = useCallback(
    function handeSelectAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevAnswer) => {
        return [...prevAnswer, selectedAnswer];
      });

      setTimeout(() => {
        if (
          selectedAnswer === QUESTIONS_DUMMY[activeQuestionIndex].answers[0]
        ) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz completed" />
        <h2>Quiz Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS_DUMMY[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS_DUMMY[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            let cssClass = "";
            const isSelected = userAnswers[userAnswers.length - 1] === answer

            if (answerState === "answered" && isSelected) {
              cssClass = "selected"
            } 

            if ((answerState === "correct" || answerState === "wrong" )&& isSelected) {
              cssClass = answerState
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
