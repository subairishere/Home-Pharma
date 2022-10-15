const Ask = require("../models/Ask");
const fs = require("fs");
const path = require("path");

const get = async (req, res) => {
  try {
    const asks = await Ask.find({ answer: "" }).lean();
    return res.status(200).json({ results: asks });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const create = async (req, res) => {
  const { username, email } = req.body;
  const image = req.file.filename;
  try {
    const newAsk = new Ask({ username, email, image });
    await newAsk.save();
    return res.status(200).json({ result: "query recieved" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const answer = async (req, res) => {
  const id = req.params.id;
  const { answer } = req.body;
  try {
    const ask = await Ask.findById(id);
    ask.answer = answer;
    await ask.save();
    return res.status(200).json({ result: ask });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

module.exports = { create, get, answer };
