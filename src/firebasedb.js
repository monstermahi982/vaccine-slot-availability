import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBfUjqFBsVdrFlWhCTIRWrnRq6D6eCMtWE",
    authDomain: "vaccine-availablity.firebaseapp.com",
    databaseURL: "https://vaccine-availablity-default-rtdb.firebaseio.com",
    projectId: "vaccine-availablity",
    storageBucket: "vaccine-availablity.appspot.com",
    messagingSenderId: "345545784448",
    appId: "1:345545784448:web:cf6e4b4e88632f69b73a65"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();