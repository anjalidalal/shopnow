import React from "react";
import img7 from "../images/img7.jpg";
import img2 from "../images/img2.jpg";
import img8 from "../images/img8.jpg";
import img3 from "../images/img3.webp";
import img5 from "../images/img5.jpg";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="slide">
        <img src={img5} alt="" />
        <img src={img7} alt="" />
        <img src={img3} alt="" />
        <img src={img8} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
