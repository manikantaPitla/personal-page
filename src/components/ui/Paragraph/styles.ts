import styled from "styled-components";

export const ParaEl = styled.p`
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  letter-spacing: var(--letter-spacing-normal);

  @media screen and (max-width: 500px) {
    font-size: var(--font-size-sm);
    line-height: var(--line-height-normal);
  }
`;

