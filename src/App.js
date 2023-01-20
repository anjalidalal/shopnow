import React, { useEffect } from "react";
import Routers from "./components/Routers";
import { database } from "./services/firebase";
import data from "./components/data";

const App = () => {
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      database
        .collection("products")
        .add(data[i])
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
          console.log("Error adding document: ", error);
        });
    }
    console.log(data.length);
  }, []);

  return (
    <>
      <Routers />
    </>
  );
};

export default App;
