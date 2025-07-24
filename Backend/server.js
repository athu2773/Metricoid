const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/user.routes");
require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", router);

mongoose
  .connect("mongodb+srv://lms_db:2khARTDSooAMxxTZ@cluster0.9ftnnen.mongodb.net/Metricoid")
  .then(() =>
    app.listen(5000, () => console.log("Server running on Port 5000"))
  )
  .catch((err) => console.log(err));
