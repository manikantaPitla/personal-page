import React from "react";
import { ProfileContentWrapper, ProfileImageWrapper } from "./style";
import { UiHeading, UiPara, UiSection } from "../../utils/uiMaterials";
import userImage from "../../assets/images/user/user_image.webp";
import { PROFILE_DATA } from "../../constants/profileData";
import { SECTION_HEADINGS } from "../../constants/navigationConstants";

const About = () => {
  return (
    <UiSection id="about">
      <UiHeading>
        <span>{SECTION_HEADINGS.about.split(".")[0]}.</span> About Me
      </UiHeading>
      <ProfileContentWrapper>
        <ProfileImageWrapper>
          <img alt="My Profile" src={userImage} title={PROFILE_DATA.name} loading="lazy" />
        </ProfileImageWrapper>
        <div>
          {PROFILE_DATA.about.profile_description.map((paragraph, index) => (
            <UiPara key={index}>{paragraph}</UiPara>
          ))}
        </div>
      </ProfileContentWrapper>
    </UiSection>
  );
};

export default About;
