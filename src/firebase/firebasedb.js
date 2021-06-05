import firebase from 'firebase';

const firebaseConfig = {
    // apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
    // authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
    // storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
    // appId: process.env.VUE_APP_FIREBASE_APPID
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