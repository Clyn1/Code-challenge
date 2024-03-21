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

// Function to prompt the user for input
const promptForMarks = () => {
    let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

    // Check if the input is valid
    while (isNaN(marks) || marks < 0 || marks > 100) {
        marks = parseFloat(prompt("Invalid input! Enter student marks (between 0 and 100):"));
    }

    return marks;
}

// Main program
const main = () => {
    // Prompt for student marks
    const marks = promptForMarks();

    // Calculate and output the grade
    const grade = calculateGrade(marks);
    console.log(`The student's grade is: ${grade}`);
}

// Run the main program
main();
