
document.getElementById('akanForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const gender = document.getElementById('gender').value;

    // Validate the day and month
    if (day <= 0 || day > 31 || month <= 0 || month > 12) {
        alert('Please enter a valid day and month.');
        return; // Stop further execution if input is invalid
    }

    // Validate gender
    if (gender !== 'male' && gender !== 'female') {
        alert('Please select a valid gender.');
        return;
    }

    // Calculate the day of the week using the formula
    const m = month < 3 ? month + 12 : month; // Adjust month for Jan and Feb
    const y = month < 3 ? year - 1 : year; // Adjust year for Jan and Feb
    const k = y % 100;
    const j = Math.floor(y / 100);

    const dayOfWeek = (day + Math.floor((13 * (m + 1)) / 5) + k + Math.floor(k / 4) + Math.floor(j / 4) - (2 * j)) % 7;

    // Akan names arrays
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    // Select the correct Akan name based on gender and day of the week
    let akanName;
    if (gender === 'male') {
        akanName = maleNames[dayOfWeek];
    } else {
        akanName = femaleNames[dayOfWeek];
    }

    // Display the Akan name to the user
    document.getElementById('result').textContent = `Your Akan name is ${akanName}`;
});
