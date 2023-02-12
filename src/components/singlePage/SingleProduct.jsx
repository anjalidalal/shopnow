import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import styles from "./singleProduct.module.css";
import { useSelector, useDispatch } from "react-redux";

const SingleProduct = () => {
  const { user, singleProduct } = useSelector((state) => state);

  return (
    <>
      <Header />
      <div style={{ marginTop: "70px" }} className={styles.singleProduct}>
        <div className={styles.singleProductImage}>
          <img src={singleProduct.image} alt="something" />
        </div>
        <div className={styles.productInfo}>
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
            <div className={styles.productSize}>
              <div className={styles.titleContainer}>
                <div className={styles.title}>Choose Size</div>
                <div className={styles.action}>(Size Guide)</div>
              </div>
              <div className={styles.sizeContainer}>
                <div className={styles.size}>S</div>
                <div className={styles.size}>M</div>
                <div className={styles.size}>L</div>
                <div className={styles.size}>XL</div>
                <div className={styles.size}>XXL</div>
              </div>
            </div>{" "}
          </div>
          <div style={{ marginTop: "10px" }}>
            <div className={styles.productDetailTitle}>PRODUCT DETAILS</div>
            <div className={styles.productDetailList}>
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
          <div>
            <div className={styles.pincodeInput}>
              {" "}
              <input type="text" placeholder="Enter your pincode" value="" />
              <button>CHECK</button>
            </div>
            <div className={styles.pincodeList}>
              <ul>
                <li>Free delivery within 5-7 days</li>
                <li>Easy 30 days return available</li>
                <li>30 days exchange available</li>
                <li>
                  <span className={styles.bold}>
                    {" "}
                    To minimise contact between you and the delivery partner,
                    Pay on Delivery option is temporarily disabled.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div className={styles.fabricDiv}>
              <p>Fabric</p>
              <div className={styles.fabricList}>
                <ul>
                  <li>100% Polyester</li>
                </ul>
              </div>
            </div>
            <div className={styles.specifications}>
              <p>Specifications</p>
              <div className={styles.specificationsList}>
                <ul>
                  <li>Country of Origin: India</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
