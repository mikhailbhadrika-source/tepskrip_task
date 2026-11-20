/**
 * You are developing a simple exam analytics system.
 * Tasks: 
 * 1. Calculate student score (each correct answer get 20 points)
 * 2. Get students that pass (> 70)
 * 3. Find student who reach highest score 
 * 4. Calculate class's average score
 */

const students = [
    {
        id: 1,
        name: "Andi",
        answers: ["A", "B", "C", "A", "B"],
    },
    {
        id: 2,
        name: "Budi",
        answers: ["A", "C", "C", "A", "D"],
    },
    {
        id: 3,
        name: "Citra",
        answers: ["B", "B", "C", "A", "B"],
    },
];

const correctAnswers = ["A", "B", "C", "A", "B"];

const correctAnswers = ["A", "B", "C", "A", "B"];

const studentScores = students.map(student => {
    const correctCount = student.answers.filter(
        (answer, index) => answer === correctAnswers[index]
    ).length;

    return {
        ...student,
        score: correctCount * 20
    };
});

console.log("Student Scores:", studentScores);

const passedStudents = studentScores.filter(student => student.score > 70);

console.log("Passed Students:", passedStudents);

const highestScore = studentScores.reduce((highest, student) => {
    return student.score > highest.score ? student : highest;
});

console.log("Highest Score:", highestScore);

const averageScore = studentScores.reduce((total, student) => {
    return total + student.score;
}, 0) / studentScores.length;

console.log("Average Score:", averageScore);