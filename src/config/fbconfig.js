import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDeGjS3R76nN1xa1S0p_Qtp-2H_7xdq5C4",
    authDomain: "fir-c67b2.firebaseapp.com",
    databaseURL: "https://fir-c67b2-default-rtdb.firebaseio.com",
    projectId: "fir-c67b2",
    storageBucket: "fir-c67b2.appspot.com",
    messagingSenderId: "331242542810",
    appId: "1:331242542810:web:82aafe0b41a2778d6df7e3",
    measurementId: "G-Z8DVQGNE97"
};
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;