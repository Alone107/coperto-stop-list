import type { MenuItem } from "../../types/menu";
import type { StopListEntry } from "../../types/stopListEntry";

type StopListItemProps = {
  item: MenuItem;
  entry: StopListEntry;
};

export const StopListItem = ({ item, entry }: StopListItemProps) => {
  return (
    <div className="stop-item">
      <div className="stop-item-img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="stop-item-info">
        <h3 className="stop-item-name">{item.name}</h3>
        <div className="stop-item-reason">{entry.reason}</div>
        <div className="stop-item-comment">{entry.comment}</div>
        <div className="stop-item-returnAt">Вернётся в меню: {entry.time}</div>
      </div>
      <button type="button" className="btn btn-white">
        Вернуть в меню
      </button>
    </div>
  );
};
