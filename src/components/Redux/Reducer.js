import { ADD_TO_CART } from "./ActionType";
import { GET_USER, GET_DATA } from "./ActionType";

const initialState = {
  user: null,
  data: [],
  wishlist: {},
};
export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, payload],
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
