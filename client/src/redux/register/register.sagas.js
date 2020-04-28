import { takeLatest, all, call, put, select } from "redux-saga/effects";
import axios from "axios";
import registerTypes from "./register.types";

import {
  registerSuccess,
  registerFailure,
  getRegistrationTokenSuccess,
  getRegistrationTokenFailure,
  getPositionsSuccess,
  getPositionsFailure,
} from "./register.actions";

import { fetchUsersStart } from "../users/users.actions";

import { openModal } from "../modal/modal.actions";

const {
  REGISTER_START,
  GET_REGISTRATION_TOKEN_START,
  GET_POSITIONS_START,
} = registerTypes;

export const getToken = (state) => state.register;

export function* register(action) {
  const { email, name, phone, photo, position } = action.payload;
  try {
    // fill up form
    const formData = new FormData();
    formData.append("email", email);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("photo", photo);
    formData.append("position_id", Number(position));

    // access token from state
    const { token } = yield select(getToken);

    // send data to the endpoint
    yield axios({
      method: "POST",
      url: "https://frontend-test-assignment-api.abz.agency/api/v1/users",
      data: formData,
      headers: {
        Token: token,
      },
    });

    // finish registration
    yield put(registerSuccess());

    // pop modal
    yield put(
      openModal({
        title: "Success!",
        content: "You are successfuly registerd!",
      })
    );

    // while modal is up re-fetch users
    yield put(fetchUsersStart(6));
  } catch (err) {
    const {
      statusText,
      data: { message },
    } = err.response;
    yield put(
      openModal({ title: statusText || "How unfortunate!", content: message })
    );
    yield put(registerFailure(err.message));
  }
}

export function* getRegistrationToken() {
  try {
    const res = yield axios({
      method: "GET",
      url: "https://frontend-test-assignment-api.abz.agency/api/v1/token",
    });
    yield put(getRegistrationTokenSuccess(res.data.token));
  } catch (err) {
    yield put(getRegistrationTokenFailure(err.message));
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
