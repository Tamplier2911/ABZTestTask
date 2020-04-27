import registerTypes from "./register.types";

const {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  GET_REGISTRATION_TOKEN_SUCCESS,
  GET_REGISTRATION_TOKEN_FAILURE,
  GET_POSITIONS_SUCCESS,
  GET_POSITIONS_FAILURE,
} = registerTypes;

const INITIAL_STATE = {
  token: "",
  positions: [],
};

const registerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POSITIONS_SUCCESS:
      return { ...state, positions: action.payload };
    case REGISTER_SUCCESS:
    case GET_REGISTRATION_TOKEN_SUCCESS:
      return { ...state };
    case GET_POSITIONS_FAILURE:
    case REGISTER_FAILURE:
    case GET_REGISTRATION_TOKEN_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default registerReducer;
