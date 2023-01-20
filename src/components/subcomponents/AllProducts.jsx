// import React, { useState } from "react";
// import Header from "../header/Header";
// import Footer from "../footer/Footer";
// import dataObj from "../data";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../Redux/Action";
// import heart from "./heart.png";
// import pink from "./pink.png";

// const AllProducts = () => {
//   const [whislist, setWishlist] = useState(false);
//   const dispatch = useDispatch();

//   const handleCart = (data) => {
//     alert("Added to bag");
//     const action = addToCart(data);
//     dispatch(action);
//   };

//   return (
//     <>
//       <Header />
//       <div className="slider">
//         <button>Male</button>
//         <button>Female</button>
//         <button>T-shirts</button>
//         <button>Topwear</button>
//         <button>Bottom Wear</button>
//         <button>Cycles</button>
//         <button>Accessories</button>
//         <button>Supplements</button>
//         <button>Roadster</button>
//         <button>Cultsport</button>
//         <button>Urban Terrain</button>
//         <button>Fitkit</button>
//         <button>Discount Products</button>
//         <button>Brand</button>
//         <button>High Price</button>
//         <button>Low Price</button>
//       </div>
//       <div className="allProducts">
//         {dataObj.tshirts.map((el) => (
//           <div className="cart" key={el.id}>
//             <img src={el.image} alt="something" />
//             <span className="brand">{el.brand}</span>
//             <p className="content">{el.content}</p>
//             <p className="price">
//               {el.price} <span className="off">{el.off}</span>{" "}
//               <span className="discount">{el.discount}</span>
//             </p>
//             <div className="buttons">
//               <button
//                 className="addToBag"
//                 onClick={() => {
//                   const data = {
//                     image: el.image,
//                     id: el.id,
//                     brand: el.brand,
//                     content: el.content,
//                     price: el.content,
//                     off: el.off,
//                     discount: el.discount,
//                   };
//                   handleCart(data);
//                 }}
//               >
//                 <img src="./icons/bag.png" alt="" width="18px" height="18px" />
//                 Add to cart
//               </button>
//               <button
//                 className={whislist ? "whislisted" : "whislist"}
//                 onClick={() => setWishlist(!whislist)}
//               >
//                 <img
//                   src={whislist ? pink : heart}
//                   width="20px"
//                   height="20px"
//                   alt=""
//                 />
//                 {whislist ? "Whislisted" : "Whislist"}
//               </button>
//             </div>
//           </div>
//         ))}

