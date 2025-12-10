import { ComponentType } from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { IconWrapper, LinkEl, LinkName, SocialLinkWrapper } from "./styles";
import { PROFILE_DATA } from "../../constants";

interface SocialLinksProps {
  isrender?: boolean;
}

const iconMap: Record<string, ComponentType<any>> = {
  Github: FiGithub as ComponentType<any>,
  LinkedIn: FiLinkedin as ComponentType<any>,
  Instagram: FiInstagram as ComponentType<any>,
};

const SocialLinks = ({ isrender = false }: SocialLinksProps) => {
  const socialLinksList = PROFILE_DATA.contact.map((contact) => {
    const IconComponent = iconMap[contact.name] || FiGithub;
    return {
    name: contact.name,
      IconComponent,
      link: contact.url,
    };
  });

  return (
    <>
      {isrender
        ? socialLinksList.map((linkItem) => {
            const { IconComponent } = linkItem;
            return (
              <SocialLinkWrapper
                key={linkItem.name}
                href={linkItem.link}
                target="_blank"
                rel="noreferrer"
                title={linkItem.name}
              >
                <IconWrapper>
                  <IconComponent />
                </IconWrapper>
              <LinkName>{linkItem.name}</LinkName>
            </SocialLinkWrapper>
            );
          })
        : socialLinksList.map((linkItem) => {
            const { IconComponent } = linkItem;
            return (
            <LinkEl key={linkItem.name} href={linkItem.link} target="_blank" rel="noreferrer" title={linkItem.name}>
                <IconComponent />
              {isrender && <LinkName>{linkItem.name}</LinkName>}
            </LinkEl>
            );
          })}
    </>
  );
};

export default SocialLinks;
