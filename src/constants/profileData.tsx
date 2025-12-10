import React from "react";
import {
  SiExpress,
  SiNestjs,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiCss3,
  SiHtml5,
  SiSqlite,
  SiBootstrap,
  SiGithub,
  SiMongodb,
  SiLinux,
  SiRedux,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";
import type { ProfileData } from "../types/profile";

// Profile data constants
export const PROFILE_DATA: ProfileData = {
  name: "Manikanta Pitla",
  initials: "MP",
  description:
    "An enthusiastic Full Stack Developer with a strong foundation in both front-end and back-end technologies. Eager to apply my knowledge and skills to real-world projects, I am passionate about learning and growing in the field of web development.",
  resume: "https://drive.google.com/file/d/1lP7vhs4KeDTS2DCh3LP7sk7PwuCPZH7B/view?usp=sharing",
  email: "pitlamanikanta81@gmail.com",
  about: {
    profileUrl:
      "https://res.cloudinary.com/df9fyawpk/image/upload/v1740495203/manikanta-pitla/profile/user-profile.webp",
    profileDescription: [
      "Hello! My name is Manikanta Pitla and I am passionate about creating interactive and responsive web applications. My interest in web development began when I started experimenting with building simple websites and applications, and it quickly grew into a full-fledged passion for coding and development.",
      "Over the years, I have honed my skills and developed a strong foundation in both front-end and back-end technologies. I love the process of bringing ideas to life on the internet and continuously strive to learn new techniques and tools to improve myself.",
      "Currently, I am focused on building efficient and scalable web applications, and I am dedicated to pushing the boundaries of what is possible in the digital world.",
    ],
  },
  education: [
    {
      name: "Maramungala Technologies",
      duration: "Mar 2025 - Current",
      role: "Role - Full Stack Developer",
    },
    {
      name: "Full Stack Development - NxtWave",
      duration: "Feb 2023 - Oct 2023",
      cgpa: "CGPA - 8.8",
    },
    {
      name: "BSc Computer Science - SSR Degree College, Nizamabad",
      duration: "Jul 2019 - Jun 2022",
      cgpa: "CGPA - 7.48",
    },
    {
      name: "Intermediate - Kshatriya Junior College, Armoor",
      duration: "Jun 2017 - Mar 2019",
      cgpa: "CGPA - 8.27",
    },
    {
      name: "SSC - ZPHS, Yergatla ",
      duration: "Jun 2016 - Mar 2017",
      cgpa: "CGPA - 9.0",
    },
  ],
  skills: [
    { name: "HTML", icon: SiHtml5 as React.ComponentType<any> },
    { name: "CSS", icon: SiCss3 as React.ComponentType<any> },
    { name: "JavaScript", icon: SiJavascript as React.ComponentType<any> },
    { name: "TypeScript", icon: SiTypescript as React.ComponentType<any> },
    { name: "React", icon: SiReact as React.ComponentType<any> },
    { name: "React Native", icon: SiReact as React.ComponentType<any> },
    { name: "Redux", icon: SiRedux as React.ComponentType<any> },
    { name: "Tailwind CSS", icon: SiTailwindcss as React.ComponentType<any> },
    { name: "Bootstrap", icon: SiBootstrap as React.ComponentType<any> },
    { name: "Node.js", icon: SiNodedotjs as React.ComponentType<any> },
    { name: "Express", icon: SiExpress as React.ComponentType<any> },
    { name: "NestJS", icon: SiNestjs as React.ComponentType<any> },
    { name: "MongoDB", icon: SiMongodb as React.ComponentType<any> },
    { name: "SQLite", icon: SiSqlite as React.ComponentType<any> },
    { name: "Firebase", icon: SiFirebase as React.ComponentType<any> },
    { name: "Python", icon: SiPython as React.ComponentType<any> },
    { name: "Git", icon: SiGit as React.ComponentType<any> },
    { name: "GitHub", icon: SiGithub as React.ComponentType<any> },
    { name: "Linux", icon: SiLinux as React.ComponentType<any> },
  ],
  githubUrl: "https://api.github.com/users/manikantaPitla",
  projects: [
    {
      projectName: "We Connect",
      imageUrl:
        "https://res.cloudinary.com/df9fyawpk/image/upload/v1740495262/manikanta-pitla/projects/we-connect.webp",
      websiteUrl: "https://weconnectdev.netlify.app/",
      githubRepoUrl: "https://github.com/manikantaPitla/we-connect",
    },
    {
      projectName: "Book Hub",
      imageUrl: "https://res.cloudinary.com/df9fyawpk/image/upload/v1740495260/manikanta-pitla/projects/book-hub.webp",
      websiteUrl: "https://bookhub81.ccbp.tech/",
      githubRepoUrl: "https://github.com/manikantaPitla/book-hub",
    },
    {
      projectName: "Python Patterns",
      imageUrl:
        "https://res.cloudinary.com/df9fyawpk/image/upload/v1740495261/manikanta-pitla/projects/python-patterns.webp",
      websiteUrl: "https://pythonpatterns.ccbp.tech/",
      githubRepoUrl: "https://github.com/manikantaPitla/python-patterns",
    },
    {
      projectName: "Tourism",
      imageUrl:
        "https://res.cloudinary.com/df9fyawpk/image/upload/v1740495262/manikanta-pitla/projects/tourism-page.webp",
      websiteUrl: "https://visithyderabad.netlify.app/",
      githubRepoUrl: "https://github.com/manikantaPitla/visit-hyderabad-tourism-website",
    },
    {
      projectName: "Weather Application",
      imageUrl:
        "https://res.cloudinary.com/df9fyawpk/image/upload/v1740495262/manikanta-pitla/projects/weather-app.webp",
      websiteUrl: "https://manikantapitla.github.io/Weather-application/",
      githubRepoUrl: "https://github.com/manikantaPitla/Weather-application",
    },
    {
      projectName: "Personal Portfolio",
      imageUrl:
        "https://res.cloudinary.com/df9fyawpk/image/upload/v1740495261/manikanta-pitla/projects/personal-page.webp",
      websiteUrl: "https://manikantapitla.netlify.app/",
      githubRepoUrl: "https://github.com/manikantaPitla/personal-page",
    },
  ],
  contact: [
    {
      name: "Github",
      url: "https://github.com/manikantaPitla",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manikantapitla/",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mani_dynamic_/",
    },
  ],
};
