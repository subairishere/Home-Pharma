require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes/index");
const setupFakeData = require("./fake/index");

mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected Successfully");
    setupFakeData();
  })
  .catch((err) => console.error("Not Connected", err));

const app = express();

app.use(express.json());
app.use("/media", express.static(path.resolve(__dirname, "./uploads")));
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`app is litening on port ${PORT}`));
