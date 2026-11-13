/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function totalEnrollments (enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): number {
    let total = 0
    for (const {student} of enrollments) {
        total ++
    }
    return total
}

function completedEnrollments (enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): number {
    let total = 0
    for (const {completed} of enrollments) {
        completed === true
        ? total ++ 
        : total
    }
    return total
}

function incompleteEnrollments (enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): number {
    let total = 0
    for (const {completed} of enrollments) {
        completed === false
        ? total ++ 
        : total
    }
    return total
}

function enrollmentPercentage (enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): number {
    let enrolled = 0
    let unenrolled = 0
    for (const {completed} of enrollments) {
        completed === true 
        ? enrolled ++ 
        : unenrolled ++
    }
    return enrolled/(enrolled+unenrolled)*100
}

function findHighestScore(enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): number {
      let highest = enrollments[0].score;
    for (const {score} of enrollments) {
        if (score > highest) {
            highest = score;
        }
} return highest }

function findLowestScore(enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): number {
      let lowest = enrollments[0].score;
    for (const {score} of enrollments) {
        if (score < lowest) {
            lowest = score;
        }
} return lowest }

function calculateAverageScore(enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): number {
  let total = 0;
  let numberOfValues = 0;
  for (const {score} of enrollments) {
    total += score;
  };
  for (const {score} of enrollments) {
    numberOfValues ++
  }
  return total / numberOfValues
}

function passedStudents(enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): string[] {
     return enrollments
        .filter(enrollments => enrollments.score <= 75)
        .map(enrollments => enrollments.student);
}

function countStudentsByCourse(enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): string {
  let TypeScript = 0;
  let Database = 0;
  let Backend = 0;
  for (const {course} of enrollments) {
    if (course === "TypeScript") {
      TypeScript ++
    } else if (course === "Database") {
      Database ++
    } else {
      Backend ++
    }
  }
  return `TypeScript: ${TypeScript}
  Database: ${Database}
  Backend: ${Backend}`
}

function averageCourseScore (enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): string {
    let totTS = 0;
    let numTS = 0;
    let totDB = 0;
    let numDB = 0;
    let numBE = 0;
    let totBE = 0;
    for(const {course, score} of enrollments) {
        if(course === "TypeScript") {
            totTS += score;
            numTS ++
        } else if(course === "Database") {
            totDB += score;
            numDB ++
        } else {
            totBE += score;
            numBE ++
        }
    } 
    const avgTS = totTS / numTS;
    const avgDB = totDB / numDB;
    const avgBE = totBE / numBE;
        return `
        Average score for TypeScript: ${avgTS}
        Average score for Database: ${avgDB}
        Average score for Backend: ${avgBE}`
}

function calculateTotalDuration(enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): number {
  let total = 0;
  for (const {duration} of enrollments) {
    total += duration;
  };
  return total
}

function calculateAverageDuration(enrollments: {student: string, course: string, completed: boolean, score: number, duration: number}[]): number {
  let total = 0;
  let numberOfValues = 0;
  for (const {duration} of enrollments) {
    total += duration;
  };
  for (const {duration} of enrollments) {
    numberOfValues ++
  }
  return total / numberOfValues
}

function printEnrollmentReport(enrollments: {
    student: string,
    course: string,
    completed: boolean,
    score: number,
    duration: number
}[]): void {

    console.log("========== ENROLLMENT REPORT ==========");

    console.log(`Total enrollments: ${totalEnrollments(enrollments)}`);
    console.log(`Completed enrollments: ${completedEnrollments(enrollments)}`);
    console.log(`Incomplete enrollments: ${incompleteEnrollments(enrollments)}`);
    console.log(`Completion percentage: ${enrollmentPercentage(enrollments).toFixed(2)}%`);

    console.log(`Highest score: ${findHighestScore(enrollments)}`);
    console.log(`Lowest score: ${findLowestScore(enrollments)}`);
    console.log(`Average score: ${calculateAverageScore(enrollments).toFixed(2)}`);

    console.log(`Students who passed: ${passedStudents(enrollments).join(", ")}`);
}

function printCourseReport(enrollments: {
    student: string,
    course: string,
    completed: boolean,
    score: number,
    duration: number
}[]): void {

    console.log("========== COURSE REPORT ==========");

    console.log(countStudentsByCourse(enrollments));

    console.log(averageCourseScore(enrollments));

    console.log(`Total learning duration: ${calculateTotalDuration(enrollments)}`);
    console.log(`Average learning duration: ${calculateAverageDuration(enrollments).toFixed(2)}`);
}

printEnrollmentReport(enrollments)
printCourseReport(enrollments)