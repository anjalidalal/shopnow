import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import styles from "./header.module.css";
import menu from "./menu.png";
import cross from "./cross.png";

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);
  const handleClassName = () => {
    setIsTrue(!isTrue);
  };
  return (
    <>
      <div
        className={
          isTrue ? styles.categoryTransform : styles.categoryMobileView
        }
      >
        <Link to="/all-products">
          <button className={styles.btn}>Best Sellers</button>
        </Link>
        <Link to="/all-products">
          <button className={styles.btn}>Just Launched</button>
        </Link>
        <Link to="/all-products">
          <button className={styles.btn}>Men</button>
        </Link>
        <Link to="/all-products">
          <button className={styles.btn}>Women</button>
        </Link>
        <Link to="/all-products">
          <button className={styles.btn}>Cardio</button>
        </Link>
        <Link to="/all-products">
          <button className={styles.btn}>Cycles</button>
        </Link>
        <Link to="/all-products">
          <button className={styles.btn}>Supplements</button>
        </Link>
        <Link to="/all-products">
          <button className={styles.btn}>Accessories</button>
        </Link>
      </div>
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
          <Link to="/all-products">
            <button className={styles.btn}>Just Launched</button>
          </Link>
          <Link to="/all-products">
            <button className={styles.btn}>Men</button>
          </Link>
          <Link to="/all-products">
            <button className={styles.btn}>Women</button>
          </Link>
          <Link to="/all-products">
            <button className={styles.btn}>Cycles</button>
          </Link>
          <Link to="/all-products">
            <button className={styles.btn}>Supplements</button>
          </Link>
          <Link to="/all-products">
            <button className={styles.btn}>Accessories</button>
          </Link>
        </div>
        <div className={styles.icons}>
          <Link to="/user-login">
            <img
              src="./icons/profile.png"
              alt=""
              width="30"
              height="30"
              className={styles.profile}
            />
          </Link>
          <Link to="/cart">
            <img
              src="./icons/cart.png"
              alt=""
              width="30"
              height="30"
              className={styles.bag}
            />
          </Link>
          <div className={styles.menuContainer}>
            <img
              src={isTrue ? cross : menu}
              className={styles.menu}
              width="30"
              height="34"
              onClick={handleClassName}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
