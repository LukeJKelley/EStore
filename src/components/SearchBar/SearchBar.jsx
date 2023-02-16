import React, { useContext, useState } from "react";
import styles from "./SearchBar.module.scss";
import { FilterContext } from "../../Context/Context";

const SearchBar = () => {
  const { allProducts, setAllProducts, defaultProducts } =
    useContext(FilterContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const filtered = allProducts.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setAllProducts(filtered);
  };

  const handleClick = () => {
    setAllProducts(defaultProducts);
    console.log(defaultProducts);
  };

  console.log(allProducts, "This is all products");

  return (
    <>
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
      <button className={styles.Search__Button} onClick={handleClick}>
        Reset Search
      </button>
    </>
  );
};

export default SearchBar;
