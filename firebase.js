// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCy5Cg24RpnfXRYnMIC8s_p4AgDGK0M55Y",
    authDomain: "master-bus-payroll.firebaseapp.com",
    projectId: "master-bus-payroll",
    storageBucket: "master-bus-payroll.firebasestorage.app",
    messagingSenderId: "1093538073835",
    appId: "1:1093538073835:web:1e8f8f3001a15e75e042ae",
    measurementId: "G-Q34GP1R77T"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore
const db = getFirestore(app);

// Supaya bisa dipakai file lain
export { db };
