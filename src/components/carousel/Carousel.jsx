import React from "react";
import styles from "./carousel.module.css";

const Carousel = () => {
  return (
    <div className={styles.carousel}>
      <div className={styles.slide}>
        <img src="./images/img5.jpg" alt="" />
        <img src="./images/img7.jpg" alt="" />
        <img src="./images/img3.webp" alt="" />
        <img src="./images/img8.jpg" alt="" />
        <img src="./images/img2.jpg" alt="" />
      </div>
    </div>
  );
};

export default Carousel;
