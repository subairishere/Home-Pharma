const Doctor = require("../models/Doctor");
const fs = require("fs");
const path = require("path");

const get = async (req, res) => {
  const { tags } = req.query;
  const results = [];
  try {
    const doctors = await Doctor.find({}).lean();
    if (!tags) return res.status(200).json({ results: doctors });

    for (const dr in doctors) {
      for (const tg in tags.split(",")) {
        if (doctors[dr].tags.includes(tg.trim())) {
          results.push(dr);
          if (results.length >= 3) {
            return res.status(200).json({ results });
          }
        }
      }
    }
    if (results.length == 0) {
      return res.status(200).json({ results: doctors.slice(0, 3) });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const create = async (req, res) => {
  const { name, specialization, tags, phone } = req.body;
  const image = req.file.filename;
  try {
    const doctor = { name, specialization, tags, image, phone };

    const newDoctor = await Doctor.create(doctor);
    return res.status(200).json({ id: newDoctor._id });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const dr = await Doctor.findOneAndDelete({ _id: id });
    fs.rmSync(path.resolve(__dirname, `../uploads/${dr.image}`));
    return res.status(200).json({ result: dr._id });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { get, create, remove };
