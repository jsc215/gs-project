const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const { User } = require('../models/user');
const { Task } = require('../models/task');
const { mongoose } = require('../db/mongoose');

// get info forms
router.get('/users', (req, res) => {
  User.find(
    (e, users) => {
      res.send({ users }).send;
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});

// post info form
router.post('/users', (req, res) => {
  const newUserObj = new User({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Address: req.body.Address,
    DOB: req.body.DOB,
    Gender: req.body.Gender,
    OSofChoice: req.body.OSofChoice,
    Email: req.body.Email,
    IsAccepted: req.body.IsAccepted
  });
  newUserObj.save().then(
    (doc) => {
      res.send(doc);
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});



//----Tasks----//

//Post task
router.post('/tasks', (req, res) => {
  let task = new Task({
    text: req.body.text
  });

  task.save().then(
    (doc) => {
      res.send(doc);
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});

// GET all tasks
router.get('/tasks', (req, res) => {
  Task.find(
    (e, tasks) => {
      res.send({ tasks }).send;
    },
    (e) => {
      res.status(400).send(e);
    }
  );
});

// GET post by id
router.get('/tasks/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Task.findOne({
    _id: id
  })
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send({ task });
    })
    .catch((e) => {
      res.status(400).send();
    });
});

// DELETE task
router.delete('/tasks/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Task.findOneAndRemove({
    _id: id
  })
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send({ task });
    })
    .catch((e) => {
      res.status(400).send();
    });
});

// UPDATE task
router.patch('/tasks/:id', (req, res) => {
  let id = req.params.id;

  let { text, completed } = req.body;
  let body = { text, completed };
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (body.completed === true && body.completed === true) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }
  Task.findOneAndUpdate({ _id: id }, { $set: body }, { new: true })
    .then((task) => {
      if (!task) {
        return res.status(404).send();
      }
      res.send({ task });
    })
    .catch((e) => {
      res.status(400).send;
    });
});

module.exports = router;
