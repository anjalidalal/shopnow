import { ADD_TO_CART } from "./ActionType";

export const addToCart = (data) => {
  console.log(data);
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
