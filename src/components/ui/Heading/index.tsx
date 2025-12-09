import { HTMLAttributes, PropsWithChildren } from "react";
import { HeadingEl } from "./styles";

type HeadingProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>;

export const UiHeading = ({ children, ...rest }: HeadingProps) => <HeadingEl {...rest}>{children}</HeadingEl>;
