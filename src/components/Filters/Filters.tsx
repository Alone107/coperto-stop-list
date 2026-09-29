import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { Search } from "../Search/Search";

interface FiltersProps {
  search: string;
  setSearch: () => string;
}

export const Filters = ({ search, setSearch }: FiltersProps) => {
  return (
    <div className="filters">
      <Search search={search} setSearch={setSearch} />
      <CategoryFilter />
    </div>
  );
};
