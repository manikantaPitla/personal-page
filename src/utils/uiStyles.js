import styled from "styled-components";

export const SectionEl = styled.section`
  padding: 80px 0 50px;
`;

export const ButtonEl = styled.button`
  background-color: transparent;
  padding: 15px 40px;
  border: 1px solid var(--text-glow);
  color: var(--text-glow);
  background-color: var(--text-glow);
  color: var(--bg-primary);
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  font-size: 14px;

  @media screen and (max-width: 500px) {
    padding: 15px 20px;
  }
`;

export const HeadingEl = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;

  span {
    color: var(--text-glow);
  }
`;

export const ParaEl = styled.p`
  color: var(--text-secondary);
  margin-bottom: 20px;
  font-size: 16px;

  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const InputEl = styled.input`
  background-color: transparent;
  outline: none;
  border: 1px solid var(--text-glow);
  padding: 15px 10px;
  color: var(--text-secondary-light);
  border-radius: 10px;
`;
