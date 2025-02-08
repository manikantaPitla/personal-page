import React from "react";

import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { LinkEl } from "./styles";

const SocialLinks = () => {
  const SocialLinksList = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/manikantaPitla",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://linkedin.com/in/manikantapitla/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/mani_dynamic_/",
    },
  ];

  return (
    <>
      {SocialLinksList.map((linkItem, index) => (
        <LinkEl
          key={index}
          href={linkItem.link}
          target="_blank"
          rel="noreferrer"
          title={linkItem.name}
        >
          {linkItem.icon}
        </LinkEl>
      ))}
    </>
  );
};

export default SocialLinks;
