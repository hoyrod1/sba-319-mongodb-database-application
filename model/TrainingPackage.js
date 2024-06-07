const { Schema, model } = require("../config/db-connect");

const trainerSchema = Schema({
  type: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model("TrainingPackage", trainerSchema);
