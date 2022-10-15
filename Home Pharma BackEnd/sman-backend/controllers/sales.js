const Sale = require("../models/Sale");
const Medicine = require("../models/Medicine");
const transporter = require("../transporter");

const sendMail = async (username, email) => {
  const mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: [email, process.env.EMAIL_ADDRESS],
    subject: "Order",
    html: `
    <html>
    <body>
      <div>
        <p>Hi, ${username}</p>
        <p>We are please to inform you that your order has been recieved we will keep you updated</p> 
      </div>
    </body>
    </html>
    `,
  };

  try {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) console.log(err);
      else console.log(info);
    });
  } catch (err) {
    console.log(err);
  }
};

const get = async (req, res) => {
  try {
    const sales = await Sale.find({}).lean();
    return res.status(200).json({ results: sales });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const getSingle = async (req, res) => {
  const { id } = req.params;
  const projection = {
    _id: 1,
    name: 1,
    image: 1,
    price: 1,
    packSize: 1,
    size: 1,
    discount: 1,
  };
  try {
    const sales = await Sale.findById(id).lean();

    let index = 0;
    for (const pill of sales.pills) {
      const pillDetails = await Medicine.findById(
        pill.pillId,
        projection
      ).lean();
      sales.pills[index] = { ...pill, ...pillDetails };
      index++;
    }

    return res.status(200).json({ results: sales });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const create = async (req, res) => {
  let { address, userInfo, pills } = req.body;
  const drNote = req?.file?.filename || "";
  try {
    userInfo = JSON.parse(userInfo);

    if (address) address = JSON.parse(address);
    else address = {};

    pills = JSON.parse(pills);
    const sale = new Sale({ pills, userInfo, address, drNote });
    await sale.save();
    sendMail(userInfo.username, userInfo.email);
    return res.status(200).json({ id: sale._id });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const sale = await Sale.findById(id);
    sale.status = status;
    await sale.save();
    return res.status(200).json({ result: "successfully updated" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ result: "internal server error" });
  }
};

module.exports = { get, getSingle, create, update };
