export const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <div className="tabs">
        <button type="button" className="tab tab--active">
          Все
        </button>
        <button type="button" className="tab">
          Кухня
        </button>
        <button type="button" className="tab">
          Бар
        </button>
        <button type="button" className="tab">
          Десерты
        </button>
      </div>
    </div>
  );
};
