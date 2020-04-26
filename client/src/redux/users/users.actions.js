import usersTypes from "./users.types";

const {
  FETCH_INITIAL_USERS_START,
  FETCH_INITIAL_USERS_SUCCESS,
  FETCH_INITIAL_USERS_FAILURE,
  FETCH_MORE_USERS_START,
  FETCH_MORE_USERS_SUCCESS,
  FETCH_MORE_USERS_FAILURE,
} = usersTypes;

export const fetchUsersStart = (pages) => ({
  type: FETCH_INITIAL_USERS_START,
  payload: pages,
});

export const fetchUsersSuccess = (data) => ({
  type: FETCH_INITIAL_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersFailure = (errorMessage) => ({
  type: FETCH_INITIAL_USERS_FAILURE,
  payload: errorMessage,
});

export const fetchMoreUsersStart = (uri) => ({
  type: FETCH_MORE_USERS_START,
  payload: uri,
});

export const fetchMoreUsersSuccess = (data) => ({
  type: FETCH_MORE_USERS_SUCCESS,
  payload: data,
});

export const fetchMoreUsersFailure = (errorMessage) => ({
  type: FETCH_MORE_USERS_FAILURE,
  payload: errorMessage,
});
