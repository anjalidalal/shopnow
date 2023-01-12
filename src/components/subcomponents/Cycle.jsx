import React from "react";
import data from "../data";

const Cycle = () => {
  console.log(data);
  console.log(data.cycles);
  return (
    <>
      <p className="heading">
        Cycles <span className="view-all">view all</span>
      </p>
      <div className="cycle">
        {data.cycles.map((el) => (
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

export default Cycle;
