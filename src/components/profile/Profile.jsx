import React from "react";
import { useEffect } from "react";
import Header from "../header/Header";
import { signIn, signOut } from "../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../services/firebase";
import { fetchData, getUser } from "../Redux/Action";
import Footer from "../footer/Footer";

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
          photo: user.photoURL,
          phoneNumber: user.phoneNumber,
        })
      );
    });
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Header />
      {user ? (
        <>
          <div className="afterLoggedIn" style={{ marginTop: "59px" }}>
            <div className="left">
              <div className="upper">
                <img src={user.photoURL} className="img" alt="" />
                <div className="name">
                  <p> {user.displayName} </p>
                  <span>View Profile</span>
                </div>
              </div>
              <div className="lower">
                <div>
                  <button>Orders</button>
                  <img
                    src="./icons/cart.png"
                    width="25px"
                    height="25px"
                    alt=""
                  />
                </div>
                <div>
                  <button>Redeem Voucher</button>
                  <img
                    src="./icons/voucher.png"
                    width="25px"
                    height="25px"
                    alt=""
                  />
                </div>
                <div>
                  <button>Account</button>
                  <img
                    src="./icons/settings.png"
                    width="25px"
                    height="25px"
                    alt=""
                  />
                </div>
                <div>
                  <button>Support</button>
                  <img
                    src="./icons/support.png"
                    width="25px"
                    height="25px"
                    alt=""
                  />
                </div>
                <div onClick={signOut}>
                  <button>Log Out</button>
                  <img
                    src="./icons/logout.png"
                    width="25px"
                    height="25px"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="right">
              <img src={user.photoURL} className="img" alt="" />
              <h1>Pofile</h1>
              <div className="form">
                <label htmlFor="">
                  Name
                  <input
                    type="text"
                    name=""
                    value={user.displayName}
                    className="input"
                  />
                </label>
                <label htmlFor="">
                  Gender
                  <input type="text" name="" value="" className="input">
                    <img src="" alt="" />
                    <img src="" alt="" />
                  </input>
                </label>
                <label htmlFor="">
                  Email
                  <input
                    type="email"
                    name=""
                    value={user.email}
                    className="input"
                  />
                </label>
                <label htmlFor="">
                  Phone Number
                  <input
                    type="text"
                    value={user.phoneNumber}
                    className="input"
                  />
                </label>
                <label htmlFor="">
                  Date Of Birth
                  <input
                    type="date"
                    name=""
                    value=""
                    className="input"
                    placeholder="MM/DD/YYYY"
                  />
                </label>
                <label htmlFor="">
                  Work Email
                  <input
                    type="email"
                    name=""
                    value=""
                    placeholder="Add Work Email"
                    className="input"
                  />
                </label>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div className="beforeLoggedIn">
          <div className="module">
            <button className="signInBtn" onClick={signIn}>
              <img src="./icons/google.png" width="28px" height="28px" alt="" />{" "}
              Sign In With Google{" "}
            </button>
            <p>
              * By Continuing you agree to the{" "}
              <span className="span"> Terms of Services</span>and{" "}
              <span className="span">Privacy Policy</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
