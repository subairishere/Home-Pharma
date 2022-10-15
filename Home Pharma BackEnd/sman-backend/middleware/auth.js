const jwt = require("jsonwebtoken");

function authToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ error: "Token is required" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  if (!decoded.username) {
    return res.status(403).json({ error: "Token is invalid" });
  }

  if (!decoded.isAdmin) {
    return res.status(400).json({ error: "Invalid token" });
  }

  req.user = {
    username: decoded.username,
    isAdmin: decoded.isAdmin,
  };
  next();
}

module.exports = { authToken };
