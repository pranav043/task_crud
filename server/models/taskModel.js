const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
  },
  taskDescription: {
    type: String,
  },
  taskAssign: {
    type: String,
  },
  dueDate: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})

module.exports = mongoose.model('task', taskSchema)
