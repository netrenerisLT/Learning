import { useState, useCallback } from "react";
import QUESTIONS_DUMMY from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

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

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionText={QUESTIONS_DUMMY[activeQuestionIndex].text}
        answers={QUESTIONS_DUMMY[activeQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
      ></Question>
    </div>
  );
}
