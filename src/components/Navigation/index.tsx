import { useRef, useState, useEffect } from "react";
import { HamburgerMenu, Logo, Nav, NavLinks } from "./styles";
import MenuBar from "../ui/MenuBar";
import {
  NAVIGATION_SECTIONS,
  INTERSECTION_OBSERVER_OPTIONS,
  PROFILE_DATA,
  type NavigationSection,
} from "../../constants";

const Navigation = () => {
  const menuLinks = useRef<HTMLUListElement | null>(null);
  const [activeSection, setActiveSection] = useState<NavigationSection | "">("");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuToggler = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = (): void => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: NavigationSection): void => {
    closeMenu();

    document.body.style.overflow = "unset";
    document.body.style.position = "static";
    document.documentElement.style.overflow = "unset";

    const scrollToElement = (): void => {
      const element = document.getElementById(sectionId);

      if (element) {
        const scrollToPosition = (): void => {
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
          const sectionId = entry.target.id as NavigationSection;
          if (NAVIGATION_SECTIONS.includes(sectionId)) {
            setActiveSection(sectionId);
          }
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
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const menuElement = menuLinks.current;
    if (!menuElement) return;

    if (isMenuOpen) {
      menuElement.classList.add("show-or-hide");
    } else {
      menuElement.classList.remove("show-or-hide");
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
                  <span className={activeSection === section ? "index" : ""}>0{index + 1}.</span>{" "}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
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
