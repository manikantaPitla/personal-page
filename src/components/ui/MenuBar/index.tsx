import { HTMLAttributes } from "react";
import { MenuBarEl } from "./styles";

interface MenuBarProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
}

const MenuBar = ({ isOpen, ...props }: MenuBarProps) => {
  return (
    <MenuBarEl $isOpen={isOpen} {...props}>
      <div></div>
      <div></div>
      <div></div>
    </MenuBarEl>
  );
};

export default MenuBar;
