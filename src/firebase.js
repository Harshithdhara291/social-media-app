import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {getStorage} from "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyC0_OMX56-YQmO5_Uys8esLwYd92lTiWhs",
  authDomain: "auth-development-6db8d.firebaseapp.com",
  projectId: "auth-development-6db8d",
  storageBucket: "auth-development-6db8d.appspot.com",
  messagingSenderId: "784355912563",
  appId: "1:784355912563:web:5df4738a7220d5e7f5b306",
  measurementId: "G-QE07HPF9L8"
})

export const auth = app.auth()
export const storage = getStorage(app)
