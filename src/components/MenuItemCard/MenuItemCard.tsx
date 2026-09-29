import type { MenuItem } from "../../types/menu";
import { useDispatch } from "react-redux";
import { selectItem } from "../../redux/stopListSlice";

import { categoryLabels } from "../../utils/categoryLabels";

type MenuItemCardProps = {
  item: MenuItem;
};

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="card-info">
        <h3 className="card-info-name">{item.name}</h3>
        <div className="card-info-category">
          {categoryLabels[item.category]}
        </div>
        <div className="card-info-price">{item.price} ₽</div>
      </div>
      <div className="card-stock">
        <div className="card-stock-text">{item.remainder} порций</div>
      </div>
      <button
        type="button"
        onClick={() => dispatch(selectItem(item.id))}
        className="btn btn-orange"
      >
        В стоп-лист
      </button>
    </div>
  );
};
