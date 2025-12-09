import React from "react";
import { EduContent, EduItem, EduPara, EduTimeLine } from "./style";
import { UiHeading, UiSection } from "../../utils/uiMaterials";
import { PROFILE_DATA } from "../../constants/profileData";
import { SECTION_HEADINGS } from "../../constants/navigationConstants";

const Education = () => {
  return (
    <UiSection id="education">
      <UiHeading>
        <span>{SECTION_HEADINGS.education.split(".")[0]}. </span>
        Education/Work
      </UiHeading>
      <EduContent>
        <EduTimeLine>
          {PROFILE_DATA.education.map((eachEdu, index) => {
            const { name, duration, cgpa , role} = eachEdu;

            return (
              <EduItem key={index}>
                <div>
                  <EduPara className="edu-title">{name}</EduPara>
                  <EduPara>{duration}</EduPara>
                  <EduPara>{cgpa || role}</EduPara>
                </div>
              </EduItem>
            );
          })}
        </EduTimeLine>
      </EduContent>
    </UiSection>
  );
};

export default Education;
