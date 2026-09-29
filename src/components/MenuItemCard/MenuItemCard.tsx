import type { MenuItem } from "../../types/menu";

export const MenuItemCard: React.FC<MenuItem> = ({
  name,
  category,
  price,
  remainder,
  imageUrl,
}) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-info">
        <h3 className="card-info-name">{name}</h3>
        <div className="card-info-category">{category}</div>
        <div className="card-info-price">{price} ₽</div>
      </div>
      <div className="card-stock">
        <div className="card-stock-text">{remainder} порций</div>
      </div>
      <button type="button" className="btn btn-orange">
        В стоп-лист
      </button>
    </div>
  );
};
