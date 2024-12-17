import css from './SearchBox.module.css';

export default function SearchBox({ value, handleSearch }) {
  return (
    <label className={css.search}>
      Find contacts by name
      <input
        type="text"
        name="search"
        value={value}
        placeholder="Name"
        onChange={e => handleSearch(e.target.value)}
      />
    </label>
  );
}
