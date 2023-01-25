// import { ADD_TO_CART } from "./ActionType";
import { GET_USER, GET_DATA, GET_WISHLIST } from "./ActionType";
import firebase from "../../services/firebase";
import { database } from "../../services/firebase";

// export const addToCart = (data) => {
//   return {
//     type: ADD_TO_CART,
//     payload: data,
//   };
// };

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

const fetchWishlist = (id) => async (dispatch) => {
  try {
    const wishlist = (
      await database.collection("wishlist").doc(id).get()
    ).data();
    dispatch(getWishlist(wishlist || {}));
  } catch (error) {
    dispatch(getWishlist([]));
  }
};

const getWishlist = (data) => {
  return {
    type: GET_WISHLIST,
    payload: data,
  };
};

const addToWishlist = (wishlistDocId) => async (dispatch) => {
  try {
    await database.collection("wishlist").doc(wishlistDocId).update();
    dispatch(fetchWishlist(wishlistDocId));
  } catch (error) {
    dispatch(fetchWishlist(wishlistDocId));
  }
};

export { fetchData, getData, fetchWishlist, addToWishlist, getWishlist };
