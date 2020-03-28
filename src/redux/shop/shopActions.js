import { shopActionsType } from "./shopTypes";

export const updateCollections = collections => {
  return { type: shopActionsType.UPDATE_COLLECTIONS, payload: collections };
};
