import { useState } from "react";
import styles from "./questions.module.css";
import Question from "../Question/Question";

const Questions = () => {
  const [questions, setQuestions] = useState([
    {
      question:
        "Anoj pusėj marių širmi žirgai žvengia, kitoj pusėj marių – kamanos blizga.",
      answer: "Žaibas ir griaustinis",
    },
    {
      question: "Ant stogo paplotis.",
      answer: "Mėnulis",
    },
    {
      question: "Be kojų, be rankų duris atidaro.",
      answer: "Vėjas",
    },
  ]);

  return (
    <div className={styles.wrapper}>
      {questions.map((question) => {
        return (
          // key turi but id
          <div key={question.question}>
            <Question question={question.question} answer={question.answer} />
          </div>
        );
      })}
    </div>
  );
};

export default Questions;
