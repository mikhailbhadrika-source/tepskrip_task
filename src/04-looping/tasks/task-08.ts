/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

let presentCount = 0;
let absentCount = 0;
let absentStudents: string[] = [];

for (const { name, present } of attendances) {
    if (present) {
        presentCount++;
    } else {
        absentCount++;
        absentStudents.push(name);
    }
}

const attendancePercentage = attendances.length === 0
    ? 0
    : (presentCount / attendances.length) * 100;

console.log("===== ATTENDANCE REPORT =====");
console.log(`Present Students: ${presentCount}`);
console.log(`Absent Students: ${absentCount}`);
console.log(`Absent Student Names: ${absentStudents.join(", ")}`);
console.log(`Attendance Percentage: ${attendancePercentage.toFixed(2)}%`);
