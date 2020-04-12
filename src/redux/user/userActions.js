import UserActionTypes from "./userTypes";

export const setCurrentUser = (user) => {
  return { type: UserActionTypes.SET_CURRENT_USER, payload: user };
};

export const googleSignInStart = () => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_START };
};

export const googleSignInSuccess = (user) => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS, payload: user };
};

export const googleSignInFail = (error) => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_FAIL, payload: error };
};

export const emailSignInStart = (emailAndPassword) => {
  return { type: UserActionTypes.EMAIL_SIGN_IN_START, payload: emailAndPassword };
};

export const emailSignInSuccess = (user) => {
  return { type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS, payload: user };
};

export const emailSignInFail = (error) => {
  return { type: UserActionTypes.EMAIL_SIGN_IN_FAIL, payload: error };
};
