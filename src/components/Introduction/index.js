import React from "react";
import { Main, ProfileWrapper } from "./style";
import { UiButton, UiPara } from "../../utils/uiMaterials";

const Introduction = () => {
  return (
    <Main>
      <ProfileWrapper>
        <UiPara>Hi, my name is</UiPara>
        <h1>Manikanta Pitla</h1>

        <UiPara>
          An enthusiastic Full Stack Developer with a strong foundation in both
          front-end and back-end technologies. Eager to apply my knowledge and
          skills to real-world projects, I am passionate about learning and
          growing in the field of web development.
        </UiPara>
        <div>
          <a
            href="https://drive.google.com/file/d/1lP7vhs4KeDTS2DCh3LP7sk7PwuCPZH7B/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <UiButton type="button">Check Resume</UiButton>
          </a>
        </div>
      </ProfileWrapper>
    </Main>
  );
};

export default Introduction;
