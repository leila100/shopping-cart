import { CartActionType } from "./cartTypes";

const initialState = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case CartActionType.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };

    default:
      return state;
  }
};

export default cartReducer;
