import styled from "styled-components";

export const Nav = styled.nav`
  padding: 15px 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--overlay-navigation);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .show-or-hide {
    background-color: var(--overlay-backdrop-light);
    height: 100vh !important;
    transition: height 0.4s ease, padding 0.4s ease;
    padding: 0;
    border: none;
    pointer-events: auto;
    visibility: visible !important;

    li {
      pointer-events: auto !important;

      a {
        pointer-events: auto !important;
      }
    }
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
  font-family: var(--font-primary);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
  letter-spacing: var(--letter-spacing-tight);
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
    font-family: var(--font-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    letter-spacing: var(--letter-spacing-wide);
    padding: 0 15px;
    color: var(--text-secondary-light);
    cursor: pointer;
    transition: color 0.3s ease;

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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--overlay-backdrop-light);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    pointer-events: none;
    visibility: hidden;

    li {
      padding: 20px 0;
      font-size: var(--font-size-xl);
      text-align: center;
      width: 100%;
      pointer-events: none;

      a {
        color: var(--text-secondary-light) !important;
        font-weight: var(--font-weight-medium);
        transition: color 0.3s ease;
        pointer-events: none;

        &:hover {
          color: var(--text-glow) !important;
        }

        span {
          color: var(--text-glow) !important;
        }
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
