const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const entrepreneurRoutes = require('./routes/entrepreneurs');
const investorRoutes = require('./routes/investors');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/entrepreneurs', entrepreneurRoutes);
app.use('/api/investors', investorRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 