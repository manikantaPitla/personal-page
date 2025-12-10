// Type declarations for react-icons
// When you use a new icon, add it to the appropriate module below

import type { ComponentType } from "react";

// Use ComponentType<any> to be more permissive and avoid TypeScript strict JSX issues
type IconComponent = ComponentType<any>;

declare module "react-icons/fi" {
  export const FiGithub: IconComponent;
  export const FiLinkedin: IconComponent;
  export const FiInstagram: IconComponent;
  export const FiLink: IconComponent;
  // When you use a new Feather Icon, add it here:
  // export const FiIconName: IconComponent;
}

declare module "react-icons/si" {
  export const SiHtml5: IconComponent;
  export const SiCss3: IconComponent;
  export const SiJavascript: IconComponent;
  export const SiTypescript: IconComponent;
  export const SiReact: IconComponent;
  export const SiRedux: IconComponent;
  export const SiTailwindcss: IconComponent;
  export const SiBootstrap: IconComponent;
  export const SiNodedotjs: IconComponent;
  export const SiExpress: IconComponent;
  export const SiNestjs: IconComponent;
  export const SiMongodb: IconComponent;
  export const SiSqlite: IconComponent;
  export const SiFirebase: IconComponent;
  export const SiPython: IconComponent;
  export const SiGit: IconComponent;
  export const SiGithub: IconComponent;
  export const SiLinux: IconComponent;
  // When you use a new Simple Icon, add it here:
  // export const SiIconName: IconComponent;
}
