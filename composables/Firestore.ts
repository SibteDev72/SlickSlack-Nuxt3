import {
  addDoc,
  getDocs,
  query,
  orderBy,
  collection,
  Firestore,
  getFirestore,
  limit,
} from "firebase/firestore";
import type { OrderItemInterface } from "~/types/Order";

export const useFirestore = () => {
  const firestore: Firestore = getFirestore();
  const collectionName = "orders";
  const addOrder = async (
    orderData: OrderItemInterface,
    firestore: Firestore
  ) => {
    const orderRef = collection(firestore, collectionName);
    try {
      const docRef = await addDoc(orderRef, orderData);
      // console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const getOrder = async (): Promise<OrderItemInterface | null> => {
    const orderRef = collection(firestore, collectionName);
    const getMostRecentQuery = query(
      orderRef,
      orderBy("createdAt", "desc"),
      limit(1)
    );
    try {
      const querSnapshot = await getDocs(getMostRecentQuery);
      if (querSnapshot.empty) {
        return null;
      }
      const doc = querSnapshot.docs[0];
      const recentOrder = {
        ...doc.data(),
      } as OrderItemInterface;
      return recentOrder;
    } catch (error) {
      console.error("Error fetching document: ", error);
      return null;
    }
  };

  return { addOrder, getOrder, firestore };
};
