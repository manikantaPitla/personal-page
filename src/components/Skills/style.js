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
  transition: all 0.4s;
  box-shadow: 0 0px 2px 0 var(--dark-0700), 0 1px 1px 0 var(--dark-300);
  color: white;
  background-color: white;

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
    color: #252525 !important;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 500;
  }

  svg {
    font-size: 14px;
    color: var(--bg-primary);
  }

  &:hover {
    transform: scale(1.1);
  }
`;
