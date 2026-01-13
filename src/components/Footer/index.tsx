import { UiPara } from "../ui";
import { FooterContainer } from "./styles";
import { PROFILE_DATA } from "../../constants";

const Footer = () => {
  return (
    <FooterContainer as="footer">
      <UiPara>
        Developed by <b>{PROFILE_DATA.name}</b> | Last updated on 10-01-2026
      </UiPara>
    </FooterContainer>
  );
};

export default Footer;
