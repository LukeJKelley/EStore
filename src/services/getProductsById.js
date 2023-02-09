import { db } from "../services/firebase.js";
import { doc, getDoc } from "firebase/firestore";

export const getProductsById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Doc not found");
  }

  return { id: docSnap.id, ...docSnap.data() };
};
