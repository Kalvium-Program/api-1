const express = require('express');
const app = express();

// Create a GET endpoint at "/assistant/greet"
app.get('/', (req, res) => {
  res.send('Welcome to the Virtual Assistant API! Use /assistant/greet?name=YourName for personalized greetings.');
});

app.get('/assistant/greet', (req, res) => {
    // Extract the name from the query parameter
    const name = req.query.name;

    if (!name) {
        return res.status(400).json({ error: "Name is required!" });
    }

    // Get the current day of the week
    const currentDay = new Date().toLocaleString('en-us', { weekday: 'long' });

    // Define the day-specific messages
    let dayMessage = "Have a wonderful day!";
    if (currentDay === "Monday") {
        dayMessage = "Happy Monday! Start your week with energy!";
    } else if (currentDay === "Friday") {
        dayMessage = "It's Friday! The weekend is near!";
    }

    // Create the response object with the welcome message and day message
    const response = {
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage,
    };

    // Send the response
    res.json(response);
});

// Set the port for the server to listen
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});