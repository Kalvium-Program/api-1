// Boilerplate Code for Virtual Assistant API
// const express = require('express');
// const app = express();

/*
Task:
You need to build an API for a virtual assistant that provides customized responses.

Requirements:
1. Create a GET endpoint at "/assistant/greet".
2. The endpoint should accept a "name" as a query parameter (e.g., /assistant/greet?name=John).
3. The API should return a JSON response with:
   a. A personalized greeting using the name provided.
   b. A cheerful message based on the current day of the week.

Example Responses:
- For Monday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Happy Monday! Start your week with energy!"
  }
- For Friday:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "It's Friday! The weekend is near!"
  }
- For other days:
  {
    "welcomeMessage": "Hello, John! Welcome to our assistant app!",
    "dayMessage": "Have a wonderful day!"
  }

Add the required logic below to complete the API.
*/

// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
// });






const express = require('express');
const app = express();

// Create a GET endpoint at "/assistant/greet"
app.get('/', (req, res) => {
  res.send('Welcome to the Virtual Assistant API! Use /assistant/greet?name=Yourname for personalized greetings.');
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
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Virtual Assistant API is running on http://localhost:${PORT}`);
});