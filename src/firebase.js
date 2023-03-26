import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBqJmQiSErkJc64c8VjZSux867SiJTES-E",
  authDomain: "chatbook-xenon.firebaseapp.com",
  projectId: "chatbook-xenon",
  storageBucket: "chatbook-xenon.appspot.com",
  messagingSenderId: "914238817502",
  appId: "1:914238817502:web:d84c6943305bebe19a6e4f",
};

export const app = initializeApp(firebaseConfig);
