import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import  'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAankmkhFkXMv2Z853xh8RMayVfcmYJBx8",
  authDomain: "browniepoints-b85ab.firebaseapp.com",
  projectId: "browniepoints-b85ab",
  storageBucket: "browniepoints-b85ab.appspot.com",
  messagingSenderId: "104198636411",
  appId: "1:104198636411:web:10da0690dda0a44b1ff3de",
  measurementId: "G-PRLGTRZ6GN"
}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};