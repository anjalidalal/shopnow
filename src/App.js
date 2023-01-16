import React from "react";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Routers from "./components/Routers";

const App = () => {
  const data = useSelector((store) => store.data);
  console.log(data);
  return (
    <>
      <Routers />
    </>
  );
};

export default App;
