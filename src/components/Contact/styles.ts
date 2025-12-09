import styled from "styled-components";

export const ContactFlex = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FormEl = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
  flex: 1;
  order: 1;
  @media screen and (min-width: 768px) {
    order: 0;
  }

  div {
    display: flex;
    gap: 10px;
    button {
      flex: 1;
    }
  }
`;

export const SocialLinkWrapper = styled.div`
  @media screen and (min-width: 768px) {
    order: 1;
  }
  order: 0;
  flex: 1;
  padding: 40px;
  text-align: center;

  div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;
