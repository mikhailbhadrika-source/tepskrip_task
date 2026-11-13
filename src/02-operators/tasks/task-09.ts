//cimport { subscribe } from "diagnostics_channel"

/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility

 */

let item1Price: number = 850000
let item1Qty: number = 1

let item2Price: number = 275000
let item2Qty: number = 2

let item3Price: number = 420000
let item3Qty: number = 1

let premium: boolean = true

let subtotal: number =
    item1Price * item1Qty +
    item2Price * item2Qty +
    item3Price * item3Qty

const discount = premium ? subtotal / 10 : 0

const subtotalAfterDisc: number = subtotal - discount

const voucher: number = 100000

const subtotalBeforeTax: number = subtotalAfterDisc - voucher

const rewardPoints: number = Math.floor(subtotalBeforeTax / 50)

const vat: number = subtotalBeforeTax * (11 / 100)

const finalPayment: number = subtotalBeforeTax + vat

const shipping = premium || subtotalBeforeTax > 1500000
    ? "Free shipping"
    : "No free shipping"

console.log("Product subtotal:", subtotal)
console.log("Membership discount:", discount)
console.log("Voucher:", voucher)
console.log("VAT:", vat)
console.log("Final payment:", finalPayment)
console.log("Reward points:", rewardPoints)
console.log("Shipping:", shipping)

