import React from "react";
import Header from "./header/Header";
import { useSelector } from "react-redux";

const AddToCart = () => {
  // const data = useSelector((store) => store.data);

  return (
    <>
      <Header />
      <div className="container">
        {/* {data.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p> */}
        {/* </div>
        ))} */}
      </div>
    </>
  );
};

export default AddToCart;
