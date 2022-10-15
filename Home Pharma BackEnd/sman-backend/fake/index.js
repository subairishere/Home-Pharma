const generateDoctors = require("./doctors");
const generateMedicine = require("./medicines");

const setup = () => {
  generateDoctors();
  generateMedicine();
};

module.exports = setup;
