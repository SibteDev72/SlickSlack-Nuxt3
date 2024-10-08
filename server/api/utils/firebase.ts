import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

let firestore: Firestore | undefined;

export const getServerFirestore = () => {
  if (!firestore) {
    const config = useRuntimeConfig();
    const firebaseConfig = {
      apiKey: config.public.firebaseApiKey,
      authDomain: config.public.firebaseAuthDomain,
      projectId: config.public.firebaseProjectId,
      storageBucket: config.public.firebaseStorageBucket,
      messagingSenderId: config.public.firebaseMessagingSenderId,
      appId: config.public.firebaseAppId,
    };
    const firebaseApp = getApps().length
      ? getApp()
      : initializeApp(firebaseConfig);
    firestore = getFirestore(firebaseApp);
  }
  return firestore!;
};
