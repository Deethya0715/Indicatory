// Firebase.js

// Import core Firebase functions and all necessary services
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnNNEyqHM66_xNXH0dHRITkhgZXeD8-cY",
  authDomain: "indicatory-d57ad.firebaseapp.com",
  projectId: "indicatory-d57ad",
  storageBucket: "indicatory-d57ad.firebasestorage.app",
  messagingSenderId: "930339817829",
  appId: "1:930339817829:web:53db7db335a1b62f12398c",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase services for use throughout the app
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);

// You can optionally export the app instance if needed for other services
export const firebaseApp = app;
