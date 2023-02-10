import React from "react";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const { data, wishlist, user } = useSelector((state) => state);
  const [filteredData, setFilteredData] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    wishlist.productsIds !== []
      ? wishlist.productsIds.map((productId) => {
          handleAddToCart(productId);
        })
      : "";
  }, []);
  const handleAddToCart = (docId) => {
    const wishlists = data.filter((el) => el.docId === docId);
    setFilteredData(wishlists);
  };
  console.log(filteredData);

  return (
    <>
      <Header />
      <Link to="/all-products">
        <button className="cartBtn">
          <img src="./icons/back.png" width="20px" height="20px" alt="" /> Your
          Cart{" "}
        </button>
      </Link>
      {user ? (
        <>
          {" "}
          <div className="container">
            {filteredData.map((el) => (
              <div key={el.id} className="cartBox">
                <button className="closeBtn">
                  <img
                    src="./icons/close.png"
                    width="24px"
                    height="24px"
                    alt=""
                  />
                </button>
                <div className="card" key={el.id}>
                  <img src={el.image} alt="something" />
                  <div className="productDetail">
                    <span className="brand">{el.brand}</span>
                    <p className="content">{el.content}</p>
                    <p className="price">
                      {el.price} <span className="off">{el.off}</span>{" "}
                      <span className="discount">{el.discount}</span>
                    </p>
                  </div>
                </div>
                <div className="plusMinusBtn">
                  <button onClick={() => setCounter(counter - 1)}>-</button>
                  {counter}
                  <button onClick={() => setCounter(counter + 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <Link to="/orders">
            <button className="buyNowBtn">Buy Now</button>
          </Link>
        </>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default AddToCart;
