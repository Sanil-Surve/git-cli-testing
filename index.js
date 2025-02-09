const express = require("express");
const app = express();
const PORT = 3001; // Change the port if needed

// Define a simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Node.js GitHub CLI testing server!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});