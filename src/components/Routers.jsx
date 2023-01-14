import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import AddToCart from "./AddToCart";
import Profile from "./Profile";
import AllProducts from "./subcomponents/AllProducts";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
      </Routes>
    </>
  );
};

export default Routers;
