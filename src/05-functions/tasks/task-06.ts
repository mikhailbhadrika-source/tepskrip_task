/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let total = sales[0];
  for (const number of sales) {
    total += number;
  }
  return total
}

function findHighestTransaction(sales: number[]): number {
  let highest = sales[0];
    for (const number of sales) {
        if (number > highest) {
            highest = number;
        }
    }
    return highest
}

function findLowestTransaction(sales: number[]): number {
  let lowest = sales[0];
    for (const number of sales) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return lowest
}

function calculateAverageSale(sales: number[]): number {
  let total = sales[0];
  let numberOfValues = 0;
  for (const number of sales) {
    total += number;
  };
  for (const number of sales) {
    numberOfValues ++
  }
  return total / numberOfValues
}

function countLargeTransactions(sales: number[]): number {
  let numberOfHighestTransactions = 0
  for (const number of sales) {
    if (number > 500000) {
      numberOfHighestTransactions ++
    }
  }
  return numberOfHighestTransactions
}

console.log (`Total sales:` + calculateTotalSales(sales))
console.log (`Highest transaction:` + findHighestTransaction(sales))
console.log (`Lowest transaction:` + findLowestTransaction(sales))
console.log (`Average sales:` + calculateAverageSale(sales))
console.log (`Number of large transactions:` + countLargeTransactions(sales))