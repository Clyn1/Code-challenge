// Function to calculate PAYE (Tax) based on the provided KRA Tax Rates
function calculatePAYE(grossSalary) {
    let tax = 0;
    if (grossSalary <= 24000) {
        tax = 0;
    } else if (grossSalary <= 32333) {
        tax = (grossSalary - 24000) * 0.1;
    } else if (grossSalary <= 40467) {
        tax = 832 + (grossSalary - 32333) * 0.15;
    } else if (grossSalary <= 48600) {
        tax = 2087 + (grossSalary - 40467) * 0.2;
    } else if (grossSalary <= 56733) {
        tax = 3720 + (grossSalary - 48600) * 0.25;
    } else {
        tax = 5775 + (grossSalary - 56733) * 0.3;
    }
    return tax;
}

// Function to calculate NHIF Deductions based on the provided NHIF rates
function calculateNHIF(grossSalary) {
    let nhif = 0;
    if (grossSalary < 6000) {
        nhif = 150;
    } else if (grossSalary <= 8000) {
        nhif = 300;
    } else if (grossSalary <= 12000) {
        nhif = 400;
    } else if (grossSalary <= 15000) {
        nhif = 500;
    } else if (grossSalary <= 20000) {
        nhif = 600;
    } else if (grossSalary <= 25000) {
        nhif = 750;
    } else if (grossSalary <= 30000) {
        nhif = 850;
    } else if (grossSalary <= 35000) {
        nhif = 900;
    } else if (grossSalary <= 40000) {
        nhif = 950;
    } else if (grossSalary <= 45000) {
        nhif = 1000;
    } else if (grossSalary <= 50000) {
        nhif = 1100;
    } else if (grossSalary <= 60000) {
        nhif = 1200;
    } else if (grossSalary <= 70000) {
        nhif = 1300;
    } else if (grossSalary <= 80000) {
        nhif = 1400;
    } else if (grossSalary <= 90000) {
        nhif = 1500;
    } else if (grossSalary <= 100000) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }
    return nhif;
}

// Function to calculate NSSF Deductions based on the provided NSSF rates
function calculateNSSF(grossSalary) {
    const nssfRate = 0.06; // NSSF rate is fixed at 6% of gross salary
    return grossSalary * nssfRate;
}

// Main function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary,
        payee: payee,
        nhifDeductions: nhifDeductions,
        nssfDeductions: nssfDeductions,
        netSalary: netSalary
    };
}

// Prompting the user for input values
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));

// Validating the inputs
if (isNaN(basicSalary) || isNaN(benefits)) {
    console.log("Please enter valid numbers for basic salary and benefits.");
} else {
    // Calculating net salary and displaying the results
    const salaryDetails = calculateNetSalary(basicSalary, benefits);

    console.log("Gross Salary:", salaryDetails.grossSalary);
    console.log("PAYE (Tax):", salaryDetails.payee);
    console.log("NHIF Deductions:", salaryDetails.nhifDeductions);
    console.log("NSSF Deductions:", salaryDetails.nssfDeductions);
    console.log("Net Salary:", salaryDetails.netSalary);
}