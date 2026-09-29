import { removeFromStopList } from "../../redux/stopListSlice";
import type { MenuItem } from "../../types/menu";
import type { StopListEntry } from "../../types/stopListEntry";
import { useDispatch } from "react-redux";

type StopListItemProps = {
  item: MenuItem;
  entry: StopListEntry;
};

const reasonLabels: Record<StopListEntry["reason"], string> = {
  out_of_stock: "Закончились продукты",
  bad_quality: "Плохое качество партии",
  no_cook: "Нет повара на станции",
  other: "Другое",
};

export const StopListItem = ({ item, entry }: StopListItemProps) => {
  const dispatch = useDispatch();

  return (
    <div className="stop-item">
      <div className="stop-item-img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="stop-item-info">
        <h3 className="stop-item-name">{item.name}</h3>
        <div className="stop-item-reason">{reasonLabels[entry.reason]}</div>
        {entry.comment && (
          <div className="stop-item-comment">{entry.comment}</div>
        )}
        <div className="stop-item-returnAt">
          Вернётся в меню: {entry.returnAt}
        </div>
      </div>
      <button
        type="button"
        onClick={() => dispatch(removeFromStopList(entry.itemId))}
        className="btn btn-white"
      >
        Вернуть в меню
      </button>
    </div>
  );
};
