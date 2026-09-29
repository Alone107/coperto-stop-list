export const StopListForm = () => {
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
          <label htmlFor="">Причина</label>
          <select name="" id="">
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="">Комментарий</label>
          <textarea name="" id=""></textarea>
        </div>
        <div className="form-row">
          <label htmlFor="">Время предполагаемого возврата</label>
          <input type="date" />
        </div>
        <div className="buttons">
          <button type="reset" className="btn-reset btn">
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
