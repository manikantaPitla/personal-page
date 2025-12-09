import { EduContent, EduItem, EduPara, EduTimeLine } from "./styles";
import { UiHeading, UiSection } from "../ui";
import { PROFILE_DATA, SECTION_HEADINGS } from "../../constants";

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
            const { name, duration, cgpa, role } = eachEdu;

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
