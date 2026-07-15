import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "...",

    authDomain: "...",

    projectId: "...",

    storageBucket: "...",

    messagingSenderId: "...",

    appId: "...",

    measurementId: "..."

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.db = db;

export { db };