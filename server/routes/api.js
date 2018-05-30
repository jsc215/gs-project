const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const {User} = require('../models/user');
const { mongoose } = require('../db/mongoose');


router.get('/users', (req, res) => {
  User.find((e, users) => {
    res.send({ users })
  }, (e) => {
    res.status(400).send(e);
  });
});

router.post('/users', (req, res) => {
  const newUserObj = new User({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Address: req.body.Address,
    DOB: req.body.DOB,
    Gender: req.body.Gender,
    OSofChoice: req.body.OSofChoice,
    Email: req.body.Email,
    IsAccepted: req.body.IsAccepted,
  });
  newUserObj.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e)
    });
  });


module.exports = router;
