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
          <span>В стоп листе</span> {stopListEntries.length} из{" "}
          {menuItems.length}
        </div>
      </div>

      {stopListEntries.map((entry) => (
        <StopListItem key={entry.itemId} entry={entry} />
      ))}
    </div>
  );
};
