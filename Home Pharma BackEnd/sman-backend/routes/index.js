const express = require("express");
const router = express.Router();

const doctorsRouter = require("./doctors");
const medicineRouter = require("./medicine");
const askRouter = require("./ask");
const salesRouter = require("./sales");
const authRouter = require("./auth");

const validator = require("../validators/contact");
const transporter = require("../transporter");

router.use("/doctors", doctorsRouter);
router.use("/medicine", medicineRouter);
router.use("/ask", askRouter);
router.use("/sales", salesRouter);
router.use("/auth", authRouter);

router.post("/contact", [validator], async (req, res) => {
  const { name, email, msg, subject } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_ADDRESS,
    subject: subject,
    html: `
    <html>
    <body>
      <div>
        <h1>From, ${name}</h1>
        <h2>Subject, ${subject}</h2> 
        <p>${msg}</p> 
      </div>
    </body>
    </html>
    `,
  };

  try {
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) return res.status(500).json();
      else return res.status(200).json();
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
