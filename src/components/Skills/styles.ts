import styled from "styled-components";

export const SkillsWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const SkillCard = styled.li`
  padding: 8px;
  border-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;
  box-shadow:
    0 0px 2px 0 var(--dark-0700),
    0 1px 1px 0 var(--dark-300);
  color: white;
  background-color: white;
  cursor: pointer;

  h6 {
    height: 33px;
    width: 33px;
    background-color: var(--text-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  P {
    color: var(--bg-skills-text) !important;
    margin-right: 10px;
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-normal);
  }

  svg {
    font-size: 14px;
    color: var(--bg-primary);
  }

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 8px var(--shadow-glow);
  }
`;
