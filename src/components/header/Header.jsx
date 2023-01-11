import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/cultsport-black-logo.svg"
        alt="cultsport-black-logo"
        width="100"
      />

      <div className={styles.category}>
        <button>Best Sellers</button>
        <button>Just Launched</button>
        <button>Men</button>
        <button>Women</button>
        <button>Cardio</button>
        <button>Cycles</button>
        <button>Accessories</button>
      </div>
      <div className={styles.profile}>
        <img src="./icons/profile.png" alt="" width="28" height="28" />

        <img src="./icons/cart.png" alt="" width="28" height="28" />
      </div>
    </div>
  );
};

export default Header;
