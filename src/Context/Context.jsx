import React, { createContext, useState } from "react";

export const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [defaultProducts, setDefaultProducts] = useState([]);
  const data = {
    allProducts,
    setAllProducts,
    defaultProducts,
    setDefaultProducts,
  };

  return (
    <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
