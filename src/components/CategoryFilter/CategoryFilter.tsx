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
          className={category === "all" ? "tab tab--active" : "tab"}
        >
          Все
        </button>
        <button
          type="button"
          onClick={() => setCategory("kitchen")}
          className={category === "kitchen" ? "tab tab--active" : "tab"}
        >
          Кухня
        </button>
        <button
          type="button"
          onClick={() => setCategory("bar")}
          className={category === "bar" ? "tab tab--active" : "tab"}
        >
          Бар
        </button>
        <button
          type="button"
          onClick={() => setCategory("dessert")}
          className={category === "dessert" ? "tab tab--active" : "tab"}
        >
          Десерты
        </button>
      </div>
    </div>
  );
};
