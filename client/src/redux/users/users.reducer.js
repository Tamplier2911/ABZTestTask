import usersTypes from "./users.types";

const {
  FETCH_ALL_USERS_START,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,
} = usersTypes;

const INITIAL_STATE = {
  users: [],
  errorMessage: "",
  isLoading: false,
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ALL_USERS_START:
      return { ...state, isLoading: true, errorMessage: "" };
    case FETCH_ALL_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isLoading: false,
        errorMessage: "",
      };
    case FETCH_ALL_USERS_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
