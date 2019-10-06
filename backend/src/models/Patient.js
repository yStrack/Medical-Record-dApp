const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: Number,
  cpf: {
    type: String,
    required: true
  }, // CPF
  gender: {
    type: String,
    enum: ["male", "female", "other"]
  },
  address: String // User primary key
});

module.exports = mongoose.model("Patient", PatientSchema);
