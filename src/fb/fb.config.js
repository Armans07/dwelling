// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: `${process.env.NEXT_PUBLIC_apiKey}`,
//   authDomain: `${process.env.NEXT_PUBLIC_authDomain}`,
//   projectId: `${process.env.NEXT_PUBLIC_projectId}`,
//   storageBucket: `${process.env.NEXT_PUBLIC_storageBucket}`,
//   messagingSenderId: `${process.env.NEXT_PUBLIC_messagingSenderId}`,
//   appId: `${process.env.NEXT_PUBLIC_appId}`,
// };
const firebaseConfig = {
  apiKey: "AIzaSyA0hQ_n6NGid8uwJZetl8S59jn-o83tkV8",
  authDomain: "dwelling-e835a.firebaseapp.com",
  projectId: "dwelling-e835a",
  storageBucket: "dwelling-e835a.appspot.com",
  messagingSenderId: "655521408532",
  appId: "1:655521408532:web:76d89517255a84c02ca901"
};

console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);

export default firebaseAuth;
