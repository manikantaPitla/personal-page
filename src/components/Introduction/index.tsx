import React from "react";
import { Main, ProfileWrapper, UserTitle } from "./style";
import { UiButton, UiPara } from "../../utils/uiMaterials";
import { PROFILE_DATA } from "../../constants/profileData";

const Introduction = () => {
  return (
    <Main id="introduction">
      <ProfileWrapper>
        <UiPara>Hi, my name is</UiPara>
        <UserTitle>{PROFILE_DATA.name}</UserTitle>

        <UiPara>{PROFILE_DATA.description}</UiPara>
        <div>
          <a href={PROFILE_DATA.resume} target="_blank" rel="noreferrer">
            <UiButton type="button">Check Resume</UiButton>
          </a>
        </div>
      </ProfileWrapper>
    </Main>
  );
};

export default Introduction;
