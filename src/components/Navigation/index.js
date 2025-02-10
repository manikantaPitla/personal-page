import React, { useRef, useState, useEffect } from "react";
import { HamburgerMenu, Logo, Nav, NavLinks } from "./style";
import MenuBar from "../../utils/customMenuBar/MenuBar";

const sections = [
  "introduction",
  "about",
  "education",
  "skills",
  "github",
  "projects",
  "contact",
];

const Navigation = () => {
  const menuLinks = useRef();
  const [activeSection, setActiveSection] = useState("");

  const menuToggler = () => {
    menuLinks.current.classList.toggle("show-or-hide");
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Nav>
      <Logo>MP</Logo>
      <div>
        <HamburgerMenu onClick={menuToggler}>
          <MenuBar />
        </HamburgerMenu>
        <NavLinks ref={menuLinks}>
          {sections
            .filter((section) => section !== "introduction")
            .map((section, index) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                >
                  <span>0{index + 1}.</span>{" "}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
        </NavLinks>
      </div>
    </Nav>
  );
};

export default Navigation;
