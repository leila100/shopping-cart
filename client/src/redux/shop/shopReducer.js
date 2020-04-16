import { shopActionsType } from "./shopTypes";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case shopActionsType.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
        errorMessage: undefined
      };

    case shopActionsType.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
        errorMessage: undefined
      };

    case shopActionsType.FETCH_COLLECTIONS_FAIL:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default shopReducer;
