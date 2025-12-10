import { SkillCard, SkillsWrapper } from "./styles";
import { UiHeading, UiSection } from "../ui";
import { SECTION_HEADINGS, PROFILE_DATA } from "../../constants";

const Skills = () => {
  return (
    <UiSection id="skills">
      <UiHeading>
        <span>{SECTION_HEADINGS.skills.split(".")[0]}.</span> Skills
      </UiHeading>
      <div>
        <SkillsWrapper>
          {PROFILE_DATA.skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <SkillCard key={index}>
                <h6>
                  <IconComponent />
                </h6>
                <p>{skill.name}</p>
              </SkillCard>
            );
          })}
        </SkillsWrapper>
      </div>
    </UiSection>
  );
};

export default Skills;
