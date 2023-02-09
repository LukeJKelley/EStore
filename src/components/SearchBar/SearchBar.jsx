import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  //filter .filter(product.Title) .ect e.c.t

  return (
    <form className={styles.Search}>
      <input type="text" className={styles.Search__Input}></input>
      <button type="submit" className={styles.Search__Button}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
