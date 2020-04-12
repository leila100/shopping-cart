import { UserActionType } from "./userTypes";

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UserActionType.GOOGLE_SIGN_IN_SUCCESS:
    case UserActionType.EMAIL_SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };

    case UserActionType.GOOGLE_SIGN_IN_FAIL:
    case UserActionType.EMAIL_SIGN_IN_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
