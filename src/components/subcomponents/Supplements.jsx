import React from "react";
import { Link } from "react-router-dom";
import data from "../data";

const Supplements = () => {
  return (
    <>
      <p className="heading">
        Health & Nutrition{" "}
        <Link to="/all-products">
          <span className="view-all">view all</span>
        </Link>
      </p>
      <div className="cycle">
        {data.supplements.map((el) => (
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

export default Supplements;
