import styled from "styled-components";

export const Nav = styled.nav`
  padding: 15px 40px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .show-or-hide {
    background-color: var(--primary);
    height: 100vh !important;
    transition:
      height 0.4s ease,
      padding 0.4s ease;
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
`;

export const Logo = styled.div`
  flex-shrink: 0;
  border: 2px solid var(--secondary);
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
    padding: 8px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 0.3s ease;

    a {
      display: block;
      padding: 4px 8px;
      border-radius: 4px;
      transition: all 0.3s ease;
      position: relative;
    }

    a::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: var(--secondary);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--secondary);

      a::after {
        width: 100%;
      }
    }

    a.active {
      color: var(--secondary);
    }

    a.active::after {
      width: 100%;
    }

    span {
      color: var(--secondary);
    }
  }

  @media screen and (max-width: 768px) {
    overflow: hidden;
    height: 0px;
    transition:
      height 0.4s ease,
      padding 0.4s ease;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--primary);
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
        color: var(--secondary) !important;
        font-weight: var(--font-weight-medium);
        transition: color 0.3s ease;
        pointer-events: none;

        &:hover {
          color: var(--secondary) !important;
        }

        span {
          color: var(--secondary) !important;
        }
      }

      &:last-child {
        border-bottom: none;
      }
    }
  }
`;
