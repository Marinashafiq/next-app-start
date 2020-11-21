import { all } from "redux-saga/effects";
import { productsSagas } from "./sagas";

export default function* rootSaga() {
  yield all([productsSagas()]);
}
