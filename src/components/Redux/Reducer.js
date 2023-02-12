import {
  GET_USER,
  GET_DATA,
  GET_WISHLIST,
  GET_CART,
  GET_SINGLE_PRODUCT,
} from "./ActionType";

const initialState = {
  user: null,
  data: [],
  wishlist: {},
  singleProduct: [],
};
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
    case GET_SINGLE_PRODUCT:
      return {
        ...state,
        singleProduct: payload,
      };

    default:
      return state;
  }
};
