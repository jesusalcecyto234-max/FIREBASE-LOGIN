import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCBcQtphZoAaxbsDExZS6fFOYhRHHqKxzk",
  authDomain: "login-confirebase.firebaseapp.com",
  projectId: "login-confirebase",
  storageBucket: "login-confirebase.firebasestorage.app",
  messagingSenderId: "44124389633",
  appId: "1:44124389633:web:3e14f08c6ed44a37675b00",
  measurementId: "G-QLNXWTB3VZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);