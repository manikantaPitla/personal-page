import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { ButtonEl } from "./styles";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const UiButton = ({ children, ...rest }: ButtonProps) => <ButtonEl {...rest}>{children}</ButtonEl>;
