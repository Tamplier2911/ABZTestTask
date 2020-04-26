import { takeLatest, all, call, put } from "redux-saga/effects";
import registerTypes from "./register.types";
import {
  registerSuccess,
  registerFailure,
  getRegistrationTokenSuccess,
  getRegistrationTokenFailure,
} from "./register.actions";
const { REGISTER_START, GET_REGISTRATION_TOKEN_START } = registerTypes;

export function* registerStart(action) {
  try {
    // yield put(registerSuccess());
  } catch (err) {
    // yield put(registerFailure());
  }
}

export function* getRegistrationToken() {
  try {
    // yield put(getRegistrationTokenSuccess());
  } catch (err) {
    // yield put(getRegistrationTokenFailure());
  }
}

export function* onRegisterStart() {
  yield takeLatest(REGISTER_START, registerStart);
}

export function* onGetRegistrationTokenStart() {
  yield takeLatest(GET_REGISTRATION_TOKEN_START, getRegistrationToken);
}

export function* registerSagas() {
  yield all([call(onRegisterStart), call(onGetRegistrationTokenStart)]);
}
