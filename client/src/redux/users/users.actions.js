import usersTypes from "./users.types";

const {
  FETCH_ALL_USERS_START,
  FETCH_ALL_USERS_SUCCESS,
  FETCH_ALL_USERS_FAILURE,
} = usersTypes;

export const fetchUsersStart = () => ({
  type: FETCH_ALL_USERS_START,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_ALL_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (errorMessage) => ({
  type: FETCH_ALL_USERS_FAILURE,
  payload: errorMessage,
});
