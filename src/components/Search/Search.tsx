import type { FiltersProps } from "../Filters/Filters";

export const Search = ({ search, setSearch }: FiltersProps) => {
  return (
    <div className="search">
      <input
        value={search}
        onChange={setSearch(value)}
        type="search"
        placeholder="Найти блюдо..."
        className="search__input"
        id="search"
      />
    </div>
  );
};
