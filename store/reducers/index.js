import * as types from "../types";


export default function products(state = {}, action) {
  switch (action.type) {
    case types.SET_ALL_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
