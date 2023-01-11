import React from "react";
import data from "../data";

const Supplements = () => {
  return (
    <div className="article" style={{ marginTop: "0px" }}>
      <p className="heading">
        Health & Nutrition <span className="view-all">view all</span>
      </p>
      <div className="cycle">
        {data.treadmill.map((el) => (
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
    </div>
  );
};

export default Supplements;
