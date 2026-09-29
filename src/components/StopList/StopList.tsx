import { useSelector } from "react-redux";
import { StopListItem } from "../StopListItem/StopListItem";
import type { RootState } from "../../redux/store";

export const StopList = () => {
  const menuItems = useSelector((state: RootState) => state.menu.items);
  const stopListEntries = useSelector(
    (state: RootState) => state.stopList.entries,
  );

  return (
    <div className="stop-lists">
      <div className="stop-list-wrapper">
        <div className="stop-list-left">
          <h2 className="stop-list-title">Стоп-лист кухни</h2>
          <p>Позиции, которые временно недоступны для продажи</p>
        </div>
        <div className="stop-list-right">
          В стоп-листе:
          <strong>
            {stopListEntries.length} из {menuItems.length}
          </strong>
        </div>
      </div>

      {stopListEntries.map((entry) => {
        const menuItem = menuItems.find((item) => item.id === entry.itemId);

        if (!menuItem) {
          return null;
        }

        return (
          <StopListItem key={entry.itemId} item={menuItem} entry={entry} />
        );
      })}
      {stopListEntries.length === 0 && (
        <div className="stop-list__empty">
          <span className="stop-list__empty-icon">✓</span>
          <strong>Все позиции в продаже</strong>
          <p>Сейчас в стоп-листе нет позиций</p>
        </div>
      )}
    </div>
  );
};
