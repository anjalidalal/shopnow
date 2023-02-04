import { GET_USER, GET_DATA, GET_WISHLIST, GET_CART } from "./ActionType";

const initialState = {
  user: null,
  data: [],
  wishlist: {},
  cart: [],
};
console.log(initialState.wishlist);
export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case GET_DATA:
      return {
        ...state,
        data: payload,
      };
    case GET_WISHLIST:
      return {
        ...state,
        wishlist: payload,
      };
    // case GET_CART:
    //   return {
    //     ...state,
    //     data: payload,
    //   };
    default:
      return state;
  }
};
