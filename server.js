const express = require('express');
const app = express();

const PORT = 5647;

// Utility to get the current day of the week
// This function returns the name of the current day as a string.
const getCurrentDay = () => {
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
};

// API endpoint
// This endpoint accepts a query parameter 'name' and returns a personalized greeting with a message based on the current day.
app.get('/assistant/greet', (req, res) => {
    // Extracting the 'name' from query parameters, defaulting to "Guest" if not provided.
    const name = req.query.name || "Guest";
    
    // Getting the current day of the week
    const currentDay = getCurrentDay();

    let dayMessage;

    // Using if-else to set a customized day message based on the current day
    if (currentDay === "Monday") {
        dayMessage = "Happy Monday! Start your week with energy!";
    } else if (currentDay === "Friday") {
        dayMessage = "It's Friday! The weekend is near!";
    } else if (currentDay === "Sunday") {
        dayMessage = "It's a relaxing Sunday!";
    } else {
        dayMessage = "Have a wonderful day!";
    }

    // Respond with a JSON object containing the personalized greeting and day message
    res.json({
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    });
});

// Start the server and log the URL where the API is running
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
