import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase.js";

// CREATE
export const addProduct = async (productsData) => {
  // Cleaning up the data before sending it to the DB
  const { title, price, image, description, count } = productsData;

  // We can add extra field after grabbing the movieData from the form

  // const newProduct = { title, price, description, image, count, favourite };

  try {
    // Accessing The collection Reference
    const collectionRef = collection(db, "products");
    const newDoc = await addDoc(collectionRef, productsData);
    console.log("Document written with ID: ", newDoc.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// READ
// GETTING ALL THE DOCS IN THE DB
export const getProducts = async () => {
  // Get CollectionReference
  const collectionRef = collection(db, "products");
  // Get a QuerySnapshot
  const querySnapshot = await getDocs(collectionRef);
  // getting all the docs in the QuerySnapshot
  const data = querySnapshot.docs.map((rawDoc) => {
    const id = rawDoc.id;
    const cleanDoc = rawDoc.data();
    return { id, ...cleanDoc };
  });
  return data;
};
//get products by Id
export const getProductsById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Doc not found");
  }

  return { id: docSnap.id, ...docSnap.data() };
};

// Update
// Update the data for an existing
// export const updateProduct = async (id) => {
//   const { title, price, image, description } = id;

//   const docRef = doc(db, "products", id);

//   await updateDoc(docRef, {
//     title,
//     price,
//     image,
//     description,
//     count,
//   });
// };
// };

// Delete
