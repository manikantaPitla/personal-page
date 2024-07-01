import styled from "styled-components";

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
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
  @media screen and (min-width: 500px) {
    display: none;
  }

  padding: 40px;
  text-align: center;

  div {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
`;
