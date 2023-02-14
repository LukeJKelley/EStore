import React, { useContext, useState } from "react";
import styles from "./SearchBar.module.scss";
import { FilterContext } from "../../Context/Context";

const SearchBar = () => {
  const { filteredProducts, setFilteredProducts } = useContext(FilterContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <form className={styles.Search} onSubmit={handleSearch}>
      <input
        type="text"
        className={styles.Search__Input}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className={styles.Search__Button}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
