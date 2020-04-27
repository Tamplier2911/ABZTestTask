import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";
import registerTypes from "./register.types";

import {
  registerSuccess,
  registerFailure,
  getRegistrationTokenSuccess,
  getRegistrationTokenFailure,
  getPositionsSuccess,
  getPositionsFailure,
  getPositionsStart,
} from "./register.actions";

const {
  REGISTER_START,
  GET_REGISTRATION_TOKEN_START,
  GET_POSITIONS_START,
} = registerTypes;

export function* register(action) {
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

export function* getPositions() {
  try {
    const res = yield axios({
      method: "GET",
      url: "https://frontend-test-assignment-api.abz.agency/api/v1/positions",
    });
    yield put(getPositionsSuccess(res.data.positions));
  } catch (err) {
    yield put(getPositionsFailure(err.message));
  }
}

export function* onRegisterStart() {
  yield takeLatest(REGISTER_START, register);
}

export function* onGetRegistrationTokenStart() {
  yield takeLatest(GET_REGISTRATION_TOKEN_START, getRegistrationToken);
}

export function* onGetPositionsStart() {
  yield takeLatest(GET_POSITIONS_START, getPositions);
}

export function* registerSagas() {
  yield all([
    call(onRegisterStart),
    call(onGetRegistrationTokenStart),
    call(onGetPositionsStart),
  ]);
}
