/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countTotalStudents(submissions: {student: string, submitted: boolean, score: number}[]): number {
    let totalStudents = 0;
    for (const {student} of submissions) {
      totalStudents ++
} return totalStudents
}

function countSubmittedAssignments(submissions: {student: string, submitted: boolean, score: number}[]): number {
    let numberOfSubmittedAssignments = 0;
    for (const {submitted} of submissions) {
      submitted === true
      ? numberOfSubmittedAssignments ++
      : numberOfSubmittedAssignments
}
return numberOfSubmittedAssignments
}

function countMissingAssignments(submissions: {student: string, submitted: boolean, score: number}[]): number {
    let numberOfMissingAssignments = 0;
    for (const {submitted} of submissions) {
      submitted === false
      ? numberOfMissingAssignments ++
      : numberOfMissingAssignments
}
return numberOfMissingAssignments
    }

function passedStudents(submissions: {student: string, submitted: boolean, score: number}[]): string[] {
     return submissions
        .filter(submission => submission.score <= 75)
        .map(submission => submission.student);
}

function studentsRequiringRevision(submissions: {student: string, submitted: boolean, score: number}[]): string[] {
    return submissions
        .filter(submission => submission.score <= 75)
        .map(submission => submission.student);
}

function averageScore(submissions: {student: string, submitted: boolean, score: number}[]): number {
  let total = 0;
  let numberOfValues = 0;
  for (const {score} of submissions) {
    total += score;
    numberOfValues ++
  }
  return total / numberOfValues
}

function highestScore(submissions: {student: string, submitted: boolean, score: number}[]): number {
    let highest = submissions[0].score;
    for (const {score} of submissions) {
        if (score > highest) {
            highest = score;
        }
    }
    return highest
}

function printReport (submissions: {student: string, submitted: boolean, score: number}[]): void {
    console.log (`
        Total students: ${countTotalStudents(submissions)}
        Submitted assignments: ${countSubmittedAssignments(submissions)}
        Missing assignments: ${countMissingAssignments(submissions)}
        Passed students: ${passedStudents(submissions)}
        Students requiring revision: ${studentsRequiringRevision(submissions)}
        Average score: ${averageScore(submissions)}
        Highest score: ${highestScore(submissions)}`)
}

printReport(submissions)