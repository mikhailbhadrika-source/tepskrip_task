/**
 * A company has a simple data-processing engine used to analyze transaction records.
 */

const transactions: Transaction[] = [
    {
        id: "TRX001",
        customer: "Alya",
        amount: 850000,
        status: "paid"
    },
    {
        id: "TRX002",
        customer: "Budi",
        amount: 1250000,
        status: "pending"
    },
    {
        id: "TRX003",
        customer: "Citra",
        amount: 450000,
        status: "paid"
    },
    {
        id: "TRX004",
        customer: "Dimas",
        amount: 2100000,
        status: "paid"
    },
    {
        id: "TRX005",
        customer: "Eka",
        amount: 780000,
        status: "cancelled"
    }
];

/** TASKS:
 * - Extract customer's name only in array
 * - Determine Transaction Category with rules below:
 *   - ≥ Rp2,000,000 → HIGH VALUE
 *   - ≥ Rp1,000,000 → MEDIUM VALUE
 *   - < Rp1,000,000 → LOW VALUE
 * - Calculate platform fee:
 *   - Paid transactions → 2%
 *   - Pending transactions → 1%
 *   - Cancelled transactions → 0%
 */



type Transaction = {
    id: string;
    customer: string;
    amount: number;
    status: "paid" | "pending" | "cancelled";
};

type TransactionCategory = "HIGH VALUE" | "MEDIUM VALUE" | "LOW VALUE";

// 1. Extract customer names
function extractCustomer(transaction: Transaction): string {
    return transaction.customer;
}

// 2. Determine transaction category
function determineCategory(transaction: Transaction): TransactionCategory {
    if (transaction.amount >= 2000000) {
        return "HIGH VALUE";
    } else if (transaction.amount >= 1000000) {
        return "MEDIUM VALUE";
    } else {
        return "LOW VALUE";
    }
}

// 3. Calculate platform fee
function calculatePlatformFee(transaction: Transaction): number {
    if (transaction.status === "paid") {
        return transaction.amount * 0.02;
    } else if (transaction.status === "pending") {
        return transaction.amount * 0.01;
    } else {
        return 0;
    }
}

// 4. Process transactions using callback
function processTransactions<T>(
    transactions: Transaction[],
    callback: (transaction: Transaction) => T
): T[] {
    const results: T[] = [];

    for (const transaction of transactions) {
        results.push(callback(transaction));
    }

    return results;
}

// Execute callbacks
const customerNames = processTransactions(transactions, extractCustomer);

const transactionCategories = processTransactions(
    transactions,
    determineCategory
);

const platformFees = processTransactions(
    transactions,
    calculatePlatformFee
);

// Print results
console.log("Customer names:", customerNames);
console.log("Transaction categories:", transactionCategories);
console.log("Platform fees:", platformFees);
