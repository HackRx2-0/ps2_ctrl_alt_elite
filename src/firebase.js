import firebase from "firebase/app";
import "firebase/auth";


const app = firebase.initializeApp({
  apiKey: "AIzaSyARwTVMWVz1u3iJQgG31luPo-OP03EhSz8",
  authDomain: "ecommerce-5c310.firebaseapp.com",
  projectId:"ecommerce-5c310",
  storageBucket: "ecommerce-5c310.appspot.com",
  messagingSenderId:"890834866251",
  appId: "1:890834866251:web:c8dab19c21e61c0fa7bdce",
  measurementId: "G-Y0DCYJ8BF2",
});

export const auth = app.auth();
export default app;
