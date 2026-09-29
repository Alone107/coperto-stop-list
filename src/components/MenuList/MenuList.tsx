import { MenuItemCard } from "../MenuItemCard/MenuItemCard";
import type { MenuItem } from "../../types/menu";

type MenuListProps = {
  items: MenuItem[];
};

export const MenuList = ({ items }: MenuListProps) => {
  return (
    <div className="menu-list">
      {items.length > 0 ? (
        items.map((item) => <MenuItemCard key={item.id} item={item} />)
      ) : (
        <div className="menu-list__empty">Ничего не найдено</div>
      )}
    </div>
  );
};
