import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import AddToCart from "./profile/AddToCart";
import Login from "./profile/Login";
import AllProducts from "./subcomponents/AllProducts";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/add-to-cart" element={<AddToCart />} />{" "}
      </Routes>
    </>
  );
};

export default Routers;
