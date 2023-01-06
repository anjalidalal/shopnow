import React from "react";
import profile from "./icons/profile.png";
import cart from "./icons/cart.png";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <img
          src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_150,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cultsport-text.svg"
          alt="vman-and-white-cultsport-text"
          width="150"
          height="38.75968992248062"
        />
        <p>
          cultsport offer top quality, best in class products which provide a
          holistic approach to fitness - combining fitness products with best in
          class fitness content, features, coaching and services
        </p>
      </div>
      <div>
        <p>Contact us</p>
        <p>Privacy policy</p>
        <p>Refund policy</p>
        <p>Terms & conditions</p>
        <p>Download andriod app</p>
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
