import type { MenuItem } from "../../types/menu";

type MenuItemCardProps = {
  item: MenuItem;
};

export const StopListForm = ({ item }: MenuItemCardProps) => {
  return (
    <div className="list-form">
      <form action="">
        <span className="form-title">Форма добавления в стоп-лист</span>
        <button type="button" className="form-close">
          x
        </button>
        <div className="card-form">
          <div className="card-form-img">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="card-form-info">
            <h3 className="card-form-info-name">{item.name}</h3>
            <div className="card-form-info-category">{item.category}</div>
            <div className="card-form-info-price">{item.price} ₽</div>
          </div>
          <div className="card-form-stock">
            <div className="card-form-stock-text">{item.remainder} порций</div>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="reason">Причина</label>
          <select name="" id="reason">
            <option value="" disabled>
              Выберите причину
            </option>
            <option value="out_of_stock">Закончились продукты</option>
            <option value="bad_quality">Плохое качество партии</option>
            <option value="no_cook">Нет повара на станции</option>
            <option value="other">Другое</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="comment">Комментарий</label>
          <textarea name="" id="comment"></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="returnAt">Время предполагаемого возврата</label>
          <input type="time" id="returnAt" />
        </div>
        <div className="buttons">
          <button type="button" className="btn-reset btn">
            Отмена
          </button>
          <button type="submit" className="btn btn-orange">
            Добавить в стоп-лист
          </button>
        </div>
      </form>
    </div>
  );
};
