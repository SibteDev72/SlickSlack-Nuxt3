import { getFirestore, addDoc, collection } from "firebase/firestore";
import type { OrderItemInterface } from "~/types/Order";

export const useFirestore = () => {
  const db = getFirestore();
  const addOrder = async (orderData: OrderItemInterface) => {
    const collectionName = "orders";
    const orderRef = collection(db, collectionName);
    try {
      const docRef = await addDoc(orderRef, orderData);
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return { addOrder };
};
