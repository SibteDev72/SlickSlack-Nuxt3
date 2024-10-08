import {
  addDoc,
  collection,
  Firestore,
  getFirestore,
} from "firebase/firestore";
import type { OrderItemInterface } from "~/types/Order";

export const useFirestore = () => {
  const firestore: Firestore = getFirestore();
  const addOrder = async (
    orderData: OrderItemInterface,
    firestore: Firestore
  ) => {
    const collectionName = "orders";
    const orderRef = collection(firestore, collectionName);
    try {
      const docRef = await addDoc(orderRef, orderData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return { addOrder, firestore };
};
