import React from "react";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Cycle from "./components/subcomponents/Cycle";
import Tshirts from "./components/subcomponents/T-shirt";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Cycle />
      <Tshirts />
      <Footer />
    </>
  );
};

export default App;
