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
      <div className="profile" style={{ marginTop: "80px" }}>
        <div className="left">
          <div>
            <img src="" alt="" />
            <h1>userName</h1>
            <button>View Profile</button>
          </div>
          <div>
            <div>
              <button>Orders</button>
            </div>
            <div>
              <button>Redeem Voucher</button>
            </div>
            <div>
              <button>Account</button>
            </div>
            <div>
              <button>Support</button>
            </div>
            <div>
              <button>Log Out</button>
            </div>
          </div>
        </div>
        <div className="right">
          <h1>Pofile</h1>
          <div className="form">
            <label htmlFor="">
              Name
              <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
              Gender
              <input type="text" name="" id="" />
            </label>
            <label htmlFor="">
              Email
              <input type="email" name="" id="" />
            </label>
            <label htmlFor="">
              Phone Number
              <input type="text" />
            </label>
            <label htmlFor="">
              Date Of Birth
              <input type="date" name="" id="" placeholder="MM/DD/YYYY" />
            </label>
            <label htmlFor="">
              Work Email
              <input type="email" name="" id="" />
            </label>
          </div>
          <div>
            <button>Discard</button>
            <button>Save</button>
          </div>
        </div>
      </div>
      {user ? (
        <div className="signInContainer">
          <p>{user.displayName}</p>
          <button onClick={signOut} className="signin">
            Logout
          </button>
        </div>
      ) : (
        <button
          className="signin"
          onClick={signIn}
          style={{ marginTop: "30px" }}
        >
          Sign in with google
        </button>
      )}
      <Footer />
    </>
  );
};

export default Profile;
