/**
 * A lecturer wants to summarize examination results for 20 students.
 * The examination scores are stored in the following array:
 * ---------------------------------------
 * const scores = [
 * 82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76
 * ]
 * ---------------------------------------
 * 
 * Business Rules
 * - Passing score is 75.
 * - Count how many students passed.
 * - Count how many students failed.
 * - Calculate the total score.
 * - Calculate the average score.
 * 
 * Tasks: 
 * 1. Iterate through every score using a loop.
 * 2. Use conditional statements to determine pass/fail.
 * 3. Calculate:
 * - Total score
 * - Average score
 * - Number of passing students
 * - Number of failing students
 */

let passingStudents: number = 0
let failingStudents: number = 0
const scores: number[] = [82, 75, 91, 64, 88, 73, 95, 80, 69, 77, 84, 92, 58, 79, 86, 71, 90, 67, 83, 76]
for (let i = 0; i <= scores.length; i++) {
    if (scores[i] >= 75) {
        passingStudents++
    }
        else {
            failingStudents++
        }
    }
let totScore: number = scores.reduce((total, num)=> total + num, 0)
let avgScore: number = totScore / scores.length
console.log(
    `Total score: ${totScore}
     Average score: ${avgScore}
     Number of passing students: ${passingStudents}
     Number of failing students: ${failingStudents}`
)