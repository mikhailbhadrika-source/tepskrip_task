/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */


type Students = {
    name: string;
    score: number;
    attendance: number;
};

type PASS_FAIL = "YES" | "NO";

type ACADEMIC_PERFORMANCE =
    | "Excellent"
    | "Good"
    | "Needs Improvement";

type ATTENDANCE_STATUS =
    | "Satisfactory"
    | "Unsatisfactory";

type RECOMMENDATION =
    | "Excellent"
    | "Good"
    | "Improve Attendance"
    | "Improve Academic Performance";

type StudentReport = Students & {
    pass: PASS_FAIL;
    academicPerformance: ACADEMIC_PERFORMANCE;
    attendanceStatus: ATTENDANCE_STATUS;
    recommendation: RECOMMENDATION;
};

const students: Students[] = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function passOrFail(student: Students): PASS_FAIL {
    return student.score >= 75 && student.attendance >= 90
        ? "YES"
        : "NO";
}
function academicPerformance(student: Students): ACADEMIC_PERFORMANCE {
    if (student.score >= 90) {
        return "Excellent";
    } else if (student.score >= 75) {
        return "Good";
    } else {
        return "Needs Improvement";
    }
}

function attendanceStatus(student: Students): ATTENDANCE_STATUS {
    return student.attendance >= 90
        ? "Satisfactory"
        : "Unsatisfactory";
}

function finalRecommendation(student: Students): RECOMMENDATION {
    if (student.score >= 90 && student.attendance >= 90) {
        return "Excellent";
    } else if (student.score >= 75 && student.attendance >= 90) {
        return "Good";
    } else if (student.score >= 75 && student.attendance < 90) {
        return "Improve Attendance";
    } else {
        return "Improve Academic Performance";
    }
}

function processStudents(
    students: Students[],
    callback: (student: Students) => void
): void {
    for (const student of students) {
        callback(student);
    }
}

processStudents(students, (student) => {
    const report: StudentReport = {
        ...student,
        pass: passOrFail(student),
        academicPerformance: academicPerformance(student),
        attendanceStatus: attendanceStatus(student),
        recommendation: finalRecommendation(student)
    };

    console.log("---------------------------");
    console.log("Name:", report.name);
    console.log("Score:", report.score);
    console.log("Attendance:", report.attendance + "%");
    console.log("Pass:", report.pass);
    console.log("Academic Performance:", report.academicPerformance);
    console.log("Attendance Status:", report.attendanceStatus);
    console.log("Recommendation:", report.recommendation);
});
