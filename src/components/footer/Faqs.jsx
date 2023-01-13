import React, { useState } from "react";
import styles from "./footer.module.css";
import expand from "./expand.png";
import collapse from "./collapse.png";

const Faqs = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  console.log(showAnswer);
  return (
    <div className={styles.faq}>
      <div>
        <div className={styles.headingTwo}>
          Faqs
          <span>See all</span>
        </div>
        <p className={styles.twoQues}>2 questions</p>
      </div>
      <div className={styles.ques}>
        <div>
          <li>What is cultsport and what does it offer?</li>
          <button onClick={() => setShowAnswer(!showAnswer)}>
            <img src={expand} alt="" className={styles.arrow} />
          </button>
        </div>
      </div>
      <div className={styles.ques}>
        <div>
          <li>What makes cultsport special?</li>
          <button onClick={() => setShowAnswer(!showAnswer)}>
            <img src={collapse} alt="" className={styles.arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
