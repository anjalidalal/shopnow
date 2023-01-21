import React from "react";
import { useEffect } from "react";
import Header from "./header/Header";
import { signIn, signOut } from "../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../services/firebase";
import { fetchData, getUser } from "./Redux/Action";
import Footer from "./footer/Footer";

const Profile = () => {
  const { user } = useSelector((state) => state);

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

  return (
    <>
      <Header />
      {user ? (
        <div className="signInContainer" style={{ marginTop: "80px" }}>
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
      <Footer />
    </>
  );
};

export default Profile;
