type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <div className="search">
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        type="search"
        placeholder="Найти блюдо..."
        className="search__input"
        id="search"
      />
    </div>
  );
};
