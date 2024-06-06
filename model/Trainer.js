const { Schema, model } = require("../config/db-connect");

const trainerSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model("Trainer", trainerSchema);
