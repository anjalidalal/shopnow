import React from "react";
import { Link } from "react-router-dom";

const Card = ({ obj, title }) => {
  return (
    <>
      <p className="heading">
        {title}
        <Link to="/all-products">
          <span className="view-all">view all</span>
        </Link>
      </p>
      <div className="productsContainer">
        {obj.map((el) => (
          <div className="card" key={el.id}>
            <img src={el.image} alt="" />
            <div className="productDetail">
              <span className="brand">{el.brand}</span>
              <p className="content">{el.content}</p>
              <p className="price">
                {el.price} <span className="off">{el.off}</span>{" "}
                <span className="discount">{el.discount}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
