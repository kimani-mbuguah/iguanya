import { combineReducers } from "redux";

import { fetchAllPostsReducer } from "./postReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({
  fetchAllPostsReducer,
  cartReducer,
});
