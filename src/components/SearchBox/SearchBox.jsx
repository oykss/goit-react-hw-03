import { useId } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox({ value, handleSearch }) {
  const inputId = useId();

  return (
    <label htmlFor={inputId} className={css.search}>
      Find contacts by name
      <input
        type="text"
        name="search"
        value={value}
        id={inputId}
        placeholder="Name"
        onChange={e => handleSearch(e.target.value)}
      />
    </label>
  );
}
