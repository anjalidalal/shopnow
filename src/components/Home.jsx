import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import obj from "./data";
import Carousel from "./carousel/Carousel";

const Home = () => {
  const { data, user } = useSelector((state) => state);

  return (
    <>
      <Header />
      <Carousel />
      <div className="article">
        {/* <Cart obj={dataObj.tshirts} title={"T-shirts"} />
        <Cart obj={dataObj.topwear} title={"Topwear"} />
        <Cart obj={dataObj.bottomwear} title={"Bottom Wear"} />
        <Cart obj={dataObj.cycles} title={"Cycle"} />
        <Cart obj={dataObj.supplements} title={"Supplements"} />
        <Cart obj={dataObj.accessories} title={"Accessories"} /> */}
      </div>
      <Footer />
    </>
  );
};

export default Home;
