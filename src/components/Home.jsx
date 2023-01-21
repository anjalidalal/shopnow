import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./header/Header";
import { signIn, signOut } from "../services/firebase";
import Footer from "./footer/Footer";
import { fetchData, getData, getUser } from "./Redux/Action";
import { auth } from "../services/firebase";

const Home = () => {
  const { data, user } = useSelector((state) => state);
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
    });
    dispatch(fetchData());
  }, []);

  console.log(data);

  return (
    <>
      <Header />
      <div className="article">
        {/* <Cart obj={dataObj.tshirts} title={"T-shirts"} />
        <Cart obj={dataObj.topwear} title={"Topwear"} />
        <Cart obj={dataObj.bottomwear} title={"Bottom Wear"} />
        <Cart obj={dataObj.cycles} title={"Cycle"} />
        <Cart obj={dataObj.supplements} title={"Supplements"} />
        <Cart obj={dataObj.accessories} title={"Accessories"} /> */}
        {user ? (
          <div className="signInContainer">
            <p>{user.displayName}</p>
            <button onClick={signOut} className="signin">
              Logout
            </button>
          </div>
        ) : (
          <button className="signin" onClick={signIn}>
            Sign in with google
          </button>
        )}

        {data.map((el) => (
          <div key={el.id}>
            {el.item}{" "}
            {/* <button onClick={handleAddToWishlist(el.docId)}>Wishlist</button> */}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
