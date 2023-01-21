import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";
import heart from "./heart.png";
import pink from "./pink.png";

const AllProducts = () => {
  const [whislist, setWishlist] = useState(false);

  const { data } = useSelector((state) => state);

  return (
    <>
      <Header />
      <div className="slider">
        <button>Male</button>
        <button>Female</button>
        <button>T-shirts</button>
        <button>Topwear</button>
        <button>Bottom Wear</button>
        <button>Cycles</button>
        <button>Accessories</button>
        <button>Supplements</button>
        <button>Roadster</button>
        <button>Cultsport</button>
        <button>Urban Terrain</button>
        <button>Fitkit</button>
        <button>Discount Products</button>
        <button>Brand</button>
        <button>High Price</button>
        <button>Low Price</button>
      </div>
      <div className="allProducts">
        {data.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button className="addToBag">
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button
                className={whislist ? "whislisted" : "whislist"}
                onClick={() => setWishlist(!whislist)}
              >
                <img
                  src={whislist ? pink : heart}
                  width="20px"
                  height="20px"
                  alt=""
                />
                {whislist ? "Whislisted" : "Whislist"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default AllProducts;
