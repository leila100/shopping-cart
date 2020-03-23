import { CartActionType } from "./cartTypes";

export const toggleCartDropdown = () => {
  return { type: CartActionType.TOGGLE_CART_DROPDOWN };
};

export const addItem = item => {
  return { type: CartActionType.ADD_ITEM, payload: item };
};
