const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

let Task = mongoose.model('Task', TaskSchema);
module.exports = { Task };
