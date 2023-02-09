import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase.js";

// CREATE
export const addProduct = async (productsData) => {
  // Cleaning up the data before sending it to the DB
  const { title, price, image } = productsData;

  // We can add extra field after grabbing the movieData from the form

  const newProduct = { title, price, description, image, count };

  try {
    // Accessing The collection Reference
    const collectionRef = collection(db, "products");
    const newDoc = await addDoc(collectionRef, newProduct);
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

// Update
// Update the data for an existing document
// var docRef = db.collection("collection_name").doc("document_id");
// docRef
//   .set({
//     field1: "new_value1",
//     field2: "new_value2",
//     // Add additional fields as needed
//   })
//   .then(function () {
//     console.log("Document successfully updated!");
//   })
//   .catch(function (error) {
//     console.error("Error updating document: ", error);
//   });

// Delete
