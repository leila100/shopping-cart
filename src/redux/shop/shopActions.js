import { shopActionsType } from "./shopTypes";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => {
  return { type: shopActionsType.FETCH_COLLECTIONS_START };
};

export const fetchCollectionsSuccess = (collections) => {
  return { type: shopActionsType.FETCH_COLLECTIONS_SUCCESS, payload: collections };
};

export const fetchCollectionsFail = (errorMessage) => {
  return { type: shopActionsType.FETCH_COLLECTIONS_FAIL, payload: errorMessage };
};

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => {
        dispatch(fetchCollectionsFail(error.message));
      });
    // could use the firebase API too
    // fetch("https://firestore.googleapis.com/v1/projects/shopping-cart-a3aa4/databases/(default)/documents/collections")
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));
  };
};
