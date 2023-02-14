import React from "react";
import { useEffect, useState } from "react";
import { getProductsById } from "../../services/products";
import styles from "./ProductDetails.module.scss";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const getData = async () => {
    const data = await getProductsById(id);
    setProduct(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.Details}>
      <h3 className={styles.Details__Title}>{product.title}</h3>
      <img
        src={product.image}
        alt={product.title}
        className={styles.Details__Img}
      />

      <p className={styles.Details__Price}>${product.price}</p>
      <p className={styles.Details__Description}>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
