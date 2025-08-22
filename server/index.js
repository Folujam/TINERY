// This file sets up the Express server and connects to the MongoDB database
// server/index.js
const express = require('express');
const connectDB = require('./db');
const todoRoutes = require('./routes/todos');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse JSON request bodies
app.use(express.json());

app.use(cors({ origin: 'http://localhost:3000' }));

//Routes
app.use('/api/todos', todoRoutes);
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server listening on port ${PORT}`);
    });
});
