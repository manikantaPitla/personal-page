import styled from "styled-components";

export const ButtonEl = styled.button`
  padding: 10px 30px;
  background-color: var(--secondary);
  color: var(--primary);
  border-radius: var(--border-radius);
  box-shadow: var(--elevation-1);
  outline: none;
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 500px) {
    padding: 10px 20px;
  }
`;
