import { combineReducers } from "redux";

import ProductsReducer from "./reducers";

export default combineReducers({
  products: ProductsReducer,
});
