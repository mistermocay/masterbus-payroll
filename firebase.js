import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";

import {
    getFirestore,
    collection,
    addDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

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

const db = getFirestore(app);

// TEST
window.testFirebase = async function () {

    await addDoc(collection(db, "employees"), {

        nama: "Test Firebase",
        bagian: "ADMIN",
        gaji: 4000000,
        waktu: new Date()

    });

    alert("Data berhasil dikirim ke Firebase!");

}
