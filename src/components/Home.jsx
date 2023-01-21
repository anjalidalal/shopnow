import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Carousel from "./carousel/Carousel";
import Cart from "./subcomponents/Cart";

const Home = () => {
  const { data } = useSelector((state) => state);
  const [cycles, setCycles] = useState([]);
  const [tShirt, setTShirt] = useState([]);
  const [bottomWear, setBottomWear] = useState([]);
  const [topWear, setTopWear] = useState([]);
  const [supplements, setSupplements] = useState([]);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    const cycle = data.filter((el) => el.type === "Cycle");
    setCycles(cycle);

    const tshirt = data.filter((el) => el.type === "T-shirts");
    setTShirt(tshirt);

    const supplement = data.filter((el) => el.type === "Supplements");
    setSupplements(supplement);

    const accessorie = data.filter((el) => el.type === "Accessories");
    setAccessories(accessorie);

    const topwear = data.filter((el) => el.type === "Topwear");
    setTopWear(topwear);

    const bottomwear = data.filter((el) => el.type === "Bottomwear");
    setBottomWear(bottomwear);
  }, []);

  console.log(cycles);

  return (
    <>
      <Header />
      <Carousel />
      <div className="article">
        <Cart obj={tShirt} title={"T-shirts"} />
        <Cart obj={topWear} title={"Topwear"} />
        <Cart obj={bottomWear} title={"Bottom Wear"} />
        <Cart obj={cycles} title={"Cycle"} />
        <Cart obj={supplements} title={"Supplements"} />
        <Cart obj={accessories} title={"Accessories"} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
