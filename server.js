const express = require('express');
const app = express();

/*
Task:
Create a GET endpoint at "/assistant/greet" to return a personalized greeting and a day-specific message.
*/

// GET /assistant/greet
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || 'Guest'; // Get "name" from query parameter, or use "Guest" as default
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const currentDay = days[today.getDay()]; // Get the current day of the week

    // Day-specific messages
    let dayMessage;
    switch (currentDay) {
        case 'Monday':
            dayMessage = "Happy Monday! Start your week with energy!";
            break;
        case 'Friday':
            dayMessage = "It's Friday! The weekend is near!";
            break;
        default:
            dayMessage = "Have a wonderful day!";
    }

    // Response object
    const response = {
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage,
    };

    res.json(response); // Send JSON response
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
