export const MenuItemCard = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="" alt="" />
      </div>
      <div className="card-info">
        <div className="card-info-name">Пицца Маргарита</div>
        <div className="card-info-category">kitchen</div>
        <div className="card-info-price">690 рублей</div>
      </div>
      <div className="card-ostatok">
        <img src="" alt="" />
        <div className="card-ostatok-text">12 порций</div>
      </div>
      <button type="button" className="btn btn-orange">
        В стоп-лист
      </button>
    </div>
  );
};
