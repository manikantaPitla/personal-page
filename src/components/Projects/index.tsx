import React from "react";
import { ProjectDetailWrapper, ProjectHeader, ProjectItem, ProjectWrapper } from "./style";
import { UiHeading, UiSection } from "../../utils/uiMaterials";
import { SECTION_HEADINGS } from "../../constants/navigationConstants";
import { PROFILE_DATA } from "../../constants/profileData";
import { FiGithub, FiLink } from "react-icons/fi";

const Projects = () => {
  return (
    <UiSection id="projects">
      <UiHeading>
        <span>{SECTION_HEADINGS.projects.split(".")[0]}.</span> Projects
      </UiHeading>
      <div>
        <ProjectWrapper>
          {PROFILE_DATA.projects.map((project, index) => {
            const { projectName, imageUrl, githubRepoUrl, websiteUrl } = project;
            return (
              <ProjectItem key={index} style={{ backgroundImage: `url(${imageUrl})` }}>
                <ProjectDetailWrapper>
                  <ProjectHeader>{projectName}</ProjectHeader>
                  <div className="project-links">
                    <a href={githubRepoUrl} target="_blank" rel="noreferrer" title="Github">
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
