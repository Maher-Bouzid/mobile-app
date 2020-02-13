import productsReducer from "./products";
import loggedReducer from "./logged";

import { combineReducers } from "redux";
const allReducers = combineReducers({
  productsReducer,
  loggedReducer
});
export default allReducers;
