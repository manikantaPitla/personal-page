import React from "react";
import { ProfileContentWrapper, ProfileImageWrapper } from "./style";
import { UiHeading, UiPara, UiSection } from "../../utils/uiMaterials";

const About = () => {
  console.log("About");

  return (
    <UiSection id="about">
      <UiHeading>
        <span>01. </span>
        About Me
      </UiHeading>
      <ProfileContentWrapper>
        <ProfileImageWrapper>
          <img
            alt="my profile"
            src="https://res.cloudinary.com/df9fyawpk/image/upload/v1737702912/1736956325847_nei12w.jpg"
            title="Manikanta Pitla"
          />
        </ProfileImageWrapper>
        <div>
          <UiPara>
            Hello! My name is Manikanta Pitla and I am passionate about creating
            interactive and responsive web applications. My interest in web
            development began when I started experimenting with building simple
            websites and applications, and it quickly grew into a full-fledged
            passion for coding and development.
          </UiPara>
          <UiPara>
            Over the years, I have honed my skills and developed a strong
            foundation in both front-end and back-end technologies. I love the
            process of bringing ideas to life on the internet and continuously
            strive to learn new techniques and tools to improve myself.
          </UiPara>
          <UiPara>
            Currently, I am focused on building efficient and scalable web
            applications, and I am dedicated to pushing the boundaries of what
            is possible in the digital world.
          </UiPara>
        </div>
      </ProfileContentWrapper>
    </UiSection>
  );
};

export default About;
