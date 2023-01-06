import React from "react";

const Content = ({ img }) => {
  return (
    <div>
      <img src={img} alt="" />
      <span>Urban Terrain</span>
      <p>UT1000, Black, Steel MTB 27.5 T Shimano Geared Mountain Cycle</p>
      <p>
        {" "}
        ₹11999 <span> ₹49999</span>
        <span>76% Off</span>
      </p>
    </div>
  );
};
