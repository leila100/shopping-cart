import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

export const selectCollectionsArr = createSelector([selectCollections], collections =>
  collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => {
  return createSelector([selectCollections], collections => (collections ? collections[collectionUrlParam] : null));
};

export const selectIsFetching = createSelector([selectShop], shop => shop.isFetching);

export const selectErrorMessage = createSelector([selectShop], shop => shop.errorMessage);
