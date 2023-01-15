import { ADD_TO_CART } from "./ActionType";

const initialState = {
  data: [],
};
export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        data: [...state.data, payload],
      };
    default:
      return state;
  }
};
