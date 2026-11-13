/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Registration = {
    studentId: string;
    fullName: string;
    gradeLevel: number;
    courseId: string;
    courseTitle: string;
    instructorName: string;
    totalLearningHours: number;
    registrationDate: string;
    paymentCompleted: boolean;
};

const registration1: Registration = {
    studentId: "ST001",
    fullName: "Andi Pratama",
    gradeLevel: 11,
    courseId: "CRS001",
    courseTitle: "JavaScript Fundamentals",
    instructorName: "Budi Santoso",
    totalLearningHours: 20,
    registrationDate: "2026-11-13",
    paymentCompleted: true
};

const registration2: Registration = {
    studentId: "ST002",
    fullName: "Nadia Putri",
    gradeLevel: 12,
    courseId: "CRS002",
    courseTitle: "Python Programming",
    instructorName: "Dewi Lestari",
    totalLearningHours: 30,
    registrationDate: "2026-11-13",
    paymentCompleted: true
};

const registration3: Registration = {
    studentId: "ST003",
    fullName: "Fajar Hidayat",
    gradeLevel: 10,
    courseId: "CRS003",
    courseTitle: "Web Development",
    instructorName: "Rizky Pratama",
    totalLearningHours: 25,
    registrationDate: "2026-11-13",
    paymentCompleted: false
};

console.log("Registration 1:", registration1);
console.log("Registration 2:", registration2);
console.log("Registration 3:", registration3);
