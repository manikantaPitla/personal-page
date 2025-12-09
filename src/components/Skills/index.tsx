import React from "react";
import { SkillCard, SkillsWrapper } from "./style";
import { UiHeading, UiSection } from "../../utils/uiMaterials";
import { SECTION_HEADINGS } from "../../constants/navigationConstants";
import { PROFILE_DATA } from "../../constants/profileData";

const Skills = () => {
  return (
    <UiSection id="skills">
      <UiHeading>
        <span>{SECTION_HEADINGS.skills.split(".")[0]}.</span> Skills
      </UiHeading>
      <div>
        <SkillsWrapper>
          {PROFILE_DATA.skills.map((skill, index) => (
            <SkillCard key={index}>
              <h6>{skill.icon}</h6>
              <p>{skill.name}</p>
            </SkillCard>
          ))}
        </SkillsWrapper>
      </div>
    </UiSection>
  );
};

export default Skills;
