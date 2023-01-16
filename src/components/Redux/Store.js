import { createStore } from "redux";
import { Reducer } from "./Reducer";

console.log("hello");

export const store = createStore(
  Reducer,
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()
);
