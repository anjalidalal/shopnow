import {
  GET_USER,
  GET_DATA,
  GET_WISHLIST,
  GET_CART,
  GET_SINGLE_PRODUCT,
} from "./ActionType";
import firebase from "../../services/firebase";
import { database } from "../../services/firebase";

export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};

const fetchData = () => async (dispatch) => {
  try {
    const querySnapshot = (await database.collection("items").get()).docs;

    const data = querySnapshot.map((el) => {
      return {
        ...el.data(),
        docId: el.id,
      };
    });
    dispatch(getData(data));
  } catch (err) {
    dispatch(getData([]));
  }
};

const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

const fetchWishlist = (userId) => async (dispatch) => {
  try {
    const wishlist = (
      await database.collection("wishlistData").doc(userId).get()
    ).data();

    dispatch(getWishlist(wishlist || {}));
  } catch (error) {
    console.log(error);
    dispatch(getWishlist([]));
  }
};

const getWishlist = (data) => {
  return {
    type: GET_WISHLIST,
    payload: data,
  };
};

const addToWishlist = (wishlistDocId, newProductId) => async (dispatch) => {
  try {
    database
      .collection("wishlistData")
      .doc(wishlistDocId)
      .update({
        productsIds: firebase.firestore.FieldValue.arrayUnion(newProductId),
      });
    dispatch(fetchWishlist(wishlistDocId));
  } catch (error) {
    console.log(error);
    dispatch(fetchWishlist(wishlistDocId));
  }
};

// const fetchCartData = (docId) => async (dispatch) => {
//   try {
//     const cart = (await database.collection("items").doc(docId).get()).data();

//     dispatch(getCartData(cart || {}));
//   } catch (error) {
//     dispatch(getCartData([]));
//   }
// };

// const getCartData = (data) => {
//   return {
//     type: GET_CART,
//     payload: data,
//   };
// };

const getSingleProduct = (data) => {
  return {
    type: GET_SINGLE_PRODUCT,
    payload: data,
  };
};

export {
  fetchData,
  getData,
  addToWishlist,
  fetchWishlist,
  getWishlist,
  getSingleProduct,
};
