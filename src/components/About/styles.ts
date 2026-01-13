import styled from "styled-components";

export const ProfileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  :nth-child(1) {
    align-self: center;
  }

  @media screen and (min-width: 1000px) {
    flex-direction: row-reverse;
    :nth-child(1) {
      align-self: flex-start;
    }
  }
`;

export const ProfileImageWrapper = styled.div`
  max-height: 310px;
  max-width: 310px;
  min-width: 250px;
  min-height: 250px;
  width: 250px;
  height: 250px;
  background-color: var(--secondary);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  overflow: hidden;
  align-self: center;

  transition:
    border-radius 0.4s ease,
    padding 0.4s ease;

  img {
    object-fit: cover;
    width: 100%;
    filter: brightness(1.06) grayscale(0);
    transition: 0.4s;
    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (min-width: 700px) {
    border-radius: 0%;
    align-self: auto;
  }
`;
