// Function to calculate PAYE (Tax) based on the provided KRA Tax Rates
function calculatePAYE(grossSalary) {
    // Tax brackets and rates (replace with actual KRA data)
    const taxBrackets = [
        { min: 0, max: 18154, rate: 0 },
        { min: 18155, max: 47004, rate: 0.1 },
        { min: 47005, max: 102000, rate: 0.25 },
        { min: 102001, max: Infinity, rate: 0.3 }
    ];

    // Calculate taxable income (gross salary minus personal relief)
    const personalRelief = 12298; // Replace with actual personal relief value
    const taxableIncome = grossSalary - personalRelief;

    // Calculate PAYE
    let payee = 0;
    for (const bracket of taxBrackets) {
        if (taxableIncome > bracket.min) {
            const taxableAmount = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min);
            payee += taxableAmount * bracket.rate;
        } else {
            break;
        }
    }

    return payee;
}

// Function to calculate NHIF Deductions based on the provided NHIF rates
function calculateNHIF(grossSalary) {
    // NHIF rates and income ceilings (replace with actual NHIF data)
    const NHIFRates = {
        below5000: 150,
        below8000: 300,
        above8000: (grossSalary * 0.015).toFixed(2) // Dynamic calculation based on income
    };

    // Find the applicable NHIF deduction
    let deduction = 0;
    if (grossSalary <= 5000) {
        deduction = NHIFRates.below5000;
    } else if (grossSalary <= 8000) {
        deduction = NHIFRates.below8000;
    } else {
        deduction = NHIFRates.above8000;
    }

    return parseFloat(deduction);
}

// Function to calculate NSSF Deductions based on the provided NSSF rates
function calculateNSSF(grossSalary) {
    // NSSF rates and income ceilings (replace with actual NSSF data)
    const NSSFRates = {
        min: 6000,
        max: 18000,
        employeeRate: 0.06,
        employerRate: 0.12
    };

    // Check if salary falls within NSSF contribution range
    if (grossSalary < NSSFRates.min || grossSalary > NSSFRates.max) {
        return 0;
    }

    // Calculate employee contribution
    const employeeDeduction = grossSalary * NSSFRates.employeeRate;

    return employeeDeduction;
}

// Main function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    const payee = calculatePAYE(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const nssfDeductions = calculateNSSF(grossSalary);

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    return {
        grossSalary: grossSalary.toFixed(2), // Format to 2 decimal places
        payee: payee.toFixed(2),
        nhifDeductions: nhifDeductions.toFixed(2),
        nssfDeductions: nssfDeductions.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

// Example usage (assuming you have input elements)
const basicSalaryInput = document.getElementById("basic-salary");
const benefitsInput = document.getElementById("benefits");
const resultsElement = document.getElementById("salary-results");

const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", function() {
    const basicSalary = parseFloat(basicSalaryInput.value);
    const benefits = parseFloat(benefitsInput.value);
    
    const salaryDetails = calculateNetSalary(basicSalary, benefits);
    
    // Assuming resultsElement is a div where you want to display results
    resultsElement.innerHTML = `
        <p>Gross Salary: ${salaryDetails.grossSalary}</p>
        <p>PAYE: ${salaryDetails.payee}</p>
        <p>NHIF Deductions: ${salaryDetails.nhifDeductions}</p>
        <p>NSSF Deductions: ${salaryDetails.nssfDeductions}</p>
        <p>Net Salary: ${salaryDetails.netSalary}</p>
    `;
});
