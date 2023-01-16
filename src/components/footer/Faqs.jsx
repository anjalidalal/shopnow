import React, { useState } from "react";
import styles from "./footer.module.css";
import expand from "./expand.png";
import collapse from "./collapse.png";

const Faqs = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);

  const handleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  const handleAnswer2 = () => {
    setShowAnswer2(!showAnswer2);
  };

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
        <div className={styles.question} onClick={handleAnswer}>
          <li>What is cultsport and what does it offer?</li>
          <button onClick={handleAnswer}>
            <img
              src={showAnswer ? collapse : expand}
              alt=""
              className={styles.arrow}
            />
          </button>
        </div>
        {showAnswer ? (
          <div className={styles.answer}>
            <p>
              {" "}
              cultsport from the house of cure.fit aims to make health easy by
              providing smart fitness products for the everyday athlete.
              &nbsp;Designed to give you the best workout experience, the
              cultsport product range includes sportswear, at-home workout
              equipments, bicycles &amp; nutraceutical.{" "}
            </p>
            <p className={styles.feedback}>
              Do you find this helpful? <span>Yes</span> <span>No</span>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={styles.ques}>
        <div className={styles.question} onClick={handleAnswer2}>
          <li>What makes cultsport special?</li>
          <button>
            <img
              src={showAnswer2 ? collapse : expand}
              alt=""
              className={styles.arrow}
            />
          </button>
        </div>
        {showAnswer2 ? (
          <div className={styles.answer}>
            <p>
              {" "}
              cultsport has a wide range of smart fitness products across
              categories. Each of the products is crafted to create you workout
              exprience better. Be it the moisture-wicking technology in our
              apparel, extra soft and light insole in our footwear, smart
              tracking in the outdoor cycle or progress tracker in our home
              equipment. cultsport aims to give you products that look good and
              have even better quality. With our post-sale assembly &amp;
              installation service, we make sure you have a delightful
              experience from when you add to cart till when it's delivered.{" "}
            </p>
            <p className={styles.feedback}>
              Do you find this helpful? <span>Yes</span> <span>No</span>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Faqs;
