import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getProducts } from "../../services/products.js";
import styles from "./ProductsCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

const ProductsCard = () => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState({});

  const getData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleFavorite = (id) => {
    setFavorites({ ...favorites, [id]: !favorites[id] });
  };
  //add favourite boolean to database to store favourite values

  const HeartIcon = () => {
    return <FontAwesomeIcon icon={faRegularHeart} />;
  };
  // Change to regular-solid heart .. css change colour to white and border to black
  return (
    <>
      {products.map((product) => (
        <div key={product.id} className={styles.Card}>
          <NavLink to={`/Products/${product.id}`}>
            <h3 className={styles.Card__Title}>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className={styles.Card__Img}
            />

            <p className={styles.Card__Price}>${product.price}</p>
          </NavLink>

          <div
            className={`${styles.Heart} ${
              favorites[product.id] ? styles.Heart__Favourited : ""
            }`}
            onClick={() => toggleFavorite(product.id)}
          >
            <HeartIcon />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductsCard;
