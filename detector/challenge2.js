const speedLimit = 70;
const demeritLimit = 12;

function speedDetector() {
  // Prompt the user to enter the car speed
  const carSpeed = prompt("Please enter the car speed (in km/s):");
  
  // Validate the input
  if (carSpeed >= 0) {
    let demeritPoints = 0;
    
    // Calculate the number of demerit points
    if (carSpeed > 70) {
      demeritPoints = Math.floor((carSpeed - 70) / 5);
    }
    
    // Display the result
    const outputDiv = document.getElementById("output");
    if (demeritPoints === 0) {
      outputDiv.innerHTML = "Ok";
    } else if (demeritPoints <= 12) {
      outputDiv.innerHTML = "Points: " + demeritPoints;
    } else {
      outputDiv.innerHTML = "License suspended";
    }
  } else {
    // Display an error message if the input is invalid
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "Invalid input! Please enter a non-negative number.";
  }
}