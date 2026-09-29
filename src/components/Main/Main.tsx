import { MenuList } from "../MenuList/MenuList";
import menu from "../../data/menu.json";
import type { MenuItem } from "../../types/menu";
import { Filters } from "../Filters/Filters";
import { StopList } from "../StopList/StopList";
import React from "react";

const menuItems = menu as MenuItem[];

export const Main = () => {
  const [search, setSearch] = React.useState("");

  return (
    <main className="main">
      <div className="container">
        <div className="main-wrapper">
          <div className="menu">
            <h2 className="menu-title">Меню ресторана</h2>
            <p className="menu-text">
              Все доступные позиции, которые сейчас в продаже
            </p>
            <Filters search={search} setSearch={setSearch} />
            <MenuList items={menuItems} />
          </div>
          <div className="stop-list">
            <StopList />
          </div>
        </div>
      </div>
    </main>
  );
};
