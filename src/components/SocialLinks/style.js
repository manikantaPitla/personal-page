import styled from "styled-components";

export const IconWrapper = styled.div`
  background-color: var(--text-glow);
  color: #fff;
  padding: 7px;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SocialLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.4s;

  &:hover {
    color: var(--text-glow);
    transform: scale(1.1);
    p {
      color: var(--text-glow);
    }
  }
`;

export const LinkEl = styled.a`
  color: var(--text-secondary);
  transition: all 0.4s;

  &:hover {
    color: var(--text-glow);
    transform: scale(1.5);
    border-radius: var(--border-radius);

    p {
      color: var(--text-glow);
    }
  }
`;

export const LinkName = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 14px !important;
`;
