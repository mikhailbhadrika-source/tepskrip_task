/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
125000,
350000,
78000,
910000,
150000,
420000,
275000,
99000,
640000,
18000
];

let totalRevenue = 0;
let highestTransaction = sales[0];
let lowestTransaction = sales[0];
let transactionsAbove300k = 0;
let numberOfTransactions = 0;

for (const sale of sales) {
    totalRevenue += sale;

    if (sale > highestTransaction) {
        highestTransaction = sale;
    }

    if (sale < lowestTransaction) {
        lowestTransaction = sale;
    }

    if (sale >= 300000) {
        transactionsAbove300k++;
    }

    numberOfTransactions++;
}

const averageTransaction = totalRevenue / numberOfTransactions;

console.log("Total sales revenue:", totalRevenue);
console.log("Highest transaction:", highestTransaction);
console.log("Lowest transaction:", lowestTransaction);
console.log("Transactions >= Rp300,000:", transactionsAbove300k);
console.log("Average transaction:", averageTransaction);
