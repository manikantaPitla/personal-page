import React, { useRef } from "react";
import { HamburgerMenu, Logo, Nav, NavLinks } from "./style";
import MenuBar from "../../utils/customMenuBar/MenuBar";

const Navigation = () => {
  const menuLinks = useRef();

  const menuToggler = () => {
    menuLinks.current.classList.toggle("show-or-hide");
  };

  return (
    <Nav>
      <Logo>MP</Logo>
      <div>
        <HamburgerMenu onClick={menuToggler}>
          <MenuBar />
        </HamburgerMenu>
        <NavLinks ref={menuLinks}>
          <li>
            <a href="#about">
              <span>01.</span> About
            </a>
          </li>
          <li>
            <a href="#education">
              <span>02.</span> Education
            </a>
          </li>
          <li>
            <a href="#skills">
              <span>03.</span> Skills
            </a>
          </li>
          <li>
            <a href="#github">
              <span>04.</span> GitHub
            </a>
          </li>
          <li>
            <a href="#projects">
              <span>05.</span> Projects
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>06.</span> Contact
            </a>
          </li>
        </NavLinks>
      </div>
    </Nav>
  );
};

export default Navigation;
