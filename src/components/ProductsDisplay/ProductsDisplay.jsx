import React from "react";
import styles from "./ProductsDisplay.module.scss";
import ProductsCard from "../ProductsCard/ProductsCard.jsx";
// import { FilterContext } from "../../Context/Context";
// import { useContext } from "react";

const ProductsDisplay = () => {
  // const { filteredProducts } = useContext(FilterContext);

  return (
    <div className={styles.Products}>
      <ProductsCard />
    </div>
  );
};

export default ProductsDisplay;
