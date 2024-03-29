const Patient = require("../models/Patient");

module.exports = {
  async authorizedHospitals(req, res) {
    let { hospital_id } = req.headers;
    const { id } = req.headers;
    hospital_id = hospital_id.toLowerCase();
    await Patient.find({ cpf: id }, (err, patient) => {
      if (err) {
        return res.json({ message: err });
      }
      if (patient.length == 0) {
        return res.status(400).json({ message: "User not found" });
      }
      if (patient[0].authorizations.indexOf(hospital_id) == -1) {
        return res.json({
          status: "FAIL",
          message: "Access denied by patient"
        });
      }
      return res.json({ status: "OK", auth: patient[0].authorizations });
    });
  }
};
