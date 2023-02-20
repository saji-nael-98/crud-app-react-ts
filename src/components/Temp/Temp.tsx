import React, { FC } from "react";
import { TypeOfTag } from "typescript";

interface MenuProps {
  children: React;
}

const Menu: FC<MenuProps> = ({ children }) => {
  return <ul>{children}</ul>;
};

interface MenuItemProps {
  children: string;
}

const MenuItem: FC<MenuItemProps> = ({ children }) => {
  if (children !== typeof MenuItem) throw Error("test");
  return (
    <li>
      <div>test</div>
    </li>
  );
};

Menu.Item = MenuItem;

export default Menu;
