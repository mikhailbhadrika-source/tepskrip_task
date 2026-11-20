/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(order => order.status === "completed");

console.log("Completed Orders:", completedOrders);

const orderTotals = completedOrders.map(order => ({
    ...order,
    total: order.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0)
}));

console.log("Order Totals:", orderTotals);

const highestSpender = orderTotals.reduce((highest, order) => {
    return order.total > highest.total ? order : highest;
});

console.log("Customer Who Spent the Most:", highestSpender.customer);

const totalRevenue = orderTotals.reduce((total, order) => {
    return total + order.total;
}, 0);

console.log("Total Revenue:", totalRevenue);

const purchasedProducts = [
    ...new Set(
        completedOrders.flatMap(order =>
            order.items.map(item => item.product)
        )
    )
];

console.log("Purchased Products:", purchasedProducts);