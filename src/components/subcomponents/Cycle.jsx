import React from "react";
import data from "../data";

const Cycle = () => {
  console.log(data);
  console.log(data.cycles);
  return (
    <div className="cart">
      <div className="cycle">
        {data.cycles.map((el) => (
          <div className="cart">
            <img src={el.image} alt="" />
            <span>{el.brand}</span>
            <p>{el.content}</p>
            <p>
              {el.price} <span>{el.discount}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cycle;
