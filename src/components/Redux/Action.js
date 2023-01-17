import { ADD_TO_CART } from "./ActionType";
import { GET_USER } from "./ActionType";

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
