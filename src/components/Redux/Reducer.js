import { ADD_TO_CART } from "./ActionType";
import { GET_USER } from "./ActionType";

const initialState = {
  user: null,
  data: [],
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

    default:
      return state;
  }
};
