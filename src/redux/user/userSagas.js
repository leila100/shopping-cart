import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActiontypes from "./userTypes";
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from "../../firebase/firebase.utils";
import { signInSuccess, signInFail } from "./userActions";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* onGoggleSignInStart() {
  yield takeLatest(UserActiontypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActiontypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFail(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActiontypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onGoggleSignInStart), call(onEmailSignInStart), call(onCheckUserSession)]);
}
