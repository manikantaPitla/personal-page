import React from "react";
import { ProjectDetailWrapper, ProjectHeader, ProjectItem, ProjectWrapper } from "./style";
import { UiHeading, UiSection } from "../../utils/uiMaterials";
import { PROJECTS_LIST } from "../../constants/projectsConstants";
import { SECTION_HEADINGS } from "../../constants/navigationConstants";
import { FiGithub, FiLink } from "react-icons/fi";

const Projects = () => {
  return (
    <UiSection id="projects">
      <UiHeading>
        <span>{SECTION_HEADINGS.projects.split(".")[0]}.</span> Projects
      </UiHeading>
      <div>
        <ProjectWrapper>
          {PROJECTS_LIST.map((project, index) => {
            const { projectName, imageUrl, githubLink, websiteUrl } = project;
            return (
              <ProjectItem key={index} style={{ backgroundImage: `url(${imageUrl})` }}>
                <ProjectDetailWrapper>
                  <ProjectHeader>{projectName}</ProjectHeader>
                  <div className="project-links">
                    <a href={githubLink} target="_blank" rel="noreferrer" title="Github">
                      <FiGithub />
                    </a>
                    <a href={websiteUrl} target="_blank" rel="noreferrer" title="website">
                      <FiLink />
                    </a>
                  </div>
                </ProjectDetailWrapper>
              </ProjectItem>
            );
          })}
        </ProjectWrapper>
      </div>
    </UiSection>
  );
};

export default Projects;
