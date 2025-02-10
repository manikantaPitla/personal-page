import styled from "styled-components";

export const Nav = styled.nav`
  padding: 15px 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.001);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .show-or-hide {
    height: 300px;
    transition: height 0.4s ease, padding 0.4s ease;
    padding: 10px 0;
  }

  .active {
    color: var(--text-glow);
  }
`;

export const Logo = styled.div`
  flex-shrink: 0;
  border: 2px solid var(--text-glow);
  height: 45px;
  width: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HamburgerMenu = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;

  li {
    font-size: 13px;
    padding: 0 15px;
    color: var(--text-secondary-light);
    cursor: pointer;

    &:hover {
      color: var(--text-glow);
    }

    span {
      color: var(--text-glow);
    }
  }

  @media screen and (max-width: 768px) {
    overflow: hidden;
    height: 0px;
    transition: height 0.4s ease, padding 0.4s ease;
    position: absolute;
    top: 100%;
    right: 10%;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.4);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(8px);
    border-radius: 20px;

    li {
      padding: 15px 40px;
    }
  }
`;
