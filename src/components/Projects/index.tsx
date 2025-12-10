import React from "react";
import { ProjectDetailWrapper, ProjectHeader, ProjectItem, ProjectWrapper } from "./styles";
import { UiHeading, UiSection } from "../ui";
import { SECTION_HEADINGS, PROFILE_DATA } from "../../constants";
import { FiGithub, FiLink } from "react-icons/fi";

const Projects = () => {
  const GithubIcon = FiGithub as React.ComponentType<any>;
  const LinkIcon = FiLink as React.ComponentType<any>;

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
                      <GithubIcon />
                    </a>
                    <a href={websiteUrl} target="_blank" rel="noreferrer" title="website">
                      <LinkIcon />
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
