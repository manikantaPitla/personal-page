import { ReactElement } from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { IconWrapper, LinkEl, LinkName, SocialLinkWrapper } from "./styles";
import { PROFILE_DATA } from "../../constants";

interface SocialLinksProps {
  isrender?: boolean;
}

const iconMap: Record<string, ReactElement> = {
  Github: <FiGithub />,
  LinkedIn: <FiLinkedin />,
  Instagram: <FiInstagram />,
};

const SocialLinks = ({ isrender = false }: SocialLinksProps) => {
  const socialLinksList = PROFILE_DATA.contact.map((contact) => ({
    name: contact.name,
    icon: iconMap[contact.name] || <FiGithub />,
    link: contact.url,
  }));

  return (
    <>
      {isrender
        ? socialLinksList.map((linkItem) => (
            <SocialLinkWrapper
              key={linkItem.name}
              href={linkItem.link}
              target="_blank"
              rel="noreferrer"
              title={linkItem.name}
            >
              <IconWrapper>{linkItem.icon}</IconWrapper>
              <LinkName>{linkItem.name}</LinkName>
            </SocialLinkWrapper>
          ))
        : socialLinksList.map((linkItem) => (
            <LinkEl key={linkItem.name} href={linkItem.link} target="_blank" rel="noreferrer" title={linkItem.name}>
              {linkItem.icon}
              {isrender && <LinkName>{linkItem.name}</LinkName>}
            </LinkEl>
          ))}
    </>
  );
};

export default SocialLinks;
