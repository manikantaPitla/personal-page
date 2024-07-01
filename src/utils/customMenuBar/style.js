import styled from "styled-components";

export const MenuBarEl = styled.div`
  cursor: pointer;
  width: 35px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  div {
    height: 2px;
    width: 100%;
    background-color: var(--text-glow);
  }
`;
