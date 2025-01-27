const express = require('express');
const app = express();


function getDayMessage(day) {
    switch (day) {
        case 0:
            return "Happy Sunday! Relax and recharge!";
        case 1:
            return "Happy Monday! Start your week with energy!";
        case 2:
            return "Happy Tuesday! Keep up the great work!";
        case 3:
            return "Happy Wednesday! You're halfway through the week!";
        case 4:
            return "Happy Thursday! The weekend is almost here!";
        case 5:
            return "It's Friday! The weekend is near!";
        case 6:
            return "Happy Saturday! Enjoy your weekend!";
        default:
            return "Have a wonderful day!";
    }
}


app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || 'Guest'; 

    const currentDay = new Date().getDay();
    const dayMessage = getDayMessage(currentDay);

    res.json({
        welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
        dayMessage: dayMessage
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});
