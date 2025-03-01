import styled from "styled-components";

export const Main = styled.section`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p:nth-child(1) {
    color: var(--text-glow);
  }
`;

export const UserTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 62px;
  }
`;
