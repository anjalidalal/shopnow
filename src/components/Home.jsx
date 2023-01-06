import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Cycle from "./subcomponent/Cycle";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Cycle />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
