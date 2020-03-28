import { shopActionsType } from "./shopTypes";

const initialState = {
  collections: null
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionsType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
