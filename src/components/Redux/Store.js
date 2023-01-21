import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { Reducer } from "./Reducer";

const store = createStore(
  Reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
