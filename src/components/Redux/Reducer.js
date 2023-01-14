import { ADD_TO_CART } from "./ActionType";

const initialState = {
  cart: [],
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};
