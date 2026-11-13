/**
 * The homeroom teacher stores attendance information as follows.
 * The school wants to display an attendance report.
 * The report should include:
 * - Total Present
 * - Total Absent
 * - Names of absent students
 * The report is displayed directly on the console.
 * Student Tasks:
 * - Create a function named printAttendanceReport.
 * - The function receives the attendance array.
 * - Use looping and conditions.
 * - Display the report inside the function.
 * - The function should not return any value.
 */
const attendances = [
    { name: "Alya", present: true },
    { name: "Budi", present: false },
    { name: "Citra", present: true },
    { name: "Dimas", present: true },
    { name: "Eka", present: false }
];

function printAttendanceReport(students: {name: string, present: boolean}[]): void {
    let presentCount = 0;
    let absentCount = 0;
    const absentStudents: string[] = [];

    for (const {name, present} of students) {
        present === true
        ? presentCount++ 
        : (absentCount ++, absentStudents.push(name))
    }

    console.log("=== Student Attendance Report ===");
    console.log(`Present Students: ${presentCount}`);
    console.log(`Absent Students: ${absentCount}`);
    console.log("Absent Student Names:");

    if (absentStudents.length > 0) {
        absentStudents.forEach(name => console.log(`- ${name}`));
    } else {
        console.log("None");
    }
}

printAttendanceReport!(attendances)