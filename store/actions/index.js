import * as types from "../types";

export function requestProducts(payload) {
  return {
    type: types.PRODUCTS_REQUESTED,
    payload,
  };
}

export function setAllProducts(payload) {
  return {
    type: types.SET_ALL_PRODUCTS,
    payload,
  };
}
