import * as types from "../types";

const INITIAL_STATE = {
  allProducts: [],
};

export default function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    default:
      return state;
  }
}
