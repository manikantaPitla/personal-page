import styled from "styled-components";

export const GitProfileWrapper = styled.div`
  background-color: var(--text-secondary);
  background-color: #fff;
  border-radius: 25px;
  padding: 20px;
  color: #000;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProfileCard = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;

    div {
      text-align: center;
    }
    p {
      text-align: center;
    }
  }

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 14px;
    color: var(--text-secondary);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
