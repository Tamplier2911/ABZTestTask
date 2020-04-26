import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

// users actions
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchMoreUsersSuccess,
  fetchMoreUsersFailure,
} from "./users.actions";

import usersTypes from "./users.types";

const { FETCH_INITIAL_USERS_START, FETCH_MORE_USERS_START } = usersTypes;

export function* fetchUsers(action) {
  try {
    const res = yield axios({
      method: "GET",
      url: `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${
        action.payload || 6
      }`,
    });
    // const { total_pages, total_users, users, count, links } = res.data;
    const { users, links } = res.data;
    yield put(fetchUsersSuccess({ users, links }));
  } catch (err) {
    yield put(fetchUsersFailure(err.message));
  }
}

export function* fetchMoreUsers(action) {
  try {
    const res = yield axios({
      method: "GET",
      url: `${action.payload}`,
    });
    const { users, links } = res.data;
    yield put(fetchMoreUsersSuccess({ users, links }));
  } catch (err) {
    yield put(fetchMoreUsersFailure(err.message));
  }
}

export function* onFetchUsersStart() {
  yield takeLatest(FETCH_INITIAL_USERS_START, fetchUsers);
}

export function* onFetchMoreUsersStart() {
  yield takeLatest(FETCH_MORE_USERS_START, fetchMoreUsers);
}

export function* usersSaga() {
  yield all([call(onFetchUsersStart), call(onFetchMoreUsersStart)]);
}
