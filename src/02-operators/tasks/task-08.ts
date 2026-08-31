import { captureRejections } from "node:stream";

/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */
const previousMeter: number = 25640
const currentMeter: number = 25892
const priceperKilowatthour: number = 1650
let energyConsumption: number = currentMeter - previousMeter
console.log("Total energy consumption:", energyConsumption)
let electricityBill: number = energyConsumption*priceperKilowatthour
console.log("Electricity bill:", electricityBill)
let solarPanel: boolean = true
const solarPanelCalc: number = solarPanel ? electricityBill*(1/5) : 0
let energySavingMode: boolean = false
const energySavingModeCalc: number = energySavingMode ? electricityBill*(1/20) : 0
let finalBill: number = electricityBill - solarPanelCalc - energySavingModeCalc
console.log("Finalbill:", finalBill)
if (solarPanel && energyConsumption<300 && energySavingMode) {
    console.log("Eligible")
} else {
    console.log("Not eligible")
}
