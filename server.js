require('./server/config/config');
const express = require('express');
const { ObjectID } = require('mongodb');
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { mongoose } = require('./server/db/mongoose');
const { User } = require('./server/models/user');
const port = process.env.PORT;

// express wired up
const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(cors());

// angular assets and entry point
app.use(express.static(path.join(__dirname, '/dist/goji-project')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/goji-project/index.html'));
});




app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

