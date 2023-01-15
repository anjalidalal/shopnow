import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
          alt="cultsport-black-logo"
          width="120"
        />
      </Link>
      <div className={styles.category}>
        <Link to="/all-products">
          <button className={styles.btn}>Best Sellers</button>
        </Link>
        <Link to="/just-launched">
          <button className={styles.btn}>Just Launched</button>
        </Link>
        <Link to="/men">
          <button className={styles.btn}>Men</button>
        </Link>
        <Link to="/women">
          <button className={styles.btn}>Women</button>
        </Link>
        <Link to="/supplements">
          <button className={styles.btn}>Cardio</button>
        </Link>
        <Link to="/cycle">
          <button className={styles.btn}>Cycles</button>
        </Link>
        <Link to="/supplements">
          <button className={styles.btn}>Supplements</button>
        </Link>
        <Link to="/accessories">
          <button className={styles.btn}>Accessories</button>
        </Link>
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
