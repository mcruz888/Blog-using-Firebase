import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWsc4cQnb1OsCG_O9roDzlRo1Y8Zy_Tbg",
  authDomain: "blog-17d0a.firebaseapp.com",
  projectId: "blog-17d0a",
  storageBucket: "blog-17d0a.appspot.com",
  messagingSenderId: "198986989349",
  appId: "1:198986989349:web:267956320f07ce9c31e4cc"
};

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)