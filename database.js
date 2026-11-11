
import { db } from "./firebase.js";

import {
    doc,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

/* ===========================================================
   EMPLOYEES
=========================================================== */

// LOAD EMPLOYEES
window.loadEmployees = async function () {
    try {
        const snap = await getDoc(
            doc(db, "master", "employees")
        );

        // Dokumen belum tersedia
        if (!snap.exists()) return [];

        const data = snap.data();

        // Validasi struktur data
        if (!Array.isArray(data.employees)) {
            throw new Error(
                "Format data karyawan di Firestore tidak valid."
            );
        }

        return data.employees;

    } catch (err) {
        console.error("Gagal memuat data karyawan:", err);
        throw err;
    }
};


// SAVE EMPLOYEES
window.saveEmployees = async function (employees) {
    try {
        if (!Array.isArray(employees)) {
            throw new Error(
                "Data karyawan harus berbentuk array."
            );
        }

        await setDoc(
            doc(db, "master", "employees"),
            {
                employees,
                updatedAt: Date.now()
            }
        );

        console.log("Data karyawan berhasil disimpan.");

        return true;

    } catch (err) {
        console.error("Gagal menyimpan data karyawan:", err);
        throw err;
    }
};


/* ===========================================================
   ATTENDANCE
=========================================================== */

// LOAD ATTENDANCE
window.loadAttendanceData = async function (key) {
    try {
        const snap = await getDoc(
            doc(db, "attendance", key)
        );

        if (!snap.exists()) return {};

        const data = snap.data();

        if (
            !data.attendance ||
            typeof data.attendance !== "object" ||
            Array.isArray(data.attendance)
        ) {
            throw new Error(
                "Format data absensi tidak valid: " + key
            );
        }

        return data.attendance;

    } catch (err) {
        console.error("Gagal memuat data absensi:", err);
        throw err;
    }
};


// SAVE ATTENDANCE
window.saveAttendanceData = async function (key, attendance) {
    try {
        if (
            !attendance ||
            typeof attendance !== "object" ||
            Array.isArray(attendance)
        ) {
            throw new Error(
                "Data absensi harus berbentuk object."
            );
        }

        await setDoc(
            doc(db, "attendance", key),
            {
                attendance,
                updatedAt: Date.now()
            }
        );

        console.log("Data absensi berhasil disimpan:", key);

        return true;

    } catch (err) {
        console.error("Gagal menyimpan data absensi:", err);
        throw err;
    }
};


/* ===========================================================
   PAYROLL
=========================================================== */

// LOAD PAYROLL
window.loadPayroll = async function (key) {
    try {
        const snap = await getDoc(
            doc(db, "payroll", key)
        );

        if (!snap.exists()) return {};

        const data = snap.data();

        if (
            !data.payroll ||
            typeof data.payroll !== "object" ||
            Array.isArray(data.payroll)
        ) {
            throw new Error(
                "Format data payroll tidak valid: " + key
            );
        }

        return data.payroll;

    } catch (err) {
        console.error("Gagal memuat data payroll:", err);
        throw err;
    }
};


// SAVE PAYROLL
window.savePayroll = async function (key, payroll) {
    try {
        if (
            !payroll ||
            typeof payroll !== "object" ||
            Array.isArray(payroll)
        ) {
            throw new Error(
                "Data payroll harus berbentuk object."
            );
        }

        await setDoc(
            doc(db, "payroll", key),
            {
                payroll,
                updatedAt: Date.now()
            }
        );

        console.log("Data payroll berhasil disimpan:", key);

        return true;

    } catch (err) {
        console.error("Gagal menyimpan data payroll:", err);
        throw err;
    }
};


/* ===========================================================
   ADJUSTMENTS (TITIPAN POTONGAN)
=========================================================== */

// LOAD ADJUSTMENTS
window.loadAdjustments = async function () {
    try {
        const snap = await getDoc(
            doc(db, "master", "adjustments")
        );

        if (!snap.exists()) return [];

        const data = snap.data();

        if (!Array.isArray(data.items)) {
            throw new Error(
                "Format data titipan potongan tidak valid."
            );
        }

        return data.items;

    } catch (err) {
        console.error("Gagal memuat data titipan:", err);
        throw err;
    }
};


// SAVE ADJUSTMENTS
window.saveAdjustments = async function (items) {
    try {
        if (!Array.isArray(items)) {
            throw new Error(
                "Data titipan harus berbentuk array."
            );
        }

        await setDoc(
            doc(db, "master", "adjustments"),
            {
                items,
                updatedAt: Date.now()
            }
        );

        console.log("Data titipan berhasil disimpan.");

        return true;

    } catch (err) {
        console.error("Gagal menyimpan data titipan:", err);
        throw err;
    }
};


console.log("DATABASE CONNECTED");
