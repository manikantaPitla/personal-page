import styled from "styled-components";

export const ProjectWrapper = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media screen and (max-width: 995px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectItem = styled.li`
  padding: 10px;
  height: 230px;
  border-radius: 25px;
  overflow: hidden;
  border: 1px solid var(--text-secondary);
  background-size: cover;
  position: relative;

  &:hover div {
    height: 100%;
  }
`;

export const ProjectHeader = styled.p`
  background-color: var(--text-glow);
  width: fit-content;
  border-radius: 25px;
  padding: 10px 15px;
  font-family: var(--font-primary);
  font-size: var(--font-size-xs);
  color: black;
  font-weight: var(--font-weight-semibold);
  letter-spacing: var(--letter-spacing-wide);
`;

export const ProjectDetailWrapper = styled.div`
  backdrop-filter: blur(1px);
  background-image: linear-gradient(to bottom, transparent, var(--text-glow));
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  overflow: hidden;
  transition: 0.4s height;

  a {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: var(--bg-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);
  }
`;
