/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */
let item1Price: number = 850000
let item2Price: number = 275000
let item3Price: number = 120000
let item1Qty: number = 1
let item2Qty: number = 2
let item3Qty: number = 1
let premiumYesOrNo: boolean = false
const subtotal: number = item1Price*item1Qty + item2Price*item2Qty + item3Price*item3Qty
console.log("Subtotal: ", subtotal)
const discount: number = subtotal>1000000 ? subtotal/10 : 0
console.log("Final payment: ", subtotal - discount)
const shippingFee = premiumYesOrNo ? "Paid shipping fee" : "Free shipping fee"
