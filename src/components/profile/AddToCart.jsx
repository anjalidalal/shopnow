import React from "react";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { fetchCartData } from "../Redux/Action";

const AddToCart = () => {
  const { user, data, wishlist, cart } = useSelector((state) => state);
  const [filteredData, setFilteredData] = useState([]);
  console.log(cart);

  const dispatch = useDispatch();

  useEffect(() => {
    wishlist.productsIds !== []
      ? wishlist.productsIds.map((productId) => {
          dispatch(fetchCartData(productId));
        })
      : "";
  }, []);

  // console.log(data.docId);

  // const handleAddToCart = (docId) => {
  //   dispatch(fetchCartData(docId));
  // };

  return (
    <>
      <Header />
      <div className="container">
        {/* {wishlist.productsIds !== [] ? (
          <div>
            {wishlist.productsIds.map((productId) => (
              <>
                <h1>{productId}</h1>
              </>
            ))}
          </div>
        ) : (
          <p>There are no items in whislist</p>
        )} */}
        {cart.map((el) => (
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

export default AddToCart;
