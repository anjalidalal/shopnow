import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import AddToCart from "./profile/AddToCart";
import Login from "./profile/Login";
import AllProducts from "./subcomponents/AllProducts";
import PlaceOrder from "../components/order/PlaceOrder";
import SingleProduct from "./singlePage/SingleProduct";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/user-login" element={<Login />} />
        <Route path="/cart" element={<AddToCart />} />{" "}
        <Route path="/orders" element={<PlaceOrder />} />
        <Route path="/product" element={<SingleProduct />} />
      </Routes>
    </>
  );
};

export default Routers;
