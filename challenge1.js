// Function to calculate the grade
const calculateGrade = (marks) => {
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Function to get marks from user input
const getMarks = () => {
    return parseFloat(document.getElementById("marksInput").value);
}

// Function to display the grade
const displayGrade = (grade) => {
    document.getElementById("gradeOutput").textContent = `The student's grade is: ${grade}`;
}

// Function to handle the button click event
const handleButtonClick = () => {
    const marks = getMarks();
    const grade = calculateGrade(marks);
    displayGrade(grade);
}

// Event listener for button click
document.getElementById("calculateButton").addEventListener("click", handleButtonClick);
