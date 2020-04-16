import { shopActionsType } from "./shopTypes";

export const fetchCollectionsStart = () => {
  return { type: shopActionsType.FETCH_COLLECTIONS_START };
};

export const fetchCollectionsSuccess = (collections) => {
  return { type: shopActionsType.FETCH_COLLECTIONS_SUCCESS, payload: collections };
};

export const fetchCollectionsFail = (errorMessage) => {
  return { type: shopActionsType.FETCH_COLLECTIONS_FAIL, payload: errorMessage };
};
