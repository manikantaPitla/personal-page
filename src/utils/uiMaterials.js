import { ButtonEl, HeadingEl, InputEl, ParaEl, SectionEl } from "./uiStyles";

export const UiButton = ({ children, type }) => (
  <ButtonEl type={type}>{children}</ButtonEl>
);

export const UiSection = ({ children, ...props }) => (
  <SectionEl {...props}>{children}</SectionEl>
);

export const UiHeading = ({ children }) => <HeadingEl>{children}</HeadingEl>;

export const UiPara = ({ children }) => <ParaEl>{children}</ParaEl>;

export const UiInput = (props) => <InputEl {...props} />;
