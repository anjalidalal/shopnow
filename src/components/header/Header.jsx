import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  const [className, setClassName] = useState(styles.categoryMobileView);
  const handleClassName = () => {
    setClassName(styles.categoryTransform);
  };
  return (
    <>
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

          <button className={styles.btn}>Just Launched</button>

          <button className={styles.btn}>Men</button>

          <button className={styles.btn}>Women</button>

          <button className={styles.btn}>Cardio</button>

          <button className={styles.btn}>Cycles</button>

          <button className={styles.btn}>Supplements</button>

          <button className={styles.btn}>Accessories</button>
        </div>
        <div className={styles.icons}>
          <Link to="/profile">
            <img
              src="./icons/profile.png"
              alt=""
              width="30"
              height="30"
              className={styles.profile}
            />
          </Link>
          <Link to="/add-to-cart">
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
              src="./icons/menu.png"
              className={styles.menu}
              width="30"
              height="34"
              onClick={handleClassName}
            />
          </div>
        </div>
      </div>
      <div className={className}>
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
    </>
  );
};

export default Header;
