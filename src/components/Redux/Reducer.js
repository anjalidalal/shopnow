import { ADD_TO_CART } from "./ActionType";

export const Reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
};
