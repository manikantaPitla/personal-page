import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { IconWrapper, LinkEl, LinkName, SocialLinkWrapper } from "./style";
import { PROFILE_DATA } from "../../constants/profileData";

const SocialLinks = ({ isrender = false }) => {
  const SocialLinksList = PROFILE_DATA.contact.map((contact, index) => {
    const iconMap = {
      Github: <FiGithub />,
      LinkedIn: <FiLinkedin />,
      Instagram: <FiInstagram />,
    };

    return {
      name: contact.name,
      icon: iconMap[contact.name] || <FiGithub />,
      link: contact.social_url,
    };
  });

  return (
    <>
      {isrender
        ? SocialLinksList.map((linkItem, index) => (
            <SocialLinkWrapper key={index} href={linkItem.link} target="_blank" rel="noreferrer" title={linkItem.name}>
              <IconWrapper>{linkItem.icon}</IconWrapper>
              <LinkName>{linkItem.name}</LinkName>
            </SocialLinkWrapper>
          ))
        : SocialLinksList.map((linkItem, index) => (
            <LinkEl key={index} href={linkItem.link} target="_blank" rel="noreferrer" title={linkItem.name}>
              {linkItem.icon}
              {isrender && <LinkName>{linkItem.name}</LinkName>}
            </LinkEl>
          ))}
    </>
  );
};

export default SocialLinks;
