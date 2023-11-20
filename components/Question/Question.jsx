import { useEffect, useState } from "react";
import styles from "./question.module.css";

const Question = ({ question, answer }) => {
  const [isShowAnswer, setShowAnswer] = useState(false);

  const showAnswer = () => {
    setShowAnswer(true);
  };

  const buttonMouseOver = () => {
    setTitle("yyyyyyy");
  };

  return (
    <div className={styles.wrapper}>
      <div>{question}</div>

      {isShowAnswer ? (
        <div>{answer}</div>
      ) : (
        <div>To see answer press on " Show Answer" button</div>
      )}

      <button onClick={showAnswer} className={styles.button}>
        Show Answer
      </button>
    </div>
  );
};

export default Question;
