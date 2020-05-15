const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ApptSchema = new Schema({
  name: { // To be replaced by user ID when User Login is setup and working
    type: String,
    required: true
  },
  service: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true
  }

});

module.exports = Appt = mongoose.model('appt', ApptSchema);