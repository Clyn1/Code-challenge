function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemeritPoint = 5;

  // Check if speed is less than or equal to the speed limit
  if (speed <= speedLimit) {
    return "Ok"; // No demerit points
  }

  // Calculate the number of kilometers over the speed limit
  const kmOverLimit = speed - speedLimit;

  // Calculate the number of demerit points based on kmPerDemeritPoint
  const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint);

  // Check for license suspension based on demerit points
  if (demeritPoints > 12) {
    return "License suspended";
  }

  // Return formatted string with demerit points
  return `Points: ${demeritPoints}`;
}

// Prompt user for car speed
const carSpeed = parseFloat(prompt("Enter car speed (km/h):"));

// Calculate demerit points and check license status
const result = calculateDemeritPoints(carSpeed);

// Display the results
console.log(result);
