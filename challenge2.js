// Define a function to calculate demerit points
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmOverLimit = 1;

    // If speed is less than or equal to the speed limit, return 0 points
    if (speed <= speedLimit) {
        return 0;
    }

    // Calculate the number of km/h over the speed limit
    const kmOverLimit = speed - speedLimit;

    // Calculate the number of demerit points
    const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint) * pointsPerKmOverLimit;

    return demeritPoints;
}

// Define a function to check if license is suspended
function checkLicenseStatus(points) {
    const pointsToSuspend = 12;

    if (points >= pointsToSuspend) {
        return "License suspended";
    } else {
        return "Points: " + points;
    }
}

// Function to handle the entire process
function processSpeed(speed) {
    const demeritPoints = calculateDemeritPoints(speed);
    const result = checkLicenseStatus(demeritPoints);
    console.log(result);
}

// Example usage
const carSpeed = 80;
processSpeed(carSpeed);
