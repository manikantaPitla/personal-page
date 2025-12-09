import { UiPara } from "../ui";
import { FooterContainer } from "./styles";
import { PROFILE_DATA } from "../../constants";

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <UiPara>Developed by {PROFILE_DATA.name} | Last updated on 18-11-2025</UiPara>
    </FooterContainer>
  );
};

export default Footer;
