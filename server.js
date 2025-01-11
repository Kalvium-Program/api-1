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

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Welcome message
app.get("/", (req, res) => {
  res.send("Welcome to the Virtual Assistant API!");
});

// Responses array to store custom day-specific messages
const responses = [];

// CREATE a new response (Add a custom day message)
app.post("/responses", (req, res) => {
  const response = req.body; // Expecting { "day": <number>, "message": <string> }
  if (response.day < 0 || response.day > 6 || !response.message) {
    return res
      .status(400)
      .send(
        "Invalid input. Ensure day is between 0 (Sunday) and 6 (Saturday) and message is provided."
      );
  }
  responses.push(response);
  res.status(201).send("Custom response created!");
});

// READ all responses (View all custom day messages)
app.get("/responses", (req, res) => {
  res.json(responses);
});

// UPDATE a specific response by ID
app.put("/responses/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updatedResponse = req.body;

  if (
    id < 0 ||
    id >= responses.length ||
    !updatedResponse.message ||
    updatedResponse.day < 0 ||
    updatedResponse.day > 6
  ) {
    return res.status(400).send("Invalid input or response not found.");
  }

  responses[id] = updatedResponse;
  res.send("Custom response updated!");
});

// DELETE a specific response by ID
app.delete("/responses/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (id < 0 || id >= responses.length) {
    return res.status(404).send("Response not found!");
  }

  responses.splice(id, 1);
  res.send("Custom response deleted!");
});

// GET endpoint to greet a user based on their name and the day
app.get("/assistant/greet", (req, res) => {
  const name = req.query.name;

  if (!name) {
    return res
      .status(400)
      .json({
        error:
          "Please provide a name in the query parameter (e.g., ?name=John).",
      });
  }

  const today = new Date().getDay(); // Get current day of the week
  const dayMessages = [
    "Happy Sunday! Enjoy your day off!",
    "Happy Monday! Start your week with energy!",
    "Happy Tuesday! Keep the momentum going!",
    "Happy Wednesday! You're halfway through the week!",
    "Happy Thursday! The weekend is near!",
    "It's Friday! The weekend is near!",
    "Happy Saturday! Have a relaxing day!",
  ];

  const defaultMessage = dayMessages[today];
  const customResponse = responses.find((response) => response.day === today); // Check for custom response
  const dayMessage = customResponse ? customResponse.message : defaultMessage;

  const response = {
    welcomeMessage: `Hello, ${name}! Welcome to our assistant app!`,
    dayMessage: dayMessage,
  };

  res.json(response);
});

// Start the server
app.listen(port, () => {
  console.log(`Virtual Assistant API running at http://localhost:${port}`);
});
