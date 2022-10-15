const DoctorModel = require("../models/Doctor");

class Doctor {
  constructor(name, image, specialization, phone, tags) {
    this.name = name;
    this.image = image;
    this.specialization = specialization;
    this.phone = phone;
    this.tags = tags;
  }
}

const doctors = [
  new Doctor(
    "Zullu D. Balti",
    "zullu.png",
    "PhD, Bachaler",
    "0318-5183034",
    "cancer, heart"
  ),

  new Doctor(
    "Vinskmoke Sanji",
    "sanji.png",
    "PhD, Bone",
    "0318-5183031",
    "cancer, heart"
  ),

  new Doctor(
    "Shanks",
    "shanks.png",
    "MPhil, Heart",
    "0318-5183035",
    "cancer, heart"
  ),
  new Doctor(
    "Gold Roger",
    "roger.png",
    "MBBS, China",
    "0318-5183036",
    "cancer"
  ),
  new Doctor(
    "Rocks Xebecs",
    "rocks.png",
    "PhD, Bachaler",
    "0318-5183034",
    "heart"
  ),
  new Doctor(
    "Dracula Mihak",
    "mihak.png",
    "Bachealor, Russia",
    "0318-5183039",
    "cancer, heart"
  ),
];

const generateData = async () => {
  try {
    const drs = await DoctorModel.find({});
    if (drs.length < 3) {
      await DoctorModel.insertMany(doctors);
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = generateData;
