import styled from "styled-components";

export const MenuBarEl = styled.div`
  cursor: pointer;
  width: 35px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.3s ease-in-out;
  z-index: 1001;
  padding: 0;
  background: none;
  border: none;

  div {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: var(--text-glow);
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${(props) => (props.$isOpen ? "13.5px" : "3px")};
      width: ${(props) => (props.$isOpen ? "0%" : "100%")};
      left: ${(props) => (props.$isOpen ? "50%" : "0%")};
    }

    &:nth-child(2) {
      top: ${(props) => (props.$isOpen ? "13.5px" : "13.5px")};
      transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(3) {
      top: ${(props) => (props.$isOpen ? "13.5px" : "24px")};
      transform: ${(props) => (props.$isOpen ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }

  &:hover div {
    background: var(--text-glow);
  }

  &:focus {
    outline: 2px solid var(--text-glow);
    outline-offset: 2px;
  }
`;
