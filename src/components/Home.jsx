import React from "react";
import Header from "./header/Header";
import Carousel from "./carousel/Carousel";
import Footer from "./footer/Footer";
import Cycle from "./subcomponents/Cycle";
import Tshirts from "./subcomponents/T-shirt";
import Supplements from "./subcomponents/Supplements";
import Topwear from "./subcomponents/Topwear";
import Accessories from "./subcomponents/Accessories";
import Bottomwear from "./subcomponents/Bottomwear";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <div className="article">
        <Tshirts />
        <Cycle />
        <Topwear />
        <Bottomwear />
        <Supplements />
        <Accessories />
      </div>
      <Footer />
    </>
  );
};

export default Home;
