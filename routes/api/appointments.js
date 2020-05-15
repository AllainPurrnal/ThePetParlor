const express = require('express');
const router = express.Router();

// Appointment Model
const Appt = require('../../models/Appointment');

// @route   GET api/appts
// @desc    Get All Appointments
// @access  Public (Will change to private once Authentication is implemented)
router.get('/', (req, res) => {
  Appt.find()
  .sort({ date: -1 })
  .sort({ time: -1 })
  .then(appts => res.json(appts))
});

// @route   POST api/appts
// @desc    Post an Appointment
// @access  Public (Will not need an account, just a valid email)
router.post('/', (req, res) => {
  const newAppt = new Appt({
    name: req.body.name,
    service: req.body.service,
    time: req.body.time,
    date: req.body.date,
  });

  newAppt.save().then(appt => res.json(appt));
});

// @route   DELETEapi/appts
// @desc    Delete an Appointment
// @access  Public (Will change to private once Authentication is implemented)
router.delete('/:id', (req, res) => {
  Appt.findById(req.params.id)
    .then(appt => appt.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});

// @route   PUT api/appts
// @desc    Edit an Appointment
// @access  Public (Will change to private once Authentication is implemented)


module.exports = router;