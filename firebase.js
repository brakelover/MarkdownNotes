import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBtkO5E0Lj2uBOvIe-ZvX3U9Vp2aG4NRSQ",
  authDomain: "react-markdown-notes-91918.firebaseapp.com",
  projectId: "react-markdown-notes-91918",
  storageBucket: "react-markdown-notes-91918.appspot.com",
  messagingSenderId: "233248898401",
  appId: "1:233248898401:web:3f919081d1f809f5ea9920"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
