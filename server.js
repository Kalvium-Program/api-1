const express = require('express');
const app = express();

// Helper function to get the day-specific message
const getDayMessage = () => {
    const daysOfWeek = [
        "Happy Sunday! Relax and recharge!",
        "Happy Monday! Start your week with energy!",
        "Happy Tuesday! Keep going strong!",
        "Happy Wednesday! You're halfway through the week!",
        "Happy Thursday! The weekend is near!",
        "It's Friday! The weekend is here!",
        "Happy Saturday! Enjoy your day!"
    ];
    const today = new Date().getDay(); // Get the current day (0 = Sunday, 6 = Saturday)
    return daysOfWeek[today];
};

// GET endpoint for /assistant/greet
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name; // Retrieve the name from query parameters
    if (!name) {
        return res.status(400).json({
            error: "Please provide a name as a query parameter, e.g., /assistant/greet?name=John"
        });
    }
    const welcomeMessage = `Hello, ${name}! Welcome to our assistant app!`;
    const dayMessage = getDayMessage();

    res.json({
        welcomeMessage,
        dayMessage
    });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
