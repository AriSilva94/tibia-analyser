import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  "projectId": "tibia-analyser",
  "appId": "1:99465550010:web:77f2d4561f1ed059cc8a83",
  "storageBucket": "tibia-analyser.appspot.com",
  "apiKey": "AIzaSyByYWOVctdxK3R-BnIz68a5ToG37qNm3tI",
  "authDomain": "tibia-analyser.firebaseapp.com",
  "messagingSenderId": "99465550010"
}

export const firebaseApp = initializeApp(firebaseConfig);