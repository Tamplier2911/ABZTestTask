// import "./UserCard.scss";
import React from "react";

// js render css
import {
  UserCardContainer,
  UserCardImgWrap,
  UserCardImg,
  UserCardName,
  UserCardOccupation,
  UserCardEmail,
  UserCardPhone,
} from "./UserCardStyles";

const UserCard = ({ photo, name, position, email, phone }) => {
  return (
    <UserCardContainer>
      <UserCardImgWrap>
        <UserCardImg alt="happy user" src={photo} />
      </UserCardImgWrap>
      <UserCardName>{name}</UserCardName>
      <UserCardOccupation>{position}</UserCardOccupation>
      <UserCardEmail>{email}</UserCardEmail>
      <UserCardPhone>{phone}</UserCardPhone>
    </UserCardContainer>
  );
};

export default UserCard;
