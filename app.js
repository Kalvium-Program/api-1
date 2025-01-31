const express = require('express');
const app = express();
const port = 3000; // The port the server will listen on

// Define a route to handle the greeting
app.get('/assistant/greet', (req, res) => {
  const name = req.query.name || 'Guest'; // Get the user's name from the query parameter
  const dayOfWeek = new Date().getDay(); // Get the current day of the week (0=Sunday, 6=Saturday)
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[dayOfWeek];

  // Create the response message
  const greeting = `Hello, ${name}! `;
  const dayMessage = `Today is ${dayName}. Have a wonderful day!`;

  res.json({
    greeting: greeting,
    dayMessage: dayMessage
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Virtual Assistant API is running on http://localhost:${port}`);
});
