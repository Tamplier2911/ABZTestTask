import { combineReducers } from "redux";

// reducers
import usersReducer from "./users/users.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
