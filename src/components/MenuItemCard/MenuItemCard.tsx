import type { MenuItem } from "../../types/menu";

type MenuItemCardProps = {
  item: MenuItem;
};

export const MenuItemCard = ({ item }: MenuItemCardProps) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="card-info">
        <h3 className="card-info-name">{item.name}</h3>
        <div className="card-info-category">{item.category}</div>
        <div className="card-info-price">{item.price} ₽</div>
      </div>
      <div className="card-stock">
        <div className="card-stock-text">{item.remainder} порций</div>
      </div>
      <button type="button" className="btn btn-orange">
        В стоп-лист
      </button>
    </div>
  );
};
