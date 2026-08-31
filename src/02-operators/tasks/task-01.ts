/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */


let nasgor: number = 18000
let drink: number = 5000
let nasgorQty: number = 3
let drinkQty: number = 2
const totalFoodPrice: number = nasgor*nasgorQty
console.log("Total food price: ", totalFoodPrice)
const totalDrinkPrice: number = drink*drinkQty
console.log("Total drink price: ", totalDrinkPrice)
const grandTotal: number = totalDrinkPrice+totalFoodPrice
console.log("Grand total: ", grandTotal)
console.log("Final payment: ", grandTotal-10000)


