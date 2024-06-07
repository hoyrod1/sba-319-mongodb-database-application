const { Schema, model } = require("../config/db-connect");

const trainingPackageSchema = Schema({
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

trainingPackageSchema.index({ type: 1 });
trainingPackageSchema.index({ pricePerHour: 1 });
trainingPackageSchema.index({ description: 1 });

module.exports = model("TrainingPackage", trainingPackageSchema);
