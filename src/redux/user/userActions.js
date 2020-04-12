import { UserActionType } from "./userTypes";

export const setCurrentUser = (user) => {
  return { type: UserActionType.SET_CURRENT_USER, payload: user };
};

export const googleSignInStart = () => {
  return { type: UserActionType.GOOGLE_SIGN_IN_START };
};

export const googleSignInSuccess = (user) => {
  return { type: UserActionType.GOOGLE_SIGN_IN_SUCCESS, payload: user };
};

export const googleSignInFail = (error) => {
  return { type: UserActionType.GOOGLE_SIGN_IN_FAIL, payload: error };
};

export const emailSignInStart = (emailAndPassword) => {
  return { type: UserActionType.EMAIL_SIGN_IN_START, payload: emailAndPassword };
};

export const emailSignInSuccess = (user) => {
  return { type: UserActionType.EMAIL_SIGN_IN_SUCCESS, payload: user };
};

export const emailSignInFail = (error) => {
  return { type: UserActionType.EMAIL_SIGN_IN_FAIL, payload: error };
};
