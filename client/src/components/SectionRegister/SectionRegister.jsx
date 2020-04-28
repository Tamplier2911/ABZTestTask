// import "./SectionRegister.scss";
import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectPositions,
  selectRegisterToken,
} from "../../redux/register/register.selectors";
import {
  getPositionsStart,
  getRegistrationTokenStart,
} from "../../redux/register/register.actions";

// components
import HeadlineMedium from "../HeadlineMedium/HeadlineMedium";
import HeadlineSmall from "../HeadlineSmall/HeadlineSmall";
import RegisterForm from "../RegisterForm/RegisterForm";

// js rendering css
import {
  SectionRegisterContainer,
  SectionRegisterTop,
  SectionRegisterForm,
} from "./SectionRegisterStyles";

// constants
import registerData from "./SectionRegisterConstants";

const SectionRegister = ({
  getPositionsStart,
  positions,
  getRegistrationTokenStart,
  token,
  id,
}) => {
  useEffect(() => {
    if (!positions.length) getPositionsStart();
    if (!token.length) getRegistrationTokenStart();
  }, [getPositionsStart]);

  const { title, subtitle } = registerData;

  return (
    <SectionRegisterContainer id={id}>
      <SectionRegisterTop>
        <HeadlineMedium text={title} />
        <HeadlineSmall text={subtitle} />
      </SectionRegisterTop>
      <SectionRegisterForm>
        <RegisterForm positions={positions} />
      </SectionRegisterForm>
    </SectionRegisterContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  positions: selectPositions,
  token: selectRegisterToken,
});

export default connect(mapStateToProps, {
  getPositionsStart,
  getRegistrationTokenStart,
})(SectionRegister);
