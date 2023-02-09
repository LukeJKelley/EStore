import { productsData } from "../products/productsData.js";
import { addProduct } from "./products.js";

export const populateDatabase = () => {
  productsData.forEach((product) => {
    addProduct(product);
  });
};

//check to see if products are in db. if so don't push
