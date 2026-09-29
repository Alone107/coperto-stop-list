export const StopListItem = () => {
  return (
    <div className="stop-item">
      <div className="stop-item-img">
        <img src="" alt="" />
      </div>
      <div className="stop-item-info">
        <h3 className="stop-item-name">Салат с лососем</h3>
        <div className="stop-item-reason">Закончились продукты</div>
        <div className="stop-item-commentary">Нет свежих овощей</div>
        <div className="stop-item-returnAt">Сегодня</div>
      </div>
      <button type="button" className="btn btn-white">
        Вернуть в меню
      </button>
    </div>
  );
};
