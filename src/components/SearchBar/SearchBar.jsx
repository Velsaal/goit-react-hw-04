import styles from './SearchBar.module.css';

function SearchBar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value.trim();
    onSubmit(value);
    e.target.reset();
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          name="query"
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
