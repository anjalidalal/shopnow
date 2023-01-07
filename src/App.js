import React from "react";
import Header from "./components/header/Header";
import Carousel from "./components/carousel/Carousel";
import Footer from "./components/footer/Footer";
import Cycle from "./components/subcomponents/Cycle";

const App = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Cycle />
      <Footer />
    </>
  );
};

export default App;
