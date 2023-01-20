import { ADD_TO_CART } from "./ActionType";
import { GET_USER, GET_DATA } from "./ActionType";
import firebase from "../../services/firebase";
import { database } from "../../services/firebase";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};

export const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};

export const fetchData = () => async (dispatch) => {
  try {
    const querySnapshot = (await database.collection("products").get()).docs;

    const data = querySnapshot.map((el) => {
      return {
        ...el.data(),
        docId: el.id,
      };
    });
    console.log("data", querySnapshot);
    dispatch(getData(data));
  } catch (err) {
    dispatch(getData([]));
  }
};

export const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};
