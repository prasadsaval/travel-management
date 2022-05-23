const express = require("express");
const mongoose = require("mongoose");
const PassangerRoutes = require("./routes/Passangers");

const app = express();
app.use(express.json());
require("dotenv").config();

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("unable to connect database");
  });

app.use("/api/passanger", PassangerRoutes);

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`server is running on the port ${port}`);
});
