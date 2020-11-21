import { put, takeEvery } from "redux-saga/effects";
import * as TYPES from "../types";
import * as ACTIONS from "../actions";
import { axiosInstance } from "../../network";

function* getAllProducts({payload}) {
  try {
    const products = yield axiosInstance.get("/products" , { params : payload });
    yield put(ACTIONS.setAllProducts(products.data));
  } catch (error) {
    console.log("[ALL-PRODUCTS-REQUEST]- Catching Error:", error.message);
  }
}


export function* productsSagas() {
  yield takeEvery(TYPES.PRODUCTS_REQUESTED, getAllProducts);
}
