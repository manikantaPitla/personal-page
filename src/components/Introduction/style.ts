import styled from "styled-components";

export const Main = styled.section`
  flex: 1;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  box-sizing: border-box;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p:nth-child(1) {
    color: var(--text-glow);
  }
`;

export const UserTitle = styled.h1`
  font-family: var(--font-primary);
  font-size: var(--font-size-5xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: var(--font-size-6xl);
  }
  @media screen and (min-width: 1200px) {
    font-size: var(--font-size-7xl);
  }
`;
