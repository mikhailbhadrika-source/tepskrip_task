import { domainToASCII } from "node:url";

/**
 * A company pays employees based on their monthly salary and overtime hours.
 * Employee Information:
 * | Information    | Value   |
 * | -------------- | ------- |
 * | Employee Name  | Dimas   |
 * | Basic Salary   | 5000000 |
 * | Overtime Hours | 12      |
 * | Overtime Rate  | 50000   |
 *
 * 
 * The company has the following policy:
 * Employees who work more than 10 overtime hours receive an additional Rp300,000 performance bonus.
 * Otherwise, no bonus is given.
 * You need to calculatea and display:
 * - Overtime pay
 * - Bonus
 * - Final salary
 */
type employeeSalary = {
    employeeName: string;
    basicSalary: number;
    overtimeHours: number;
    overtimeRate: number;
}
const employeeName = "Dimas"
const basicSalary = 5000000
const overtimeHours = 12
const overtimeRate = 50000
if (overtimeHours > 10) {
    console.log("Overtime Pay: Rp", overtimeHours*overtimeRate+300000);
    console.log("Bonus: Rp", 300000)
    console.log("Final Salary: Rp", basicSalary+(overtimeHours*overtimeRate)+300000);
} else {
    console.log("Overtime Pay: Rp", overtimeHours*overtimeRate);
    console.log("Bonus: No Bonus")
    console.log("Final Salary: Rp", basicSalary+(overtimeHours*overtimeRate));
    }