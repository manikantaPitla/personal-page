import { HTMLAttributes, PropsWithChildren } from "react";
import { ParaEl } from "./styles";

type ParagraphProps = PropsWithChildren<HTMLAttributes<HTMLParagraphElement>>;

export const UiPara = ({ children, ...rest }: ParagraphProps) => <ParaEl {...rest}>{children}</ParaEl>;

