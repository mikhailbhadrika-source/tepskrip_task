/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

import { count } from "node:console";

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: {name: string, major: string, active: boolean}[]): number {
  let numberofActiveStudents = 0;
  for (const {active} of students) {
    active === true 
    ? numberofActiveStudents ++
    : numberofActiveStudents + 0
  }
  return numberofActiveStudents
}

function countInactiveStudents(students: {name: string, major: string, active: boolean}[]): number {
  let numberofInactiveStudents = 0;
  for (const {active} of students) {
    active === false 
    ? numberofInactiveStudents ++
    : numberofInactiveStudents + 0
  }
  return numberofInactiveStudents
}

function countStudentsByMajor(students: {name: string, major: string, active: boolean}[]): string {
  let numberOfSEStudents = 0;
  let numberOfNWStudents = 0;
  let numberOfMMStudents = 0;
  for (const {major} of students) {
    if (major === "Software Engineering") {
      numberOfSEStudents ++
    } else if (major === "Networking") {
      numberOfNWStudents ++
    } else {
      numberOfMMStudents ++
    }
  }
  return `Software Engineering: ${numberOfSEStudents}
  Networking: ${numberOfNWStudents}
  Multimedia: ${numberOfMMStudents}`
}

function printEnrollmentReport(students: {name: string, major: string, active: boolean}[]){
    let totalStudents = 0;
    for (const {name} of students) {
      totalStudents ++
    }
    return console.log (
      `Number of students: ${totalStudents}
      Number of active students: ${countActiveStudents(students)}
      Number of inactive students: ${countInactiveStudents(students)}
      Number of students in each major:
      ${countStudentsByMajor(students)}`)
}

printEnrollmentReport(students)