import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import dataObj from "../data";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Action";
import heart from "./heart.png";

const AllProducts = () => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  const handleCart = (data) => {
    alert("Added to cart");
    setCart(data);
    localStorage.setItem("dataItem", JSON.stringify([...cart, data]));
    const cartData = JSON.parse(localStorage.getItem("dataItem"));
    setCart(cartData);
    const action = addToCart(cart);
    dispatch(action);
  };
  return (
    <>
      <Header />
      <div className="allProducts" style={{ marginTop: "120px" }}>
        {dataObj.tshirts.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button
                className="addToBag iconBtn"
                onClick={() => {
                  const data = {
                    image: el.image,
                    id: el.id,
                    brand: el.brand,
                    content: el.content,
                    price: el.content,
                    off: el.off,
                    discount: el.discount,
                  };
                  handleCart(data);
                }}
              >
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img src={heart} width="20px" height="20px" alt="" />
                Whislist
              </button>
            </div>
          </div>
        ))}

        {dataObj.topwear.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button
                className="addToBag iconBtn"
                onClick={() => {
                  const data = {
                    image: el.image,
                    id: el.id,
                    brand: el.brand,
                    content: el.content,
                    price: el.content,
                    off: el.off,
                    discount: el.discount,
                  };
                  handleCart(data);
                }}
              >
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img src={heart} width="20px" height="20px" alt="" />
                Whislist
              </button>
            </div>
          </div>
        ))}
        {dataObj.bottomwear.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button
                className="addToBag iconBtn"
                onClick={() => {
                  const data = {
                    image: el.image,
                    id: el.id,
                    brand: el.brand,
                    content: el.content,
                    price: el.content,
                    off: el.off,
                    discount: el.discount,
                  };
                  handleCart(data);
                }}
              >
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img src={heart} width="20px" height="20px" alt="" />
                Whislist
              </button>
            </div>
          </div>
        ))}
        {dataObj.accessories.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button
                className="addToBag iconBtn"
                onClick={() => {
                  const data = {
                    image: el.image,
                    id: el.id,
                    brand: el.brand,
                    content: el.content,
                    price: el.content,
                    off: el.off,
                    discount: el.discount,
                  };
                  handleCart(data);
                }}
              >
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img src={heart} width="20px" height="20px" alt="" />
                Whislist
              </button>
            </div>
          </div>
        ))}
        {dataObj.supplements.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button
                className="addToBag iconBtn"
                onClick={() => {
                  const data = {
                    image: el.image,
                    id: el.id,
                    brand: el.brand,
                    content: el.content,
                    price: el.content,
                    off: el.off,
                    discount: el.discount,
                  };
                  handleCart(data);
                }}
              >
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img src={heart} width="20px" height="20px" alt="" />
                Whislist
              </button>
            </div>
          </div>
        ))}
        {dataObj.cycles.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button
                className="addToBag iconBtn"
                onClick={() => {
                  const data = {
                    image: el.image,
                    id: el.id,
                    brand: el.brand,
                    content: el.content,
                    price: el.content,
                    off: el.off,
                    discount: el.discount,
                  };
                  handleCart(data);
                }}
              >
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img src={heart} width="20px" height="20px" alt="" />
                Whislist
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
