import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./singleProduct.module.css";
import { useSelector, useDispatch } from "react-redux";

const SingleProduct = () => {
  const { user, singleProduct } = useSelector((state) => state);
  console.log(singleProduct);
  console.log(singleProduct.image);
  return (
    <>
      <Header />
      <div style={{ marginTop: "70px" }} className={styles.singleProduct}>
        <div className={styles.singleProductImage}>
          <img src={singleProduct.image} alt="something" />
        </div>
        <div>
          <div className={styles.singleProductDetails}>
            <span>{singleProduct.brand}</span>
            <p className={styles.singleProductContent}>
              {singleProduct.content}
            </p>
            <p className={styles.singleProductPrice}>
              {singleProduct.price}{" "}
              <span className="off">{singleProduct.off}</span>{" "}
              <span className="discount">{singleProduct.discount}</span>
            </p>{" "}
          </div>
          {user ? (
            <div className="buttons">
              <button className="addToBag">
                <img src="./icons/bag.png" alt="" width="18px" height="18px" />
                Add to cart
              </button>
              <button
                className="wishlist"
                onClick={() => {
                  handleAddToWishlist(singleProduct.docId);
                }}
              >
                <img
                  src="./icons/heart.png"
                  width="20px"
                  height="20px"
                  alt=""
                />
                Whislist
              </button>
            </div>
          ) : (
            ""
          )}
          <div>
            <p className={styles.para}>
              Work out in comfort with this quick-dry training t-shirt from
              Cultsport One. Made for medium to light intensity activities with
              optimum performnce features. The breathable, moisture-wicking
              fabric keeps you feeling cool and dry,
            </p>{" "}
            <p className={styles.bestSeller}>Best Seller</p>
            <div class={styles.productSize}>
              <div class={styles.titleContainer}>
                <div class={styles.title}>Choose Size</div>
                <div class={styles.action}>(Size Guide)</div>
              </div>
              <div class={styles.sizeContainer}>
                <div class={styles.size}>S</div>
                <div class={styles.size}>M</div>
                <div class={styles.size}>L</div>
                <div class={styles.size}>XL</div>
                <div class={styles.size}>XXL</div>
              </div>
            </div>{" "}
          </div>
          <div style={{ marginTop: "10px" }}>
            <div className={styles.productDetailTitle}>PRODUCT DETAILS</div>
            <div class={styles.productDetailList}>
              <ul>
                <li>Colour: Green</li>
                <li>Fabric: 100% Polyester</li>
                <li>Breathable fabric</li>
                <li>Supersoft, Light weight</li>
                <li>Flydry, Moisture Wicking</li>
                <li>Medium to Light intensity activities</li>
              </ul>
            </div>
          </div>
          <div class="style-prefix-skazhp">
            <div className={styles.pincodeInput}>
              {" "}
              <input
                type="text"
                placeholder="Enter your pincode"
                value=""
                maxlength="6"
                inputmode="numeric"
                pattern="[0-9],*"
              />
              <button>CHECK</button>
            </div>
            <ul>
              <li>Free delivery within 5-7 days</li>
              <li>Easy 30 days return available</li>
              <li>30 days exchange available</li>
              <li>
                <span>
                  {" "}
                  To minimise contact between you and the delivery partner, Pay
                  on Delivery option is temporarily disabled.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
