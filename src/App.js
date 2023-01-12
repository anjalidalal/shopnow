import React from "react";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Cycle from "./components/subcomponents/Cycle";
import Tshirts from "./components/subcomponents/T-shirt";
import Supplements from "./components/subcomponents/Supplements";
import Topwear from "./components/subcomponents/Topwear";
import Accessories from "./components/subcomponents/Accessories";
import Bottomwear from "./components/subcomponents/Bottomwear";

const App = () => {
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

export default App;
