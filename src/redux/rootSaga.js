import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/userSagas";
import { cartSagas } from "./cart/cartSagas";
import { shopSagas } from "./shop/shopSagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(cartSagas), call(shopSagas)]);
}
