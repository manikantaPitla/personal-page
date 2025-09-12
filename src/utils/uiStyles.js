import styled from "styled-components";

export const SectionEl = styled.section`
  padding: 120px 0 50px;
`;

export const ButtonEl = styled.button`
  background-color: transparent;
  padding: 10px 30px;
  border: 1px solid var(--text-glow);
  color: var(--text-glow);
  background-color: var(--text-glow);
  color: var(--bg-primary);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 123, 0, 0.3);
  }

  @media screen and (max-width: 500px) {
    padding: 10px 20px;
  }
`;

export const HeadingEl = styled.h2`
  font-family: var(--font-primary);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
  margin-bottom: 20px;

  span {
    color: var(--text-glow);
  }
`;

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

export const InputEl = styled.input`
  background-color: transparent;
  outline: none;
  border: 1px solid var(--text-glow);
  padding: 10px 12px;
  color: var(--text-secondary-light);
  border-radius: 8px;
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
`;
