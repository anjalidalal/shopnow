import React from "react";
import data from "../data";

const Tshirts = () => {
  return (
    <>
      <p className="heading">
        T-shirts <span className="view-all">view all</span>
      </p>
      <div className="cycle">
        {data.tshirts.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
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

export default Tshirts;
