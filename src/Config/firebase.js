import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGMxFt-aaXLc7EYFCNJo8tQ_s6DS1uVvA",
    authDomain: "dr2023-c70d0.firebaseapp.com",
    projectId: "dr2023-c70d0",
    storageBucket: "dr2023-c70d0.appspot.com",
    messagingSenderId: "924916165892",
    appId: "1:924916165892:web:9eaa8d29026d93b8073451"
};

firebase.initializeApp(firebaseConfig)

export default firebase