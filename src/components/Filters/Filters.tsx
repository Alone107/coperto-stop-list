import { CategoryFilter } from "../CategoryFilter/CategoryFilter";
import { Search } from "../Search/Search";

export interface FiltersProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Filters = ({ search, setSearch }: FiltersProps) => {
  return (
    <div className="filters">
      <Search search={search} setSearch={setSearch} />
      <CategoryFilter />
    </div>
  );
};
