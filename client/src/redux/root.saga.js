import { all, call } from "redux-saga/effects";

// sagas
import { usersSaga } from "./users/users.sagas";

export default function* rootSaga() {
  yield all([call(usersSaga)]);
}
