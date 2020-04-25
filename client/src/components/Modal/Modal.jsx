// import "./Modal.scss";
import React from "react";
import ReactDOM from "react-dom";

// components
import Button from "../Button/Button";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectModalHidden,
  selectModalContent,
} from "../../redux/modal/modal.selectors";
import { closeModal } from "../../redux/modal/modal.actions";

// js render css
import {
  ModalContainer,
  ModalWindow,
  ModalTop,
  ModalTopHeader,
  ModalTopClose,
  ModalMid,
  ModalMidContent,
  ModalBot,
  ModalBotBtn,
} from "./ModalStyles";

const Modal = ({ modalHidden, modalContent, closeModal }) => {
  const { title, content } = modalContent;
  return ReactDOM.createPortal(
    <ModalContainer hidden={modalHidden} onClick={() => closeModal()}>
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <ModalTop>
          <ModalTopHeader>{title}</ModalTopHeader>
          <ModalTopClose onClick={() => closeModal()}>&#10006;</ModalTopClose>
        </ModalTop>
        <ModalMid>
          <ModalMidContent>{content}</ModalMidContent>
        </ModalMid>
        <ModalBot>
          <ModalBotBtn>
            <Button text="Great" type="button" action={() => closeModal()} />
          </ModalBotBtn>
        </ModalBot>
      </ModalWindow>
    </ModalContainer>,
    document.querySelector("#modal")
  );
};

const mapStateToProps = createStructuredSelector({
  modalContent: selectModalContent,
  modalHidden: selectModalHidden,
});

export default connect(mapStateToProps, { closeModal })(Modal);
