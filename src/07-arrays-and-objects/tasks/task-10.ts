/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentResults = submissions.map(submission => {
    const correct = submission.answers.filter(answer => {
        const question = questions.find(q => q.id === answer.questionId);
        return question && answer.answer === question.correctAnswer;
    }).length;

    const wrong = questions.length - correct;
    const score = correct * 25;

    return {
        student: submission.student,
        correct,
        wrong,
        score
    };
});

console.log("Student Scores:", studentResults);

const categoryScores = questions.reduce((result, question) => {
    if (!result[question.category]) {
        result[question.category] = {
            totalScore: 0,
            totalAnswers: 0
        };
    }

    submissions.forEach(submission => {
        const answer = submission.answers.find(
            item => item.questionId === question.id
        );

        if (answer && answer.answer === question.correctAnswer) {
            result[question.category].totalScore += 25;
        }

        result[question.category].totalAnswers++;
    });

    return result;
}, {});

const categoryAverages = Object.entries(categoryScores).map(
    ([category, data]) => ({
        category,
        averageScore: Number(
            (data.totalScore / data.totalAnswers).toFixed(2)
        )
    })
);

console.log("Category Averages:", categoryAverages);

const scores = studentResults.map(student => student.score);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

const totalScore = scores.reduce((total, score) => total + score, 0);

const averageScore = totalScore / studentResults.length;

const passedStudents = studentResults.filter(
    student => student.score > 70
).length;

const failedStudents = studentResults.length - passedStudents;

const passRate = (passedStudents / studentResults.length) * 100;

const analytics = {
    totalStudents: studentResults.length,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore,
    lowestScore,
    passedStudents,
    failedStudents,
    passRate: Number(passRate.toFixed(2))
};

console.log("Final Exam Analytics:", analytics);