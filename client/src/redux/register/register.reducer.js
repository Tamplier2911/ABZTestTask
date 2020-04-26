import registerTypes from "./register.types";

const {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_REGISTRATION_TOKEN_SUCCESS,
  GET_REGISTRATION_TOKEN_FAILURE,
} = registerTypes;

const INITIAL_STATE = {
  token: "",
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case GET_REGISTRATION_TOKEN_SUCCESS:
      return { ...state };
    case REGISTER_FAILURE:
    case GET_REGISTRATION_TOKEN_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default registerReducer;
