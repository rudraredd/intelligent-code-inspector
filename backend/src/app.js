require('dotenv').config(); // Load environment variables first
const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const app = express();
const cors = require('cors');
// Middleware to parse JSON bodies - CRUCIAL for POST requests
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', aiRoutes);

module.exports = app;