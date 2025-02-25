import React from "react";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { IconWrapper, LinkEl, LinkName, SocialLinkWrapper } from "./style";

const SocialLinks = ({ isrender = false }) => {
  const SocialLinksList = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/manikantaPitla",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/manikantapitla/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://www.instagram.com/mani_dynamic_/",
    },
  ];

  return (
    <>
      {isrender
        ? SocialLinksList.map((linkItem, index) => (
            <SocialLinkWrapper
              key={index}
              href={linkItem.link}
              target="_blank"
              rel="noreferrer"
              title={linkItem.name}
            >
              <IconWrapper>{linkItem.icon}</IconWrapper>
              <LinkName>{linkItem.name}</LinkName>
            </SocialLinkWrapper>
          ))
        : SocialLinksList.map((linkItem, index) => (
            <LinkEl
              key={index}
              href={linkItem.link}
              target="_blank"
              rel="noreferrer"
              title={linkItem.name}
            >
              {linkItem.icon}
              {isrender && <LinkName>{linkItem.name}</LinkName>}
            </LinkEl>
          ))}
    </>
  );
};

export default SocialLinks;
