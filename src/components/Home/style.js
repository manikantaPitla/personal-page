import styled from "styled-components";

export const MainContentWrapper = styled.div`
  flex: 1;
  display: flex;
  overflow-y: auto;
`;

export const MiddleContentWrapper = styled.div`
  flex: 1;
  padding: 0 20px;
  overflow-y: auto;

  @media screen and (min-width: 500px) {
    padding: 0 0px;
  }

  @media screen and (min-width: 700px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1000px) {
    padding: 0 50px;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 100px;
  }
`;

export const SideContentWrapper = styled.div`
  color: var(--text-secondary);
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  writing-mode: vertical-rl;
  text-align: right;
  gap: 20px;

  hr {
    height: 100px;
  }

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
