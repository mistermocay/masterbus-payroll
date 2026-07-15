import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

/* ===========================================================
   EMPLOYEES
=========================================================== */

window.loadEmployees = async function () {
    try {
        const snap = await getDoc(
            doc(db, "master", "employees")
        );
        if (!snap.exists()) return [];
        return snap.data().employees || [];
    }
    
    catch (err) {
        console.error(err);
        return [];

    }

}


window.saveEmployees = async function (employees) {

    try {

        await setDoc(

            doc(db, "master", "employees"),

            {

                employees,

                updatedAt: Date.now()

            }

        );

    }

    catch (err) {

        console.error(err);

    }

}



/* ===========================================================
   ATTENDANCE
=========================================================== */


window.loadAttendanceData = async function (key) {

    try {

        const snap = await getDoc(

            doc(db, "attendance", key)

        );

        if (!snap.exists()) return {};

        return snap.data().attendance || {};

    }

    catch (err) {

        console.error(err);

        return {};

    }

}



window.saveAttendanceData = async function (key, attendance) {

    try {

        await setDoc(

            doc(db, "attendance", key),

            {

                attendance,

                updatedAt: Date.now()

            }

        );

    }

    catch (err) {

        console.error(err);

    }

}



/* ===========================================================
   PAYROLL
=========================================================== */

window.loadPayroll = async function (key) {

    try {

        const snap = await getDoc(

            doc(db, "payroll", key)

        );

        if (!snap.exists()) return {};

        return snap.data().payroll || {};

    }

    catch (err) {

        console.error(err);

        return {};

    }

}



window.savePayroll = async function (key, payroll) {

    try {

        await setDoc(

            doc(db, "payroll", key),

            {

                payroll,

                updatedAt: Date.now()

            }

        );

    }

    catch (err) {

        console.error(err);

    }

}


console.log("DATABASE CONNECTED");