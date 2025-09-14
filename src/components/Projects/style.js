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
  border-radius: var(--border-radius);
  overflow: hidden;
  border: 1px solid var(--text-secondary);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s ease;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--overlay-dark);
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    background: var(--overlay-dark-light);
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const ProjectHeader = styled.p`
  width: fit-content;
  border-radius: var(--border-radius);
  font-family: var(--font-primary);
  font-size: var(--font-size-xs);
  color: var(--text-glow);
  font-weight: var(--font-weight-semibold);
  flex: 1;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

export const ProjectDetailWrapper = styled.div`
  backdrop-filter: blur(8px);
  background: var(--overlay-backdrop);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  gap: 15px;
  padding: 10px;
  border-radius: var(--border-radius);

  .project-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  a {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: var(--text-glow);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--bg-primary);
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 2px 8px var(--shadow-glow);
    }
  }
`;
