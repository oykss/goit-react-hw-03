import { useId } from 'react';

export default function SearchBox({ value, handleSearch }) {
  const inputId = useId();

  return (
    <>
      <label htmlFor={inputId}>Email</label>
      <input
        type="text"
        name="search"
        id={inputId}
        value={value}
        onChange={e => handleSearch(e.target.value)}
      />
    </>
  );
}
