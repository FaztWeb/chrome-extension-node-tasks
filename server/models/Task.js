const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = model('Task', taskSchema)