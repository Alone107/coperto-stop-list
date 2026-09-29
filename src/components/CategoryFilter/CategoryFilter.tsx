import type { Category } from "../../types/category";

export interface CategoryFilterProps {
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}

export const CategoryFilter = ({
  category,
  setCategory,
}: CategoryFilterProps) => {
  return (
    <div className="category-filter">
      <div className="tabs">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={category == "all" ? "tab--active tab" : "tab"}
        >
          Все
        </button>
        <button
          type="button"
          onClick={() => setCategory("kitchen")}
          className={category == "kitchen" ? "tab--active tab" : "tab"}
        >
          Кухня
        </button>
        <button
          type="button"
          onClick={() => setCategory("bar")}
          className={category == "bar" ? "tab--active tab" : "tab"}
        >
          Бар
        </button>
        <button
          type="button"
          onClick={() => setCategory("dessert")}
          className={category == "dessert" ? "tab--active tab" : "tab"}
        >
          Десерты
        </button>
      </div>
    </div>
  );
};
