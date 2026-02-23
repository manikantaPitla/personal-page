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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: all 0.3s ease;
  box-shadow: var(--elevation-1);
  cursor: pointer;

  .project-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transition: transform 0.3s ease;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-2px);

    .project-image {
      transform: scale(1.05);
    }
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.1);
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
  font-size: var(--font-size-sm);
  color: var(--secondary);
  font-weight: var(--font-weight-semibold);
  flex: 1;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
`;

export const ProjectDetailWrapper = styled.div`
  backdrop-filter: blur(8px);
  background-color: var(--primary);
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-lg);
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
    background-color: var(--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary);
    transition: all 0.3s ease;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
