import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAN1toXqmf5EAXL4fZ4--PX4zdXSIKTLng",
    authDomain: "chatgpt-clone-84760.firebaseapp.com",
    projectId: "chatgpt-clone-84760",
    storageBucket: "chatgpt-clone-84760.appspot.com",
    messagingSenderId: "62455430806",
    appId: "1:62455430806:web:3caf00080e16a504fbccb7"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }