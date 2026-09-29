import { MenuList } from "../MenuList/MenuList";
import { Filters } from "../Filters/Filters";
import { StopList } from "../StopList/StopList";
import React from "react";
import type { Category } from "../../types/category";

import { useSelector } from "react-redux";

import type { RootState } from "../../redux/store";
import { StopListForm } from "../StopListForm/StopListForm";

export const Main = () => {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState<Category>("all");

  const selectedItemId = useSelector(
    (state: RootState) => state.stopList.selectedItemId,
  );

  const menuItems = useSelector((state: RootState) => state.menu.items);
  const stopListEntries = useSelector(
    (state: RootState) => state.stopList.entries,
  );

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "all" || item.category === category;

    const isNotInStopList = !stopListEntries.some(
      (entry) => entry.itemId === item.id,
    );

    return matchesSearch && matchesCategory && isNotInStopList;
  });

  const selectedItem = menuItems.find((item) => item.id === selectedItemId);

  return (
    <main className="main">
      <div className="container">
        <div className="main-wrapper">
          <div className="menu">
            <h2 className="menu-title">Меню ресторана</h2>
            <p className="menu-text">
              Все доступные позиции, которые сейчас в продаже
            </p>
            <Filters
              search={search}
              category={category}
              setCategory={setCategory}
              setSearch={setSearch}
            />
            <MenuList items={filteredItems} />
          </div>
          <div className="stop-list">
            <StopList />
          </div>
        </div>
      </div>

      {selectedItem && <StopListForm item={selectedItem} />}
    </main>
  );
};
