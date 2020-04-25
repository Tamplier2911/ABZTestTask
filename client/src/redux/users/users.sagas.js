import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

// users actions
import {} from "./users.actions";

import usersTypes from "./users.types";

const { FETCH_ALL_USERS_START } = usersTypes;

export function* fetchUsers() {
  try {
    const res = yield axios({
      method: "GET",
      url: "http://example.com/users",
    });
    yield put(/* success action */);
  } catch (err) {
    yield put(/* failure action */);
  }
}

export function* onFetchUsersStart() {
  yield takeLatest(FETCH_ALL_USERS_START, fetchUsers);
}

export function* usersSaga() {
  yield all([call(onFetchUsersStart)]);
}
