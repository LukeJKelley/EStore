import React from "react";

const SearchResults = ({ products }) => {
  return (
    <div>
      {products.map((id, products) => (
        <div key={id}>
          <h2>{products.title}</h2>
          <p>{products.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
