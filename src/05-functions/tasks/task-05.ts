/**
 * A university wants to analyze the scores of students enrolled in Backend Development.
 * The dean requests several statistics.
 * Instead of writing one long program, the developer decides to divide the work into reusable functions.
 * Required calculations:
 * Highest score
 * Lowest score
 * Average score
 * Number of students who passed (passing score = 75)
 * 
 * Finally, another function should display the complete report.
 * Student Tasks
 * 1. Create function to find highest value.
 * 2. Create function to find lowest value.
 * 3. Create function to find average value.
 * 4. Create function to return number of passing students.
 */

const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function findHighestScore(scores: number[]): number {
      let largest = scores[0];
    for (const number of scores) {
        if (number > largest) {
            largest = number;
        }
} return largest }

function findLowestScore(scores: number[]): number {
  let lowest = scores[0];
    for (const number of scores) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest
}

function calculateAverage(scores: number[]): number {
  let total = scores[0];
  let numberOfValues = 0;
  for (const number of scores) {
    total += number;
  };
  for (const number of scores) {
    numberOfValues ++
  }
  return total / numberOfValues
}

function countPassedStudents(scores: number[]): number {
  let passedStudents = 0
  for (const number of scores) {
    number <= 75
    ? passedStudents ++
    : passedStudents + 0 
  }
  return passedStudents
}

console.log (`Highest score:` + findHighestScore)
console.log (`Lowest score: ` + findLowestScore)
console.log (`Average score:` + calculateAverage)
console.log (` Number of passed students:` + countPassedStudents)