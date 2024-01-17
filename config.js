import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDVxmNZGGWIRdqDpd-7aPO66uegrwl_Njc",
  authDomain: "govtinvoice-c6a4c.firebaseapp.com",
  projectId: "govtinvoice-c6a4c",
  storageBucket: "govtinvoice-c6a4c.appspot.com",
  messagingSenderId: "478931676636",
  appId: "1:478931676636:web:a8353e35501630bec87319",
  measurementId: "G-6Y8BETXTCD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { auth };
export default db;
export {firebaseConfig};