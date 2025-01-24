import React from "react";
import {
  ProjectDetailWrapper,
  ProjectHeader,
  ProjectItem,
  ProjectWrapper,
} from "./style";
import { UiHeading, UiSection } from "../../utils/uiMaterials";

import weConnect from "../../assets/images/projects/we-connect.png";
import pythonPatterns from "../../assets/images/projects/python-patterns.png";
import tourismImg from "../../assets/images/projects/tourism.png";
import weatherImg from "../../assets/images/projects/weather.png";
import bookHubImg from "../../assets/images/projects/book-hub.png";
import { FiGithub, FiLink } from "react-icons/fi";

const projectsList = [
  {
    projectName: "We Connect",
    imageUrl: weConnect,
    websiteUrl: "https://weconnectdev.netlify.app/",
    githubLink: "https://github.com/manikantaPitla/we-connect",
  },
  {
    projectName: "Book Hub",
    imageUrl: bookHubImg,
    websiteUrl: "https://bookhub81.ccbp.tech/",
    githubLink: "https://github.com/manikantaPitla/book-hub",
  },
  {
    projectName: "Python Patterns",
    imageUrl: pythonPatterns,
    websiteUrl: "https://pythonpatterns.ccbp.tech/",
    githubLink: "https://github.com/manikantaPitla/python-patterns",
  },
  {
    projectName: "Tourism",
    imageUrl: tourismImg,
    websiteUrl: "https://visithyderabad.netlify.app/",
    githubLink:
      "https://github.com/manikantaPitla/visit-hyderabad-tourism-website",
  },
  {
    projectName: "Weather Application",
    imageUrl: weatherImg,
    websiteUrl: "https://manikantapitla.github.io/Weather-application/",
    githubLink: "https://github.com/manikantaPitla/Weather-application",
  },
];

const Projects = () => {
  return (
    <UiSection id="projects">
      <UiHeading>
        <span>04.</span> Projects
      </UiHeading>
      <div>
        <ProjectWrapper>
          {projectsList.map((project, index) => {
            const { projectName, imageUrl, githubLink, websiteUrl } = project;
            return (
              <ProjectItem
                key={index}
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <ProjectHeader>{projectName}</ProjectHeader>
                <ProjectDetailWrapper>
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noreferrer"
                    title="Github"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    title="website"
                  >
                    <FiLink />
                  </a>
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
