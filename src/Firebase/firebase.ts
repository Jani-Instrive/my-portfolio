import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAtr8eDewavVatAxlKHNl_mYGhqRPXCHA4",
  authDomain: "portfolio-jani-e6825.firebaseapp.com",
  projectId: "portfolio-jani-e6825",
  storageBucket: "portfolio-jani-e6825.firebasestorage.app",
  messagingSenderId: "195131494446",
  appId: "1:195131494446:web:8afb0aa7a607da920bcfbf",
  measurementId: "G-ML9P6CF0BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
// const analytics = getAnalytics(app);