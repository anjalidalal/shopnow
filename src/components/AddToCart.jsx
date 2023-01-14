import React from "react";
import Header from "./header/Header";
import { useSelector } from "react-redux";

const AddToCart = () => {
  const data = useSelector((store) => store.data);
  return (
    <>
      <Header />
      <div>
        {data.map((el) => (
          <p>{el}</p>
        ))}
      </div>
    </>
  );
};

export default AddToCart;
