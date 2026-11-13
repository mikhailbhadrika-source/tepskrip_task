/**
 * The homeroom teacher receives attendance data for one class at following array.
 * 
 * Using a loop:
 * - Count present students.
 * - Count absent students.
 * - Display the names of absent students.
 * - Calculate the attendance percentage.
 */

const attendances = [
  { name: "Alya", present: true },
  { name: "Budi", present: true },
  { name: "Citra", present: false },
  { name: "Dimas", present: true },
  { name: "Eka", present: false },
  { name: "Fajar", present: true },
  { name: "Gita", present: true },
  { name: "Hana", present: false }
];

let presentStudents = 0;
let absentStudents = 0;
let absentNames: string[] = [];
let totalStudents = 0;

for (const { name, present } of attendances) {
    totalStudents++;

    if (present === true) {
        presentStudents++;
    } else {
        absentStudents++;
        absentNames.push(name);
    }
}

const attendancePercentage = (presentStudents / totalStudents) * 100;

console.log("Present students:", presentStudents);
console.log("Absent students:", absentStudents);
console.log("Absent student names:", absentNames);
console.log("Attendance percentage:", attendancePercentage + "%");