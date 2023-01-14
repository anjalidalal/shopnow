import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import data from "../data";

const AllProducts = () => {
  return (
    <>
      <Header />
      <div className="allProducts" style={{ marginTop: "120px" }}>
        {data.tshirts.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button className="addToBag iconBtn">
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img
                  src="./icons/heart.png"
                  width="20px"
                  height="20px"
                  alt=""
                />
                Whislist
              </button>
            </div>
          </div>
        ))}

        {data.topwear.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button className="addToBag iconBtn">
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img
                  src="./icons/heart.png"
                  width="20px"
                  height="20px"
                  alt=""
                />
                Whislist
              </button>
            </div>
          </div>
        ))}
        {data.bottomwear.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button className="addToBag iconBtn">
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img
                  src="./icons/heart.png"
                  width="20px"
                  height="20px"
                  alt=""
                />
                Whislist
              </button>
            </div>
          </div>
        ))}
        {data.accessories.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button className="addToBag iconBtn">
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img
                  src="./icons/heart.png"
                  width="20px"
                  height="20px"
                  alt=""
                />
                Whislist
              </button>
            </div>
          </div>
        ))}
        {data.supplements.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button className="addToBag iconBtn">
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img
                  src="./icons/heart.png"
                  width="20px"
                  height="20px"
                  alt=""
                />
                Whislist
              </button>
            </div>
          </div>
        ))}
        {data.cycles.map((el) => (
          <div className="cart" key={el.id}>
            <img src={el.image} alt="something" />
            <span className="brand">{el.brand}</span>
            <p className="content">{el.content}</p>
            <p className="price">
              {el.price} <span className="off">{el.off}</span>{" "}
              <span className="discount">{el.discount}</span>
            </p>
            <div className="buttons">
              <button className="addToBag iconBtn">
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button className="whislist iconBtn">
                <img
                  src="./icons/heart.png"
                  width="20px"
                  height="20px"
                  alt=""
                />
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
