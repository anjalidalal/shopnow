import React from "react";
import profile from "../icons/profile.png";
import cart from "../icons/cart.png";

const Header = () => {
  return (
    <div className="header">
      <p>Cultsport</p>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button>
        <img src={profile} alt="" />
      </button>
      <button>
        <img src={cart} alt="" />
      </button>
    </div>
  );
};

export default Header;
