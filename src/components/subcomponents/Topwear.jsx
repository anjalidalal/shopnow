import React from "react";
import data from "../data";

const Topwear = () => {
  return (
    <>
      <p className="heading">
        Topwear <span className="view-all">view all</span>
      </p>
      <div className="cycle">
        {data.topwear.map((el) => (
          <div className="cart">
            <img src={el.image} alt="" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Topwear;
