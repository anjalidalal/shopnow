import React from "react";
import dataObj from "../data";
import { Link } from "react-router-dom";

const Bottomwear = () => {
  return (
    <>
      <p className="heading">
        Topwear{" "}
        <Link to="/all-products">
          <span className="view-all">view all</span>
        </Link>
      </p>
      <div className="cycle">
        {dataObj.bottomwear.map((el) => (
          <div className="cart" key={el.id}>
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

export default Bottomwear;
