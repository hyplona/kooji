const express = require('express');
const aiRoutes = require("./routes/ai.routes");
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ API routes
app.use('/ai', aiRoutes);

// ✅ Serve frontend (React build)
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// ✅ Catch-all route for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

module.exports = app;
