const SearchBox = ({ filter, onChange }) => (
  <input
    type="text"
    value={filter}
    onChange={onChange}
    placeholder="Search contacts"
  />
);

export default SearchBox;
