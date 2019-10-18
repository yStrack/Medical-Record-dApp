const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: String,
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
  authorizations: []
});

module.exports = mongoose.model("Patient", PatientSchema);
