const Patient = require("../models/Patient");

module.exports = {
  async store(req, res) {
    const { email } = req.body;
    const { password } = Math.random()
      .toString(36)
      .slice(2); // password is randomly generated
    const { name } = req.body;
    const { cpf } = req.body;
    const { age } = req.body;
    const { gender } = req.body;

    let patient = await Patient.findOne({ email });

    // if patient does not exists
    if (!patient) {
      patient = await Patient.create({
        email,
        password,
        name,
        cpf,
        age,
        gender
      });
    }
    return res.json(patient);
  }
};
