const express = require('express');
const app = express();

// Helper function to get the day message
const getDayMessage = () => {
    const day = new Date().getDay();
    switch(day) {
        case 1: // Monday
            return "Happy Monday! Start your week with energy!";
        case 5: // Friday
            return "It's Friday! The weekend is near!";
        default:
            return "Have a wonderful day!";
    }
};

// GET endpoint for the virtual assistant
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || 'Guest';
    const response = {
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: getDayMessage()
    };
    res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
