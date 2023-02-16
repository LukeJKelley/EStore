import React from "react";
import styles from "./ProductsDisplay.module.scss";
import ProductsCard from "../ProductsCard/ProductsCard.jsx";

const ProductsDisplay = () => {
  return (
    <div className={styles.Products}>
      <ProductsCard />
    </div>
  );
};

export default ProductsDisplay;
