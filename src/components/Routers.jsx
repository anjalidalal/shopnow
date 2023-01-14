import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Home";
import AddToCart from "./AddToCart";
import Profile from "./Profile";
import AllProducts from "./subcomponents/AllProducts";
import Cycle from "./subcomponents/Cycle";
import Topwear from "./subcomponents/Topwear";
import Tshirts from "./subcomponents/T-shirt";
import Supplements from "./subcomponents/Supplements";
import Accessories from "./subcomponents/Accessories";
import Bottomwear from "./subcomponents/Bottomwear";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/cycles" element={<Cycle />} />
        <Route path="/just-launched" element={<Topwear />} />
        <Route path="/men" element={<Tshirts />} />
        <Route path="/women" element={<Bottomwear />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </>
  );
};

export default Routers;
