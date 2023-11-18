import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import type { FirebaseApp } from 'firebase/app';
import type { Firestore } from 'firebase/firestore';
import type { Auth } from 'firebase/auth';
import { browser } from '$app/environment';

export let db: Firestore;
export let app: FirebaseApp;
export let auth: Auth;

const firebaseConfig = {
 apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
 appId: import.meta.env.VITE_FIREBASE_APP_ID,
 useEmulator: import.meta.env.VITE_FIREBASE_USE_EMULATOR === 'true',
 authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
 storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
 messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
 measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
 projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
};

export const initializeFirebase = () => {
 if (!browser) {
  throw new Error("Can't use the Firebase client on the server.");
 }
 if (!app) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);

  if (firebaseConfig.useEmulator) {
   connectAuthEmulator(auth, 'localhost:9099');
  }
 }
};