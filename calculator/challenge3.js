function netSalaryCalculator() {
    // Prompt the user to enter basic salary and benefits
    const basicSalary = prompt("Please enter basic salary:");
    const benefits = prompt("Please enter benefits:");
    
    // Validate the inputs
    if (basicSalary >= 0 && benefits >= 0) {
      // Calculate the payee (i.e. Tax)
      const tax = calculateTax(basicSalary + benefits);
      
      // Calculate NHIF and NSSF deductions
      const nhifDeduction = calculateNHIFDeduction(basicSalary);
      const nssfDeduction = calculateNSSFDeduction(benefits);
      
      // Calculate gross salary and net salary
      const grossSalary = basicSalary + benefits;
      const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
      
      // Display the results
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = "Gross salary: " + grossSalary + "<br>" +
                            "NHIF deduction: " + nhifDeduction + "<br>" +
                            "NSSF deduction: " + nssfDeduction + "<br>" +
                            "Tax: " + tax + "<br>" +
                            "Net salary: " + netSalary;
    } else {
      // Display an error message if the inputs are invalid
      const outputDiv = document.getElementById("output");
      outputDiv.innerHTML = "Invalid inputs! Please enter non-negative numbers.";
    }
  }
  
  // function to calculate tax based on KRA tax rates
  function calculateTax(salary) {}
  
  // function to calculate NHIF deduction based on NHIF rates
  function calculateNHIFDeduction(salary) {}
  
  // function to calculate NSSF deduction based on NSSF rates
  function calculateNSSFDeduction(salary) {}
    