import { useState } from "react";
import styles from "./question.module.css";

const Question = ({ question, answer }) => {
  const [isShowAnswer, setShowState] = useState(false);

  const showAnswer = () => {
    setShowState(true);
  };

  return (
    <div className={styles.wrapper}>
      <div>{question}</div>

      {isShowAnswer && <div>{answer}</div>}

      <button onClick={showAnswer} className={styles.button}>
        Show Answer
      </button>
    </div>
  );
};

export default Question;
