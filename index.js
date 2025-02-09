const express = require("express");
const app = express();
const PORT = 8080; // Change the port if needed

// Define a simple route
app.get("/", (req, res) => {
  res.send("Welcome to my Node.js server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});