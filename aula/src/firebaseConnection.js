import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDArWU-tKmRnTKXvNSOjoT2rM3_nVrk0Dg",
  authDomain: "aula-firebase-4da89.firebaseapp.com",
  projectId: "aula-firebase-4da89",
  storageBucket: "aula-firebase-4da89.appspot.com",
  messagingSenderId: "39361347508",
  appId: "1:39361347508:web:e4b984b981689c61d93ce1",
  measurementId: "G-BXJNE63DTL"

};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth};