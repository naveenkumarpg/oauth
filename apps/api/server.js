// Import necessary modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

// Use CORS middleware
app.use(cors());

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Define a port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
