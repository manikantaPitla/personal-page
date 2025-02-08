import React from "react";

import {
  SiExpress,
  SiPython,
  SiJavascript,
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
  SiTailwindcss
} from "react-icons/si";

import { SkillCard, SkillsWrapper } from "./style";
import { UiHeading, UiSection } from "../../utils/uiMaterials";

const skillsList = [
  {
    name: "HTML",
    icon: <SiHtml5 />,
  },
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "Python",
    icon: <SiPython />,
  },
  {
    name: "SQLite",
    icon: <SiSqlite />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
  },
  {
    name: "Linux",
    icon: <SiLinux />,
  },
];

const Skills = () => {
    console.log("Skills");

  return (
    <UiSection id="skills">
      <UiHeading>
        <span>03. </span>
        Skills
      </UiHeading>
      <div>
        <SkillsWrapper>
          {skillsList.map((skill, index) => (
            <SkillCard key={index}>
              <h6>{skill.icon}</h6>
              <p>{skill.name}</p>
            </SkillCard>
          ))}
        </SkillsWrapper>
      </div>
    </UiSection>
  );
};

export default Skills;
