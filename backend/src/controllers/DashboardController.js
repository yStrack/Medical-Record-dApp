const Patient = require("../models/Patient");

module.exports = {
  async show(req, res) {
    const { user_id } = req.headers;

    const infos = await Patient.findById(user_id);
    const { name, age, cpf, gender, authorizations } = infos;
    res.json({ name, age, cpf, gender, authorizations });
  },

  async addAuth(req, res) {
    const { user_id } = req.headers;
    let { hospital } = req.body;
    hospital = hospital.toLowerCase();

    const infos = await Patient.findById(user_id);
    const { authorizations } = infos;
    if (authorizations.indexOf(hospital) != -1) {
      return res.json({ status: "FAIL", message: "Already authorized" });
    }
    authorizations.push(hospital);

    await Patient.findByIdAndUpdate(
      user_id,
      { authorizations: authorizations },
      { new: true },
      (err, patient) => {
        if (err) {
          return res.json({ message: err });
        }
        // return res.json(patient); // for debug
        return res.json(patient.authorizations);
      }
    );
  },

  async removeAuth(req, res) {
    const { user_id } = req.headers;
    let { hospital } = req.body;
    hospital = hospital.toLowerCase();

    const infos = await Patient.findById(user_id);
    const { authorizations } = infos;
    const index = authorizations.indexOf(hospital);
    if (index == -1) {
      return res.json({
        status: "FAIL",
        message: "Hospital already not authorized"
      });
    }
    authorizations.splice(index, 1);

    await Patient.findByIdAndUpdate(
      user_id,
      { authorizations: authorizations },
      { new: true },
      (err, patient) => {
        if (err) {
          return res.json({ message: err });
        }
        // return res.json(patient); // for debug
        return res.json(patient.authorizations);
      }
    );
  }
};
