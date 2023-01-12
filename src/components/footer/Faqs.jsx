import React from "react";
import styles from "./footer.module.css";

const Faqs = () => {
  return (
    <div className={styles.faq}>
      <div>
        <div className={styles.headingTwo}>
          Faqs
          <span>See all</span>
        </div>
        <p className={styles.twoQues}>2 questions</p>
      </div>
      <div>
        <li>What is cultsport and what does it offer?</li>
      </div>
      <div>
        <li>What makes cultsport special?</li>
      </div>
    </div>
  );
};

export default Faqs;
