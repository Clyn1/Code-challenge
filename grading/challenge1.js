function studentGradeGenerator() {
  // Prompt the user to enter student marks
  const studentMarks = prompt("Please enter student marks (between 0 and 100):");
  
  // Validate the input
  if (studentMarks >= 0 && studentMarks <= 100) {
    // Determine the grade based on the marks
    let grade;
    if (studentMarks >= 80) {
      grade = "A";
    } else if (studentMarks >= 60) {
      grade = "B";
    } else if (studentMarks >= 50) {
      grade = "C";
    } else if (studentMarks >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
    
    // Display the grade
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "The student's grade is: " + grade;
  } else {
    // Display an error message if the input is invalid
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Invalid input! Please enter a number between 0 and 100.";
  }
}