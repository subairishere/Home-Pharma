const jwt = require("jsonwebtoken");

const login = (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    const info = { username, isAdmin: true };
    const token = jwt.sign(info, process.env.JWT_SECRET, { expiresIn: "30d" });
    return res.status(200).json({ token });
  }

  res.status(400).json({ error: "Invalid Email or Password" });
};

module.exports = login;
