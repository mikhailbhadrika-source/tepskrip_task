/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */
let rate: number = 8000
let playingMinutes: number = 35 + 7*60
console.log("Total minutes played: ", playingMinutes)
let hourCounter = 0; hourCounter += 60
const remainingMinutes = playingMinutes - hourCounter
console.log("Remaining minutes after full hours: ", remainingMinutes)
console.log("Total billed hours: ", hourCounter)
const totalPayment: number = rate*hourCounter
const discount = hourCounter>5 ? totalPayment*(15/100) : 0
const finalPayment: number = totalPayment - discount
console.log("Final payment: ", finalPayment)

