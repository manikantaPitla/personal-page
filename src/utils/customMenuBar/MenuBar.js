import React, { useRef } from "react";
import { MenuBarEl } from "./style";

const MenuBar = (props) => {
  const menuItem = useRef();

  const onClickMenuBar = () => {
    const children = menuItem.current.children;

    children[0].classList.toggle("first-child");
    children[1].classList.toggle("middle-child");
    children[2].classList.toggle("last-child");
  };

  return (
    <MenuBarEl ref={menuItem} onClick={onClickMenuBar} {...props}>
      <div></div>
      <div></div>
      <div></div>
    </MenuBarEl>
  );
};

export default MenuBar;
