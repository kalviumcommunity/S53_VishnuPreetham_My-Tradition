import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_vMze3KFWoUXekVtAkq4SQkLVWSxwBqE",
  authDomain: "my-tradition-17f62.firebaseapp.com",
  projectId: "my-tradition-17f62",
  storageBucket: "my-tradition-17f62.appspot.com",
  messagingSenderId: "954647271846",
  appId: "1:954647271846:web:e6f2f9710e5f3f2ce31767",
  measurementId: "G-FM3GYXRV3Y"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const storage=getStorage()
export const db=getFirestore()
const analytics = getAnalytics(app);