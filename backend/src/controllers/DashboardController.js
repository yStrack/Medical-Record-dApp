const Patient = require("../models/Patient");

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const infos = await Patient.findById(user_id);
    const { name, age, cpf, gender } = infos;
    res.json({ name, age, cpf, gender });
  }
};
