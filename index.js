const express = require("express");
const app = express();

const PORT = process.env.PORT || 3003;

// Root route
app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Node.js + Express Server</h1>
    <h2>Your server is running successfully.</h2>
    <h2>FROM BIND MOUNTED VOLUME  REMOVED NDOEMONNNNN yalla ngarrab -L FLAAAGGG</h2>
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