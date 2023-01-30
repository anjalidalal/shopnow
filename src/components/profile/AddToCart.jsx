import React from "react";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const AddToCart = () => {
  const { user, data, wishlist } = useSelector((state) => state);
  const [filteredData, setFilteredData] = useState([]);
  //console.log(wishlist);

  useEffect(() => {
    const wishlistsProducts = data.filter((el) => {
      el.docId === wishlist.productsIds;
    });
    setFilteredData(wishlistsProducts);
  }, []);

  console.log(data.docId);

  return (
    <>
      <Header />
      <div className="container">
        {wishlist.productsIds !== [] ? (
          <div>
            {wishlist.productsIds.map((productId) => (
              <>
                <h1>{productId}</h1>
                {data.map((el) => (
                  {}
                ))}
              </>
            ))}
          </div>
        ) : (
          <p>There are no items in whislist</p>
        )}
      </div>
    </>
  );
};

export default AddToCart;
