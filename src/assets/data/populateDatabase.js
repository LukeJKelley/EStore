// import { products } from "./productsData.js";
import { addProduct, getProducts } from "../../services/products.js";

export const populateDatabase = async () => {
  const snapshot = await getProducts();

  if (snapshot.size === 0) {
    productsData.forEach((product) => {
      addProduct(product);
    });
  }
};

//check to see if products are in db. if so don't push
