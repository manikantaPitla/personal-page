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
  color: var(--text-primary);
  background-color: var(--overlay-white);
  cursor: pointer;

  h6 {
    height: 33px;
    width: 33px;
    background-color: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  p {
    color: var(--bg-skills-text);
    margin-right: 10px;
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-normal);
  }

  svg {
    font-size: var(--font-size-sm);
    color: var(--primary);
  }

  &:hover {
    transform: translateY(-2px) scale(1.05);
  }
`;
