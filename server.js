const express = require('express');
const app = express();
const port = 3000;

// Define the endpoint
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name;

    // Validate input
    if (!name) {
        return res.status(400).json({ error: "Name parameter is required" });
    }

    // Determine the current day of the week
    const daysOfWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    const today = new Date();
    const dayName = daysOfWeek[today.getDay()];

    // Set day-specific messages
    let dayMessage;
    if (dayName === "Monday") {
        dayMessage = "Happy Monday! Start your week with energy!";
    } else if (dayName === "Friday") {
        dayMessage = "It's Friday! The weekend is near!";
    } else {
        dayMessage = "Have a wonderful day!";
    }

    // Send the response
    res.json({
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/assistant/greet?name=Rudhresh`);
});
