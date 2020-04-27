import registerTypes from "./register.types";

const {
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_REGISTRATION_TOKEN_START,
  GET_REGISTRATION_TOKEN_SUCCESS,
  GET_REGISTRATION_TOKEN_FAILURE,
  GET_POSITIONS_START,
  GET_POSITIONS_SUCCESS,
  GET_POSITIONS_FAILURE,
} = registerTypes;

export const registerStart = (userCredentials) => ({
  type: REGISTER_START,
  payload: userCredentials,
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const registerFailure = (errorMessage) => ({
  type: REGISTER_FAILURE,
  payload: errorMessage,
});

export const getRegistrationTokenStart = () => ({
  type: GET_REGISTRATION_TOKEN_START,
});

export const getRegistrationTokenSuccess = (token) => ({
  type: GET_REGISTRATION_TOKEN_SUCCESS,
  payload: token,
});

export const getRegistrationTokenFailure = (errorMessage) => ({
  type: GET_REGISTRATION_TOKEN_FAILURE,
  payload: errorMessage,
});

export const getPositionsStart = () => ({
  type: GET_POSITIONS_START,
});

export const getPositionsSuccess = (positions) => ({
  type: GET_POSITIONS_SUCCESS,
  payload: positions,
});

export const getPositionsFailure = (errorMessage) => ({
  type: GET_POSITIONS_FAILURE,
  payload: errorMessage,
});
