import React, { useRef, useState, useEffect } from "react";
import { HamburgerMenu, Logo, Nav, NavLinks } from "./style";
import MenuBar from "../../utils/customMenuBar/MenuBar";
import { NAVIGATION_SECTIONS, INTERSECTION_OBSERVER_OPTIONS } from "../../constants/navigationConstants";
import { PROFILE_DATA } from "../../constants/profileData";

const Navigation = () => {
  const menuLinks = useRef();
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();

    document.body.style.overflow = "unset";
    document.body.style.position = "static";
    document.documentElement.style.overflow = "unset";

    const scrollToElement = () => {
      const element = document.getElementById(sectionId);

      if (element) {
        const scrollToPosition = () => {
          const elementTop = element.offsetTop;
          const elementPosition = elementTop - 100;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });

          setTimeout(() => {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 50);
        };

        scrollToPosition();
      }
    };

    scrollToElement();

    setTimeout(() => {
      scrollToElement();
    }, 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, INTERSECTION_OBSERVER_OPTIONS);

    NAVIGATION_SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (menuLinks.current) {
      if (isMenuOpen) {
        menuLinks.current.classList.add("show-or-hide");
      } else {
        menuLinks.current.classList.remove("show-or-hide");
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      <Nav>
        <Logo>{PROFILE_DATA.initials}</Logo>
        <div>
          <HamburgerMenu onClick={menuToggler}>
            <MenuBar isOpen={isMenuOpen} />
          </HamburgerMenu>
          <NavLinks
            ref={menuLinks}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeMenu();
              }
            }}
          >
            {NAVIGATION_SECTIONS.filter((section) => section !== "introduction").map((section, index) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={activeSection === section ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                >
                  <span>0{index + 1}.</span> {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </NavLinks>
        </div>
      </Nav>
    </>
  );
};

export default Navigation;
