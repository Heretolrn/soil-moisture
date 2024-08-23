// lib/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABg3rmjfXV24nQSo6ZXnI4ehZe43ZPgKY",
  authDomain: "soil-moisture-6355d.firebaseapp.com",
  projectId: "soil-moisture-6355d",
  storageBucket: "soil-moisture-6355d.appspot.com",
  messagingSenderId: "452743226506",
  appId: "1:452743226506:web:9155589566c3d4e97ef973",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export default app;
