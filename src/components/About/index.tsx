import { ProfileContentWrapper, ProfileImageWrapper } from "./styles";
import { UiHeading, UiPara, UiSection } from "../ui";
import userImage from "../../assets/images/user/user_image.webp";
import { PROFILE_DATA, SECTION_HEADINGS } from "../../constants";

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
          {PROFILE_DATA.about.profileDescription.map((paragraph, index) => (
            <UiPara key={index}>{paragraph}</UiPara>
          ))}
        </div>
      </ProfileContentWrapper>
    </UiSection>
  );
};

export default About;
