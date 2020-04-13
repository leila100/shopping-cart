import UserActionTypes from "./userTypes";

export const googleSignInStart = () => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_START };
};

export const signInSuccess = (user) => {
  return { type: UserActionTypes.SIGN_IN_SUCCESS, payload: user };
};

export const signInFail = (error) => {
  return { type: UserActionTypes.SIGN_IN_FAIL, payload: error };
};

export const emailSignInStart = (emailAndPassword) => {
  return { type: UserActionTypes.EMAIL_SIGN_IN_START, payload: emailAndPassword };
};

export const checkUserSession = () => {
  return { type: UserActionTypes.CHECK_USER_SESSION };
};

export const signOutStart = () => {
  return { type: UserActionTypes.SIGN_OUT_START };
};

export const signOutSuccess = () => {
  return { type: UserActionTypes.SIGN_OUT_SUCCESS };
};

export const signOutFail = (error) => {
  return { type: UserActionTypes.SIGN_OUT_FAIL, payload: error };
};
