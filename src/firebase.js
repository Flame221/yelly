import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// import "firebase/auth"

const app = initializeApp({
  apiKey: "AIzaSyCf0mjN5CCECQEtGCujnhsD80DY5naC1fY",
  authDomain: "kanban-todo-12c95.firebaseapp.com",
  projectId: "kanban-todo-12c95",
  storageBucket: "kanban-todo-12c95.appspot.com",
  messagingSenderId: "423968718278",
  appId: "1:423968718278:web:9678be9a1d54eba23906c7",
});

const auth = getAuth(app);
export { auth };
export default app;
