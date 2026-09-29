import React from "react";
import { MenuItemCard } from "../MenuItemCard/MenuItemCard";

export const MenuList = ({ items }) => {
  return (
    <div className="menu-list">
      {items.map((id) => (
        <MenuItemCard key={id} />
      ))}
    </div>
  );
};
