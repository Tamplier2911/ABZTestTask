import { combineReducers } from "redux";

// reducers
import sidenavReducer from "./sidenav/sidenav.reducer";
import modalReducer from "./modal/modal.reducer";
import usersReducer from "./users/users.reducer";
import registerReducer from "./register/register.reducer";

const rootReducer = combineReducers({
  sidenav: sidenavReducer,
  modal: modalReducer,
  users: usersReducer,
  register: registerReducer,
});

export default rootReducer;
