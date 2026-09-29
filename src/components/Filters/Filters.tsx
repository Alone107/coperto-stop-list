import type { Category } from "../../types/category";
import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { Search } from "../Search/Search";

export interface FiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  category: Category;
  setCategory: React.Dispatch<React.SetStateAction<Category>>;
}

export const Filters = ({
  search,
  setSearch,
  category,
  setCategory,
}: FiltersProps) => {
  return (
    <div className="filters">
      <Search search={search} setSearch={setSearch} />
      <CategoryFilter category={category} setCategory={setCategory} />
    </div>
  );
};
