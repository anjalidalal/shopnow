import React, { useState } from "react";
import Header from "../header/Header";
import manB from "./manB.png";
import manP from "./manP.png";
import womenB from "./womenB.png";
import womenP from "./womenP.png";
import { signIn, signOut } from "../../services/firebase";
import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const { user } = useSelector((state) => state);
  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [gender, setGender] = useState("");

  const handleMale = () => {
    setIsMale(true);
    setIsFemale(false);
    setGender("Male");
  };

  const handleFemale = () => {
    setIsMale(false);
    setIsFemale(true);
    setGender("Female");
  };

  return (
    <>
      <Header />
      {user ? (
        <>
          <div className="afterLoggedIn" style={{ marginTop: "56px" }}>
            <div className="left">
              <div className="upper">
                <img src={user.photo} className="img" alt="" />
                <div className="name">
                  <p> {user.displayName} </p>
                  <span>View Profile</span>
                </div>
              </div>
              <div className="lower">
                <Link to="/cart">
                  <div className="list">
                    <button>Orders</button>
                    <img
                      src="./icons/cart.png"
                      width="25px"
                      height="25px"
                      alt=""
                    />
                  </div>
                </Link>
                <div className="list">
                  <button>Redeem Voucher</button>
                  <img
                    src="./icons/voucher.png"
                    width="25px"
                    height="25px"
                    alt=""
                  />
                </div>
                <div className="list">
                  <button>Account</button>
                  <img
                    src="./icons/settings.png"
                    width="25px"
                    height="25px"
                    alt=""
                  />
                </div>
                <div className="list">
                  <button>Support</button>
                  <img
                    src="./icons/support.png"
                    width="25px"
                    height="25px"
                    alt=""
                  />
                </div>
                <div onClick={signOut} className="list">
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
              <img src={user.photo} className="img" alt="" />
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
                  <div className="genderInput">
                    <input
                      type="text"
                      name=""
                      value={gender}
                      className="input"
                    />
                    <div className="genderImg">
                      <img
                        src={isMale ? manP : manB}
                        width="32px"
                        height="32px"
                        onClick={handleMale}
                        alt=""
                      />
                      <img
                        src={isFemale ? womenP : womenB}
                        width="27px"
                        height="27px"
                        onClick={handleFemale}
                        alt=""
                      />
                    </div>
                  </div>
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

export default Login;
