import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
        alt="cultsport-black-logo"
        width="120"
      />

      <div className={styles.category}>
        <Link to="/all-products">
          <button>Best Sellers</button>
        </Link>
        <button>Just Launched</button>
        <button>Men</button>
        <button>Women</button>
        <button>Cardio</button>
        <button>Cycles</button>
        <button>Supplements</button>
        <button>Accessories</button>
      </div>
      <div className={styles.profile}>
        <Link to="/profile">
          <img src="./icons/profile.png" alt="" width="30" height="30" />
        </Link>
        <Link to="/add-to-cart">
          <img src="./icons/cart.png" alt="" width="30" height="30" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
