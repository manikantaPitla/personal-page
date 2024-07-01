import React from "react";
import { UiPara } from "../../utils/uiMaterials";
import { Footer } from "./style";

const index = () => {
  return (
    <Footer as="footer">
      <UiPara>Developed by Manikanta Pitla</UiPara>
      <UiPara>
        <strong>Technologies Used</strong>
        <br />
        React.js, styled-components
      </UiPara>
    </Footer>
  );
};

export default index;
