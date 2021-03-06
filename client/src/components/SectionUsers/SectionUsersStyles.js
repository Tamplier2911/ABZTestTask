import styled from "styled-components";

export const SectionUsersContainer = styled.section`
  display: grid;
  grid-row-gap: 0.8rem;
  padding: 13.8rem 3rem 16rem 3rem;
  background-color: var(--cl-bg);

  @media only screen and (max-width: 768px) {
    grid-row-gap: 0rem;
    padding: 11.5rem 2.3rem 13.5rem 2.3rem;
  }

  @media only screen and (max-width: 425px) {
    grid-row-gap: 2.5rem;
    padding: 9rem 2rem 9.5rem 2rem;
  }
`;

export const SectionUsersTop = styled.div`
  text-align: center;

  & h2 {
    font-size: 5.2rem;
    @media only screen and (max-width: 768px) {
      font-size: 4.6rem;
    }
    @media only screen and (max-width: 425px) {
      font-size: 3.9rem;
    }
  }

  & h3 {
    margin-top: 0.3rem;
    font-size: 1.6rem;
    @media only screen and (max-width: 768px) {
      margin-top: 0.6rem;
      font-size: 1.75rem;
    }
    @media only screen and (max-width: 425px) {
      margin-top: 0.3rem;
      font-size: 2rem;
    }
  }
`;

export const SectionUsersMid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26.5rem, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  margin-top: 5.4rem;

  @media only screen and (max-width: 768px) {
    margin-top: 6.6rem;
    grid-row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    margin-top: 0rem;
  }
`;

export const SectionUsersBot = styled.div`
  display: flex;
  justify-content: center;
`;
