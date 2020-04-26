import styled, { css } from "styled-components";

const sharedStyles = css`
  line-height: 1.2;
  margin-bottom: 0.5rem;

  @media only screen and (max-width: 425px) {
    font-size: 2rem;
  }
`;

export const UserCardContainer = styled.div`
  padding: 2rem 4rem;
  text-align: center;

  @media only screen and (max-width: 425px) {
    padding: 2rem 6rem;
  }
`;

export const UserCardImgWrap = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  overflow: hidden;

  margin: 0rem auto 1.5rem auto;

  @media only screen and (max-width: 425px) {
    width: 9rem;
    height: 9rem;
  }
`;

export const UserCardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserCardName = styled.div`
  font-size: 2.3rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  word-wrap: break-word;

  @media only screen and (max-width: 768px) {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 3rem;
  }
`;

export const UserCardOccupation = styled.div`
  ${sharedStyles}
`;

export const UserCardEmail = styled.div`
  ${sharedStyles}
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const UserCardPhone = styled.div`
  ${sharedStyles}
`;
