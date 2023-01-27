import React, { useEffect } from "react";
import Routers from "./components/Routers";
import { useDispatch } from "react-redux";
import { auth } from "./services/firebase";
import { fetchData, getUser, fetchWishlist } from "./components/Redux/Action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch(
        getUser({
          displayName: user.displayName,
          email: user.email,
          id: user.uid,
        })
      );
      dispatch(fetchWishlist(user?.uid));
    });

    dispatch(fetchData());
  }, []);

  return (
    <>
      <Routers />
    </>
  );
};

export default App;
