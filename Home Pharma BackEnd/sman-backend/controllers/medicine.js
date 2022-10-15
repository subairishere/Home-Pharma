const Medicine = require("../models/Medicine");
const Ask = require("../models/Ask");
const fs = require("fs");
const path = require("path");

const get = async (req, res) => {
  const { query, category } = req.query;
  const projection = {
    _id: 1,
    name: 1,
    image: 1,
    price: 1,
    packSize: 1,
    size: 1,
    discount: 1,
    category: 1,
  };
  try {
    let pills = await Medicine.find({}, projection).lean();
    if (query && query !== "null") {
      pills = pills.filter((pill) => pill.name.includes(query.toLowerCase()));
    }

    if (category && category !== "null") {
      pills = pills.filter((pill) =>
        pill.category.includes(category.toLowerCase())
      );
    }

    return res.status(200).json({ results: pills });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const getSingle = async (req, res) => {
  try {
    const pill = await Medicine.find({ _id: req.params.id }).lean();
    return res.status(200).json({ result: pill[0] });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const create = async (req, res) => {
  const medicine = req.body;
  const image = req.file.filename;
  try {
    medicine.image = image;
    const newMedicine = await Medicine.create(medicine);
    return res.status(200).json({ id: newMedicine._id });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const dr = await Medicine.findOneAndDelete({ _id: id });
    fs.rmSync(path.resolve(__dirname, `../uploads/${dr.image}`));
    return res.status(200).json({ result: dr._id });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { get, getSingle, create, remove };
