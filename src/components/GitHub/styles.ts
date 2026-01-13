import styled from "styled-components";

export const GitProfileWrapper = styled.div`
  background-color: var(--bg-white);
  border-radius: var(--border-radius);
  padding: 20px;
  color: var(--text-secondary);
  min-height: 208px;
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

  div {
    div {
      margin-bottom: 10px;
    }
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

  h3 {
    font-size: var(--font-size-xl);
  }

  p {
    font-size: var(--font-size-sm);
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

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;

  button {
    width: fit-content;
    padding: 10px 20px;
  }

  p {
    font-size: var(--font-size-sm);
  }
`;

export const ErrorMessage = styled.p`
  color: var(--status-error);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-md);
`;
