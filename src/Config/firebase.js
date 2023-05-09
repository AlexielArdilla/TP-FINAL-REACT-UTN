import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBObYy3dGmB9BvM_uHRvH09ttqGDPHdcRY",
    authDomain: "mi-proyecto-utn.firebaseapp.com",
    databaseURL: "https://mi-proyecto-utn-default-rtdb.firebaseio.com",
    projectId: "mi-proyecto-utn",
    storageBucket: "mi-proyecto-utn.appspot.com",
    messagingSenderId: "961006128826",
    appId: "1:961006128826:web:4eb516232eb4783deb7c83"
  };

firebase.initializeApp(firebaseConfig)

export default firebase