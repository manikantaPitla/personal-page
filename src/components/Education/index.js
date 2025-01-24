import React from "react";
import { EduContent, EduItem, EduPara, EduTimeLine } from "./style";
import { UiHeading, UiSection } from "../../utils/uiMaterials";

const eduList = [
  {
    name: "Full Stack Development - NxtWave",
    duration: "Feb 2023 - Oct 2023",
    cgpa: "CGPA - 8.8",
  },
  {
    name: "BSc Computer Science - SSR Degree College, Nizamabad",
    duration: "Jul 2019 - Jun 2022",
    cgpa: "CGPA - 7.48",
  },
  {
    name: "Intermediate - Kshatriya Junior College, Armoor",
    duration: "Jun 2017 - Mar 2019",
    cgpa: "CGPA - 8.27",
  },
  {
    name: "SSC - ZPHS, Yergatla ",
    duration: "Jun 2016 - Mar 2017",
    cgpa: "CGPA - 9.0",
  },
];

const Education = () => {
  return (
    <UiSection id="education">
      <UiHeading>
        <span>02. </span>
        Education
      </UiHeading>
      <EduContent>
        <EduTimeLine>
          {eduList.map((eachEdu, index) => {
            const { name, duration, cgpa } = eachEdu;

            return (
              <EduItem key={index}>
                <div>
                  <EduPara>{name}</EduPara>
                  <EduPara>{duration}</EduPara>
                  <EduPara>{cgpa}</EduPara>
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
