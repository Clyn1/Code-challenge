function calculateGrade(marks) {
  // Validate input (0-100)
  if (marks < 0 || marks > 100) {
    return "Invalid marks! Please enter a value between 0 and 100.";
  }

  // Determine grade based on marks
  if (marks > 79) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else if (marks >= 40) {
    return "D";
  } else {
    return "E";
  }
}

// Prompt user for input
const marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

// Calculate and display grade
const grade = calculateGrade(marks);
console.log(`Student's grade for ${marks} marks is: ${grade}`);
