// Navigation constants
export const NAVIGATION_SECTIONS = [
  "introduction",
  "about",
  "education",
  "skills",
  "github",
  "projects",
  "contact",
] as const;

export type NavigationSection = (typeof NAVIGATION_SECTIONS)[number];

export const SECTION_HEADINGS: Record<Exclude<NavigationSection, "introduction">, string> = {
  about: "01. About Me",
  education: "02. Education",
  skills: "03. Skills",
  github: "04. GitHub",
  projects: "05. Projects",
  contact: "06. Contact",
};

export const INTERSECTION_OBSERVER_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 0.6,
};
