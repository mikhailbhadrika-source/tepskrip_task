/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Alya",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Budi",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Citra",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Dimas",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Eka",
        age: 14,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
    let totalPatients = 0;
    for (const {name} of patients) {
      totalPatients ++
} return totalPatients
}

function countAdmittedPatients(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
    let numberOfAdmittedPatients = 0;
    for (const {admitted} of patients) {
      admitted === true
      ? numberOfAdmittedPatients ++
      : numberOfAdmittedPatients
}
return numberOfAdmittedPatients
}

function countDischargedPatients(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
    let numberOfDischargedPatients = 0;
    for (const {admitted} of patients) {
      admitted === false
      ? numberOfDischargedPatients ++
      : numberOfDischargedPatients
}
return numberOfDischargedPatients
    }

function countPatientsByDepartment(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): string {
  let Cardiology = 0;
  let Orthopedics = 0;
  let Pediatrics = 0;
  for (const {department} of patients) {
    if (department === "Cardiology") {
      Cardiology ++
    } else if (department === "Orthopedics") {
      Orthopedics ++
    } else {
      Pediatrics ++
    }
  }
  return `Cardiology: ${Cardiology}
  Orthopedrics: ${Orthopedics}
  Pediatrics: ${Pediatrics}`
}

function findHighestBill(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
      let largest = patients[0].bill;
    for (const {bill} of patients) {
        if (bill > largest) {
            largest = bill;
        }
} return largest }

function findLowestBill(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
      let lowest = patients[0].bill;
    for (const {bill} of patients) {
        if (bill < lowest) {
            lowest = bill;
        }
} return lowest }

function calculateAverageBill(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
  let total = 0;
  let numberOfValues = 0;
  for (const {bill} of patients) {
    total += bill;
  };
  for (const {bill} of patients) {
    numberOfValues ++
  }
  return total / numberOfValues
}

function calculateTotalRevenue(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): number {
  let total = 0;
  for (const {bill} of patients) {
    total += bill;
  };
  return total
}

function patientsList(patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): string[] {
     return patients
        .map(patients => patients.name);
}


function printReport (patients: {id: string, name: string, age: number, department: string, admitted: boolean, bill: number}[]): void {
    console.log (`
        Total patients: ${countTotalPatients}
        Admitted patients: ${countAdmittedPatients}
        Discharged patients: ${countDischargedPatients}
        Number of patients in each department: 
        ${countPatientsByDepartment}
        Highest bill: ${findHighestBill}
        Lowest bill: ${findLowestBill}
        Average bill: ${calculateAverageBill}
        Total hospital revenue: ${calculateTotalRevenue}
        List of patients: ${patientsList}`)
}