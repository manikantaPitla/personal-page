import { HTMLAttributes, PropsWithChildren } from "react";
import { SectionEl } from "./styles";

type SectionProps = PropsWithChildren<HTMLAttributes<HTMLElement>>;

export const UiSection = ({ children, ...props }: SectionProps) => <SectionEl {...props}>{children}</SectionEl>;