//         {dataObj.topwear.map((el) => (
//           <div className="cart" key={el.id}>
//             <img src={el.image} alt="something" />
//             <span className="brand">{el.brand}</span>
//             <p className="content">{el.content}</p>
//             <p className="price">
//               {el.price} <span className="off">{el.off}</span>{" "}
//               <span className="discount">{el.discount}</span>
//             </p>
//             <div className="buttons">
//               <button
//                 className="addToBag iconBtn"
//                 onClick={() => {
//                   const data = {
//                     image: el.image,
//                     id: el.id,
//                     brand: el.brand,
//                     content: el.content,
//                     price: el.content,
//                     off: el.off,
//                     discount: el.discount,
//                   };
//                   handleCart(data);
//                 }}
//               >
//                 <img src="./icons/bag.png" alt="" width="18px" height="18px" />
//                 Add to cart
//               </button>
//               <button className="whislist iconBtn">
//                 <img src={heart} width="20px" height="20px" alt="" />
//                 Whislist
//               </button>
//             </div>
//           </div>
//         ))}
//         {dataObj.bottomwear.map((el) => (
//           <div className="cart" key={el.id}>
//             <img src={el.image} alt="something" />
//             <span className="brand">{el.brand}</span>
//             <p className="content">{el.content}</p>
//             <p className="price">
//               {el.price} <span className="off">{el.off}</span>{" "}
//               <span className="discount">{el.discount}</span>
//             </p>
//             <div className="buttons">
//               <button
//                 className="addToBag iconBtn"
//                 onClick={() => {
//                   const data = {
//                     image: el.image,
//                     id: el.id,
//                     brand: el.brand,
//                     content: el.content,
//                     price: el.content,
//                     off: el.off,
//                     discount: el.discount,
//                   };
//                   handleCart(data);
//                 }}
//               >
//                 <img src="./icons/bag.png" alt="" width="18px" height="18px" />
//                 Add to cart
//               </button>
//               <button className="whislist iconBtn">
//                 <img src={heart} width="20px" height="20px" alt="" />
//                 Whislist
//               </button>
//             </div>
//           </div>
//         ))}
//         {dataObj.accessories.map((el) => (
//           <div className="cart" key={el.id}>
//             <img src={el.image} alt="something" />
//             <span className="brand">{el.brand}</span>
//             <p className="content">{el.content}</p>
//             <p className="price">
//               {el.price} <span className="off">{el.off}</span>{" "}
//               <span className="discount">{el.discount}</span>
//             </p>
//             <div className="buttons">
//               <button
//                 className="addToBag iconBtn"
//                 onClick={() => {
//                   const data = {
//                     image: el.image,
//                     id: el.id,
//                     brand: el.brand,
//                     content: el.content,
//                     price: el.content,
//                     off: el.off,
//                     discount: el.discount,
//                   };
//                   handleCart(data);
//                 }}
//               >
//                 <img src="./icons/bag.png" alt="" width="18px" height="18px" />
//                 Add to cart
//               </button>
//               <button className="whislist iconBtn">
//                 <img src={heart} width="20px" height="20px" alt="" />
//                 Whislist
//               </button>
//             </div>
//           </div>
//         ))}
//         {dataObj.supplements.map((el) => (
//           <div className="cart" key={el.id}>
//             <img src={el.image} alt="something" />
//             <span className="brand">{el.brand}</span>
//             <p className="content">{el.content}</p>
//             <p className="price">
//               {el.price} <span className="off">{el.off}</span>{" "}
//               <span className="discount">{el.discount}</span>
//             </p>
//             <div className="buttons">
//               <button
//                 className="addToBag iconBtn"
//                 onClick={() => {
//                   const data = {
//                     image: el.image,
//                     id: el.id,
//                     brand: el.brand,
//                     content: el.content,
//                     price: el.content,
//                     off: el.off,
//                     discount: el.discount,
//                   };
//                   handleCart(data);
//                 }}
//               >
//                 <img src="./icons/bag.png" alt="" width="18px" height="18px" />
//                 Add to cart
//               </button>
//               <button className="whislist iconBtn">
//                 <img src={heart} width="20px" height="20px" alt="" />
//                 Whislist
//               </button>
//             </div>
//           </div>
//         ))}
//         {dataObj.cycles.map((el) => (
//           <div className="cart" key={el.id}>
//             <img src={el.image} alt="something" />
//             <span className="brand">{el.brand}</span>
//             <p className="content">{el.content}</p>
//             <p className="price">
//               {el.price} <span className="off">{el.off}</span>{" "}
//               <span className="discount">{el.discount}</span>
//             </p>
//             <div className="buttons">
//               <button
//                 className="addToBag iconBtn"
//                 onClick={() => {
//                   const data = {
//                     image: el.image,
//                     id: el.id,
//                     brand: el.brand,
//                     content: el.content,
//                     price: el.content,
//                     off: el.off,
//                     discount: el.discount,
//                   };
//                   handleCart(data);
//                 }}
//               >
//                 <img src="./icons/bag.png" alt="" width="18px" height="18px" />
//                 Add to cart
//               </button>
//               <button className="whislist iconBtn">
//                 <img src={heart} width="20px" height="20px" alt="" />
//                 Whislist
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default AllProducts;
