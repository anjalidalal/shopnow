import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import styles from "./order.module.css";

const PlaceOrder = () => {
  return (
    <>
      <Header />
      <div className={styles.ordersDiv}>
        {/* <Link to="/cart">
          <button style={{ margin: "10px" }}>
            <img src="./icons/back.png" width="22px" height="22px" alt="" />
          </button>
        </Link> */}
        <div className={styles.addressForm}>
          <div className={styles.contact}>
            <p className={styles.label}>Contact Details</p>
            <input
              type="text"
              name=""
              className={styles.input}
              placeholder="Name*"
            />
            <input
              type="text"
              name=""
              className={styles.input}
              placeholder="Mobile No*"
            />
          </div>
          <div className={styles.address}>
            <p className={styles.label}> Address</p>
            <input
              type="text"
              name=""
              className={styles.input}
              placeholder="Pincode*"
            />
            <input
              type="text"
              name=""
              className={styles.input}
              placeholder="Address (House No, Building, Street, Area)*"
            />
            <input
              type="text"
              name=""
              className={styles.input}
              placeholder="Locality/Town*"
            />
            <input
              type="text"
              name=""
              className={styles.input}
              placeholder="City/District*"
            />
            <input
              type="text"
              name=""
              className={styles.input}
              placeholder="State*"
            />
          </div>
          <div className={styles.saveAddress}>
            <p className={styles.label}>Save Address</p>
            <div className={styles.bttn}>
              <button className={styles.home}>Home</button>
              <button className={styles.work}>Work</button>
            </div>
          </div>
          <button className={styles.addAddress}>Add Address</button>
        </div>
        <div className={styles.priceDetails}>
          <p className={styles.label}>Price Details</p>
          <div className={styles.amountCalculation}>
            <p>Total MRP</p>
            <p> ₹1100</p>
          </div>
          <div className={styles.amountCalculation}>
            <p>Discount</p>
            <p>₹200</p>
          </div>
          <div className={styles.amountCalculation}>
            <p> Coupon Discount</p>
            <p>₹0</p>
          </div>
          <div className={styles.amountCalculation}>
            <p>Delivery Charges</p>
            <p>Free</p>
          </div>
          <div className={styles.totalAmount}>
            <p>Total Amount</p>
            <p>₹1100</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
