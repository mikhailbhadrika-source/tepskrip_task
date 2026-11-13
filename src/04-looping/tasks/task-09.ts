/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let numberOfAStudents = 0;
let numberOfBStudents = 0;
let numberOfCStudents = 0;
let numberOfDStudents = 0;
let highestScore = students[0].score;
let lowestScore = students[0].score;
let numberOfStudents = 0;
let totalScore = 0;

for (const {score} of students) {
    if (score >=90) {
        numberOfAStudents ++
    } else if (score >=80) {
        numberOfBStudents ++
    } else if (score >= 70) {
        numberOfCStudents ++
    } else {
        numberOfDStudents ++
    }
}

for (const {score} of students) {
    numberOfStudents ++;
    totalScore =+ score
}
const averageScore = totalScore/numberOfStudents

for (const {score} of students) {
    if (score > highestScore) {
        highestScore = score
    }
}

for (const {score} of students) {
    if (score < lowestScore) {
        lowestScore = score
    }
}