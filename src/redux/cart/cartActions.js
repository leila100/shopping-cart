import { CartActionType } from "./cartTypes";

export const toggleCartDropdown = () => {
  return { type: CartActionType.TOGGLE_CART_DROPDOWN };
};
