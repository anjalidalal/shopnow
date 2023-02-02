import React from "react";
import Header from "../header/Header";
import styles from "./order.module.css";

const PlaceOrder = () => {
  return (
    <>
      <Header />
      <button>
        <img src="./back.png" alt="" />
      </button>
      <div className={styles.ordersDiv}>
        <div className={styles.addressForm}>
          <div className={styles.contact}>
            <p>Contact Details</p>
            <input type="text" name="" placeholder="Name*" />
            <input type="text" name="" placeholder="Mobile No*" />
          </div>
          <div className={styles.address}>
            <p>Address</p>
            <input type="text" name="" placeholder="Pincode*" />
            <input
              type="text"
              name=""
              placeholder="Address (House No, Building, Street, Area)*"
            />
            <input type="text" name="" placeholder="Locality/Town*" />
            <input type="text" name="" placeholder="City/District*" />
            <input type="text" name="" placeholder="State*" />
          </div>
          <div className={styles.saveAddress}>
            <p>Save Address</p>
            <div className={styles.bttn}>
              <button className={styles.home}>Home</button>
              <button className={styles.work}>Work</button>
            </div>
          </div>
          <button className={styles.addAddress}>Add Address</button>
        </div>
      </div>
    </>
  );
};

export default PlaceOrder;
