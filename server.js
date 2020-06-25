const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// DB Config
const db = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(db, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/appts', require('./routes/api/appointments'));
// app.use('api/users', require('./routes/api/users'));

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));