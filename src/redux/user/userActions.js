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
