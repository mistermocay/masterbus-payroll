import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import {
    getAuth,
    signInAnonymously,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";


const firebaseConfig = {

    apiKey: "AIzaSyCy5Cg24RpnfXRYnMIC8s_p4AgDGK0M55Y",

    authDomain: "master-bus-payroll.firebaseapp.com",

    projectId: "master-bus-payroll",

    storageBucket: "master-bus-payroll.firebasestorage.app",

    messagingSenderId: "1093538073835",

    appId: "1:1093538073835:web:1e8f8f3001a15e75e042ae",

    measurementId: "G-Q34GP1R77T"

};


const app = initializeApp(firebaseConfig);


// =============================
// FIRESTORE
// =============================

const db = getFirestore(app);


// =============================
// FIREBASE AUTHENTICATION
// =============================

const auth = getAuth(app);


// Tunggu Firebase menentukan apakah
// browser sudah memiliki sesi Anonymous sebelumnya.
function waitForAuthState(){

    return new Promise((resolve, reject)=>{

        const unsubscribe = onAuthStateChanged(

            auth,

            user => {

                unsubscribe();

                resolve(user);

            },

            error => {

                unsubscribe();

                reject(error);

            }

        );

    });

}


// Pastikan user sudah terautentikasi
const currentUser = await waitForAuthState();

if(!currentUser){

    await signInAnonymously(auth);

}


console.log(
    "FIREBASE AUTH CONNECTED:",
    auth.currentUser?.uid
);


// =============================
// GLOBAL
// =============================

window.db = db;

window.auth = auth;


// =============================
// EXPORT
// =============================

export {
    db,
    auth
};