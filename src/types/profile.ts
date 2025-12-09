import type { ReactElement } from "react";

export interface AboutDetails {
  profileUrl: string;
  profileDescription: string[];
}

export interface EducationEntry {
  name: string;
  duration: string;
  cgpa?: string;
  role?: string;
}

export interface Skill {
  name: string;
  icon: ReactElement;
}

export interface ProjectDetails {
  projectName: string;
  imageUrl: string;
  websiteUrl: string;
  githubRepoUrl: string;
}

export interface ContactLink {
  name: string;
  url: string;
}

export interface ProfileData {
  name: string;
  initials: string;
  description: string;
  resume: string;
  email: string;
  about: AboutDetails;
  education: EducationEntry[];
  skills: Skill[];
  githubUrl: string;
  projects: ProjectDetails[];
  contact: ContactLink[];
}
