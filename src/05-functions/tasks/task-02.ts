/**
 * The HR department wants to display bonus notifications for employees.
 * Business Rules
 *  - Performance score ≥ 85 → Bonus Approved
 *  - Otherwise → Bonus Not Approved
 * Employee data:
 * | Employee       | Score |
 * | ---------------| ----- |
 * | John Cena      |    92 |
 * | Undertaker     |    76 |
 * | Rey Mysterio   |    88 |
 * 
 * Instead of repeating the decision logic, the HR department wants a reusable function.
 * The function should display the notification directly and does not return any value.
 * 
 * Student Tasks:
 * 1. Create a function named showBonusStatus.
 * 2. The function receives:
 *  - employee name
 *  - performance score
 * 3. Display the bonus result inside the function.
 * 4. Call the function for every employee.
 */

let employee1: string = "John Cena" 
let employee2: string = "Undertaker"
let employee3: string = "Rey Mysterio"
function showBonusStatus(employeeName : string, performanceScore : number): void {
    console.log(employeeName, performanceScore>=85? `Bonus Approved` : `Bonus Not Approved`)
}
showBonusStatus("John Cena", 92)
showBonusStatus("Undertaker", 76)
showBonusStatus("Rey Mysterio", 88)