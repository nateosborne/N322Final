import { initializeApp, getApp } from "firebase/app";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGnsg54nMzBt3130FqrxaXpPfGZ56NVcw",
  authDomain: "n322-no.firebaseapp.com",
  projectId: "n322-no",
  storageBucket: "n322-no.appspot.com",
  messagingSenderId: "206597060127",
  appId: "1:206597060127:web:e5ef15d1b88f90c33b872a",
  measurementId: "G-WZSTDBWX6H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const auth = getAuth(app);
export { app, auth, getApp, getAuth };
