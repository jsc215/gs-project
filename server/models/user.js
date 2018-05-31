const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Address: {
    type: String,
    required: true
  },
  DOB: {
    type: String,
    required: true
  },
  Gender: {
    type: String,
    required: true
  },
  OSofChoice: {
    type: String,
    required: false
  },

  Email: {
    type: String,
    required: true
  },
  IsAccepted: {
    type: Number,
    required: true
  }
});

let User = mongoose.model('User', UserSchema);
module.exports = { User };
