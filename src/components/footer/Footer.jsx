import React from "react";
import Faqs from "./Faqs";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <Faqs />
      <div className={styles.footer}>
        <div>
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cultsport-text.svg"
            alt="vman-and-white-cultsport-text"
            width="150"
            height="38.75968992248062"
            style={{ margin: "20px 0px 30px 0px" }}
          />
          <p className={styles.detail}>
            cultsport offer top quality, best in class products which provide a
            holistic approach to fitness - combining fitness products with best
            in class fitness content, features, coaching and services
          </p>
        </div>
        <div className={styles.list}>
          <p>Contact us</p>
          <p>Privacy policy</p>
          <p>Refund policy</p>
          <p>Terms & conditions</p>
          <p>Download andriod app</p>
        </div>
        <div>
          <div className={styles.storeBtn}>
            <img src="./icons/apple.png" alt="" />
            <p>
              Download on the<span className={styles.store}>App Store</span>
            </p>
          </div>
          <div className={styles.storeBtn}>
            <img src="./icons/play.png" alt="" />
            <p>
              Get it on<span className={styles.store}>Google play</span>
            </p>
          </div>
          <div className={styles.app}>
            <div className={styles.logo}>
              <img src="./icons/youtube.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="./icons/facebook.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="./icons/twitter.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="./icons/instagram.png" alt="" />
            </div>
            <div className={styles.logo}>
              <img src="./icons/linkedin.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// https://dataplatform-webhook.curefit.co/production/cultsport-app-events

// Request URL: https://cdn-account.optimonk.com/176432/accountInfo.json
// Request Method: GET

// Request URL: https://cultsport.com/api/page/cultsport?breadcrumb=true&seoPageId=cultsport
// Request Method: GET
