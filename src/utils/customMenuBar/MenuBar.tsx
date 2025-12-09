import React, { useRef } from "react";
import { MenuBarEl } from "./style";

const MenuBar = ({ isOpen, ...props }) => {
  const menuItem = useRef();

  return (
    <MenuBarEl ref={menuItem} $isOpen={isOpen} {...props}>
      <div></div>
      <div></div>
      <div></div>
    </MenuBarEl>
  );
};

export default MenuBar;
