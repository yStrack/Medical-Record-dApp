const Patient = require("../models/Patient");

module.exports = {
  async updateToNewSchema(req, res) {
    await Patient.findByIdAndUpdate(
      "5d9a0e2c6acd54c32e537981",
      {
        authorizations: []
      },
      (err, patient) => {
        if (err) {
          return res.json({ message: err });
        }
        return res.json({ patient });
      }
    );
    await Patient.findByIdAndUpdate(
      "5da5f5c472c48b5b12bf894a",
      {
        authorizations: []
      },
      (err, patient) => {
        if (err) {
          return res.json({ message: err });
        }
        return res.json({ patient });
      }
    );
    await Patient.findByIdAndUpdate(
      "5da642ce3b87d96528607b00",
      {
        authorizations: []
      },
      (err, patient) => {
        if (err) {
          return res.json({ message: err });
        }
        return res.json({ patient });
      }
    );
  }
};
