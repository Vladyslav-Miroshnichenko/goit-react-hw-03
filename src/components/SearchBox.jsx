const SearchBox = ({ filter, onFilterChange }) => (
  <input
    type="text"
    value={filter}
    onChange={onFilterChange}
    placeholder="Search contacts"
  />
);

export default SearchBox;
