import { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { InputEl } from "./styles";

type InputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const UiInput = (props: InputProps) => <InputEl {...props} />;

