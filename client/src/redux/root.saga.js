import { all, call } from "redux-saga/effects";

// sagas
import { usersSaga } from "./users/users.sagas";
import { registerSagas } from "./register/register.sagas";

export default function* rootSaga() {
  yield all([call(usersSaga), call(registerSagas)]);
}
