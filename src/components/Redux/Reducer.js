import { GET_USER, GET_DATA, GET_WISHLIST } from "./ActionType";

const initialState = {
  user: null,
  data: [],
  wishlist: {},
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
    // case GET_WISHLIST:
    //   return {
    //     ...state,
    //     wishlist: payload,
    //   };
    default:
      return state;
  }
};
