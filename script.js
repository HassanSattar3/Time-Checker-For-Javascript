// script.js
// Get the current date
const today = new Date();

// Format the date (e.g., DD-MM-YYYY)
const day = today.getDate(); // Day of the month (1-31)
const month = today.getMonth() + 1; // Month (0-11, so add 1)
const year = today.getFullYear(); // Full year (e.g., 2024)

// Format as a string
const formattedDate = `${day}-${month}-${year}`;

// Display the date in the HTML element
document.getElementById('currentDate').textContent = formattedDate;
