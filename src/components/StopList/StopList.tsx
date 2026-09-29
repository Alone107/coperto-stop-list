import { StopListItem } from "../StopListItem/StopListItem";

export const StopList = () => {
  return (
    <div className="stop-lists">
      <div className="stop-list-wrapper">
        <div className="stop-list-left">
          <h2 className="stop-list-title">Стоп-лист кухни</h2>
          <p>Позиции, которые временно недоступны для продажи</p>
        </div>
        <div className="stop-list-right">
          <span>В стоп листе</span> 3 из 12
        </div>
      </div>
      <StopListItem />
    </div>
  );
};
