/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */
let roomPrice: number = 650000
let numberofNights: number = 4
let serviceCharge: number = 120000
let vipMember: boolean = true 
const roomSubtotal = roomPrice*numberofNights 
console.log("Room subtotal: ", roomSubtotal)
const discount = vipMember ? roomSubtotal*(12/100) : 0
console.log("Discount: ", discount)
const tax: number = roomSubtotal*(11/100)
console.log("Tax and service charge: ", tax, "and", 120000)
const grandTotal = roomSubtotal - discount + tax + 120000
console.log("Grand total: ", grandTotal)
const freeBreakfast = numberofNights>3 || vipMember ? "Eligible for free breakfast" : "Not eligible for free breakfast"

