import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { Search } from "../Search/Search";

export const Filters = () => {
  return (
    <div className="filters">
      <Search />
      <CategoryFilter />
    </div>
  );
};
