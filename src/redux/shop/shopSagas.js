import { takeEvery } from "redux-saga/effects";

import { shopActionsType } from "./shopTypes";

export function* fetchCollectionsAsync() {
  yield console.log("I am fired");
}

export function* fetchCollectionsStart() {
  yield takeEvery(shopActionsType.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
