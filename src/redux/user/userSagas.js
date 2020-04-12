import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActiontypes from "./userTypes";
import { auth, googleProvider, createUserProfileDocument } from "../../firebase/firebase.utils";
import { googleSignInSuccess, googleSignInFail, emailSignInSuccess, emailSignInFail } from "./userActions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(googleSignInFail(error));
  }
}

export function* onGoggleSignInStart() {
  yield takeLatest(UserActiontypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(emailSignInFail(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActiontypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoggleSignInStart), call(onEmailSignInStart)]);
}
