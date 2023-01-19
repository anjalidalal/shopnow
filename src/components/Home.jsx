import React from "react";
import Header from "./header/Header";
import Carousel from "./carousel/Carousel";
import Footer from "./footer/Footer";
import Cart from "./subcomponents/Cart";
import dataObj from "./data";

const Home = () => {
  return (
    <>
      <Header />
      <div className="article">
        <Cart obj={dataObj.tshirts} title={"T-shirts"} />
        <Cart obj={dataObj.topwear} title={"Topwear"} />
        <Cart obj={dataObj.bottomwear} title={"Bottom Wear"} />
        <Cart obj={dataObj.cycles} title={"Cycle"} />
        <Cart obj={dataObj.supplements} title={"Supplements"} />
        <Cart obj={dataObj.accessories} title={"Accessories"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
