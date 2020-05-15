const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const appts = require('./routes/api/appointments');

const app = express();

// Bodyparser
app.use(bodyParser.json());

// DB Config
const db = require('./config/key').mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err))

// Use Routes
app.use('/api/appts', appts);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));