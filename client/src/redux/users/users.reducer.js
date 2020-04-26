import usersTypes from "./users.types";

const {
  FETCH_INITIAL_USERS_START,
  FETCH_INITIAL_USERS_SUCCESS,
  FETCH_INITIAL_USERS_FAILURE,
  FETCH_MORE_USERS_START,
  FETCH_MORE_USERS_SUCCESS,
  FETCH_MORE_USERS_FAILURE,
} = usersTypes;

const INITIAL_STATE = {
  allLoadedUsers: [],
  nextPageUri: "",
  isLoading: false,
  errorMessage: "",
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_INITIAL_USERS_START:
    case FETCH_MORE_USERS_START:
      return { ...state, isLoading: true };
    case FETCH_INITIAL_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allLoadedUsers: action.payload.users,
        nextPageUri: action.payload.links.next_url,
      };
    case FETCH_MORE_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allLoadedUsers: [...state.allLoadedUsers, ...action.payload.users],
        nextPageUri: action.payload.links.next_url,
      };
    case FETCH_INITIAL_USERS_FAILURE:
    case FETCH_MORE_USERS_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
