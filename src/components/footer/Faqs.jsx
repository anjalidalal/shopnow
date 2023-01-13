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
        <div className={styles.answer}>
          <p>
            {" "}
            cultsport from the house of cure.fit aims to make health easy by
            providing smart fitness products for the everyday athlete.
            &nbsp;Designed to give you the best workout experience, the
            cultsport product range includes sportswear, at-home workout
            equipments, bicycles &amp; nutraceutical.{" "}
          </p>
        </div>
      </div>
      <div className={styles.ques}>
        <div>
          <li>What makes cultsport special?</li>
          <button onClick={() => setShowAnswer(!showAnswer)}>
            <img src={collapse} alt="" className={styles.arrow} />
          </button>
        </div>
        <div className={styles.answer}>
          <p>
            {" "}
            cultsport has a wide range of smart fitness products across
            categories. Each of the products is crafted to create you workout
            exprience better. Be it the moisture-wicking technology in our
            apparel, extra soft and light insole in our footwear, smart tracking
            in the outdoor cycle or progress tracker in our home equipment.
            cultsport aims to give you products that look good and have even
            better quality. With our post-sale assembly &amp; installation
            service, we make sure you have a delightful experience from when you
            add to cart till when it's delivered.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
