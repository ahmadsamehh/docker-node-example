const express = require("express");
const app = express();

const PORT = process.env.PORT || 3003;
const text = process.env.NODE_ENV === "production" ? "Hello from PRODUCTION!" : "Hello from DEVELOPMENT!";
const mongoose = require('mongoose');
const { MONGO_IP, MONGO_PORT, MONGO_USERNAME, MONGO_PASSWORD } = require('./config/config');
const mongourl = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

// Connect to MongoDB
const connectWithRetry = () => {
  mongoose
    .connect(mongourl)
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch((error) => {
      console.error('Failed to connect to MongoDB, retrying in 5 seconds...');
      console.error(error.message);
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();


// Root route
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Node.js + Express Server</h1>
    <h2>Your server is running successfully.</h2>
    <h2>${text}</h2>
    <h2> TEST DEVELOPMENT </h2>
    <p>Available routes:</p>
    <ul>
      <li><a href="/health">/health</a></li>
      <li><a href="/ahmad">/ahmad</a></li>
    </ul>
  `);
});

// Health check route (very useful for Docker / monitoring)
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Server is healthy",
    uptime: process.uptime()
  });

  res.send(`
    <h1>🚀 Node.js + Express Server</h1>
    <p>Your server is running successfully. HEALTH CHECK</p>
  `);
    
});

app.get("/ahmad", (req, res) => {
  res.send(`
<h1>🚀 Node.js + Express Server</h1>
    <p>Ahmad is here!</p>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
