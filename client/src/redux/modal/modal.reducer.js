import modalTypes from "./modal.types";

const { OPEN_MODAL, CLOSE_MODAL } = modalTypes;

const INITIAL_STATE = {
  modalHidden: true,
  modalContent: {
    title: "",
    content: "",
  },
};

const modalReducer = (state = INITIAL_STATE, action) => {
  const { title, content } = action.payload ? action.payload : {};
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalHidden: false,
        modalContent: {
          title,
          content,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalHidden: true,
        modalContent: {
          title: "",
          content: "",
        },
      };
    default:
      return state;
  }
};

export default modalReducer;
